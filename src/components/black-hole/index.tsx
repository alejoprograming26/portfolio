import { useEffect, useRef, useState } from "react";
import { createRenderer } from "./renderer";

export interface VgpuBlackHoleProps {
  className?: string;
  centerX?: number;
  centerY?: number;
  distance?: number;
}

const canUseWebGpu = () => typeof navigator !== "undefined" && "gpu" in navigator;

/** Official VGPU Black Hole simulation component (decorative background) */
export function VgpuBlackHole({
  className = "",
  centerX = 0,
  centerY = 0,
  distance,
}: VgpuBlackHoleProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);
  const [webGpuSupported, setWebGpuSupported] = useState(canUseWebGpu);

  useEffect(() => {
    if (!webGpuSupported) return;

    let cancelled = false;
    const canvas = canvasRef.current;
    if (!canvas) return;

    let renderer: ReturnType<typeof createRenderer> | undefined;
    try {
      renderer = createRenderer({ canvas, centerX, centerY, distance });
      void renderer.ready
        .then(() => {
          if (!cancelled) setIsReady(true);
        })
        .catch((err) => {
          console.warn("VGPU WebGPU initialization failed:", err);
          if (!cancelled) setWebGpuSupported(false);
        });
    } catch (err) {
      console.warn("VGPU WebGPU creation failed:", err);
      queueMicrotask(() => {
        if (!cancelled) setWebGpuSupported(false);
      });
    }

    return () => {
      cancelled = true;
      renderer?.dispose();
    };
  }, [centerX, centerY, distance, webGpuSupported]);

  return (
    <div className={`relative h-full w-full overflow-hidden select-none ${className}`} aria-hidden="true">
      <canvas
        ref={canvasRef}
        className={`block h-full w-full touch-none transition-opacity duration-1000 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loading prewarm pulse */}
      {!isReady && webGpuSupported && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black pointer-events-none">
          <div className="relative flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border border-lime-500/20 animate-ping opacity-30" />
            <div className="absolute w-10 h-10 rounded-full border border-lime-400/40 animate-spin border-t-transparent" />
            <div className="absolute w-4 h-4 rounded-full bg-lime-400/30 blur-sm animate-pulse" />
          </div>
          <span className="mt-4 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
            Iniciando WebGPU...
          </span>
        </div>
      )}

      {/* Fallback for environments without WebGPU acceleration */}
      {!webGpuSupported && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-zinc-950/95 border border-zinc-900">
          <div className="w-14 h-14 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center mb-3">
            <span className="text-xl">🌌</span>
          </div>
          <p className="text-xs font-mono font-medium text-zinc-300">VGPU • Agujero Negro</p>
          <p className="text-[11px] text-zinc-500 mt-1 max-w-[220px]">
            Requiere un navegador con WebGPU habilitado (Chrome 113+, Edge, Firefox Nightly).
          </p>
        </div>
      )}
    </div>
  );
}

export default VgpuBlackHole;
