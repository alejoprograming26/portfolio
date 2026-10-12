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

      {/* Seamless cosmic singularity visual for devices or browsers without WebGPU */}
      {!webGpuSupported && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden bg-black/50">
          {/* Gravitational lensing & accretion glow halo */}
          <div className="relative flex items-center justify-center w-[300px] sm:w-[480px] h-[300px] sm:h-[480px] -mt-16 sm:mt-0">
            {/* Outer cosmic glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40 animate-pulse-slow"
              style={{
                background:
                  'radial-gradient(circle, rgba(163, 230, 53, 0.35) 0%, rgba(34, 197, 94, 0.15) 45%, transparent 70%)',
              }}
            />
            {/* Accretion disk tilt ring */}
            <div
              className="absolute w-[260px] sm:w-[420px] h-[90px] sm:h-[130px] rounded-full border border-lime-400/40 blur-[1px] shadow-[0_0_50px_rgba(163,230,53,0.35)] -rotate-12"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(163, 230, 53, 0.18) 0%, rgba(20, 83, 45, 0.05) 60%, transparent 80%)',
              }}
            />
            {/* Secondary relativistic beam ring */}
            <div className="absolute w-[220px] sm:w-[360px] h-[70px] sm:h-[100px] rounded-full border border-emerald-400/30 blur-[2px] -rotate-12" />
            {/* Event Horizon (Pure Black Void) */}
            <div className="relative w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-black border-2 border-white/20 shadow-[0_0_35px_rgba(163,230,53,0.45)] flex items-center justify-center">
              <div className="w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-black shadow-inner" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VgpuBlackHole;
