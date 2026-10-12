import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, Check, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const SUCCESS_VISIBLE_MS = 7000;
const EMPTY_FORM = { name: '', email: '', message: '', honeypot: '' };
type FormField = keyof typeof EMPTY_FORM;

const inputClassName =
  'w-full px-3.5 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus-visible:outline-none focus:border-lime-400/80 transition-colors';

export const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [successNotice, setSuccessNotice] = useState('¡Mensaje Enviado con Éxito!');
  const [successDetail, setSuccessDetail] = useState(
    'Gracias por ponerte en contacto. Responderé a tu correo a la brevedad posible.'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const resetTimerRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!formSubmitted) return;
    resetTimerRef.current = window.setTimeout(() => setFormSubmitted(false), SUCCESS_VISIBLE_MS);
    return () => window.clearTimeout(resetTimerRef.current);
  }, [formSubmitted]);

  useEffect(() => () => window.clearTimeout(resetTimerRef.current), []);

  const handleChange =
    (field: FormField) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { value } = event.target;
      setFormData((previous) => ({ ...previous, [field]: value }));
      if (errorMessage) setErrorMessage(null);
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;

    // Honeypot anti-spam check
    if (formData.honeypot) {
      setFormSubmitted(true);
      setFormData(EMPTY_FORM);
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    const web3FormsKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();

    try {
      if (web3FormsKey) {
        // Preferred service: Web3Forms (with access key)
        const response = await fetch('https://api.web3Forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: web3FormsKey,
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
            from_name: `${trimmedName} (Portafolio)`,
            subject: `Nuevo contacto desde el Portafolio: ${trimmedName}`,
            botcheck: '',
          }),
        });

        if (!response.ok) {
          throw new Error(`Error en el servicio de correo (${response.status})`);
        }

        const data = (await response.json()) as { success?: boolean; message?: string };
        if (data.success) {
          setSuccessNotice('¡Mensaje Enviado con Éxito!');
          setSuccessDetail('Gracias por contactarme. He recibido tu mensaje y te responderé en breve.');
          setFormSubmitted(true);
          setFormData(EMPTY_FORM);
        } else {
          throw new Error(data.message || 'Error al enviar por Web3Forms');
        }
      } else {
        // Direct zero-config delivery via FormSubmit AJAX to target email
        const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: trimmedName,
            email: trimmedEmail,
            message: trimmedMessage,
            _subject: `Nuevo contacto en Portafolio: ${trimmedName}`,
            _template: 'table',
            _captcha: 'false',
          }),
        });

        if (!response.ok) {
          throw new Error(`Error en la entrega del mensaje (${response.status})`);
        }

        const data = (await response.json()) as { success?: string | boolean; message?: string };
        const msg = String(data?.message || '');

        if (data.success === 'true' || data.success === true) {
          setSuccessNotice('¡Mensaje Enviado con Éxito!');
          setSuccessDetail('Tu mensaje fue enviado directamente a mi bandeja de entrada. Te responderé pronto.');
          setFormSubmitted(true);
          setFormData(EMPTY_FORM);
        } else if (msg.includes('Activation') || msg.includes('Activate')) {
          setSuccessNotice('¡Formulario Recibido!');
          setSuccessDetail(
            'FormSubmit ha enviado un enlace de confirmación a tu correo para activar los envíos automáticos. ¡Revisa tu bandeja de entrada!'
          );
          setFormSubmitted(true);
          setFormData(EMPTY_FORM);
        } else {
          throw new Error(msg || 'No se pudo procesar el envío.');
        }
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setErrorMessage(
        'Hubo un problema temporal con el servidor de correos. Puedes escribirme directamente a ' +
          PERSONAL_INFO.email
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl bg-zinc-950 border border-zinc-800 relative overflow-hidden"
      aria-label="Formulario de contacto"
    >
      {formSubmitted && (
        <div
          className="absolute inset-0 bg-zinc-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-fadeIn"
          role="status"
          aria-live="polite"
        >
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mb-3">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-1">{successNotice}</h3>
          <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
            {successDetail}
          </p>
          <button
            type="button"
            onClick={() => setFormSubmitted(false)}
            className="mt-4 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-xs font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
          >
            Enviar otro mensaje
          </button>
        </div>
      )}

      <div className="space-y-4">
        {errorMessage && (
          <div
            role="alert"
            className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-xs font-mono text-red-300 flex items-start gap-2.5"
          >
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <div>
              <span>{errorMessage} </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="underline text-lime-400 hover:text-lime-300 font-bold ml-1 inline-block"
              >
                Abrir correo
              </a>
            </div>
          </div>
        )}

        {/* Honeypot hidden input against bot spam */}
        <input
          type="text"
          name="_honey"
          value={formData.honeypot}
          onChange={handleChange('honeypot')}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contact-name" className="block text-xs font-mono text-zinc-400 mb-1.5">
              Tu Nombre
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange('name')}
              placeholder="Ej. Carlos Mendoza"
              className={inputClassName}
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="block text-xs font-mono text-zinc-400 mb-1.5">
              Tu Correo Electrónico
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange('email')}
              placeholder="carlos@empresa.com"
              className={inputClassName}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-xs font-mono text-zinc-400 mb-1.5">
            Mensaje o Detalles del Proyecto
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={4}
            required
            value={formData.message}
            onChange={handleChange('message')}
            placeholder="Cuéntame sobre tus objetivos técnicos, requerimientos de arquitectura o plazos..."
            className={`${inputClassName} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 text-black font-mono text-xs font-bold tracking-wider uppercase hover:brightness-110 shadow-lg shadow-lime-400/20 transition-[filter,opacity] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span>Enviando mensaje...</span>
          ) : (
            <>
              <span>Enviar Mensaje</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
};
