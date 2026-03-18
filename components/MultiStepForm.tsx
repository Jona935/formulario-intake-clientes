'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send, Loader2, CheckCircle } from 'lucide-react'
import type { FormData } from '@/types/form'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'

const STEPS = [
  { num: 1, pregunta: '¿Qué hace tu negocio?',      sub: 'Cuéntanos de qué va esto' },
  { num: 2, pregunta: '¿Cómo quieres que te vean?', sub: 'El estilo visual de tu marca' },
  { num: 3, pregunta: '¿Qué necesita tu web?',       sub: 'Páginas, funciones y tiempos' },
  { num: 4, pregunta: '¿Cómo te contactamos?',       sub: 'Últimos datos y ya está' },
]

const slide = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  exit:  (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0, transition: { duration: 0.18 } }),
}

const requiredByStep: Record<number, Array<keyof FormData>> = {
  1: ['nombreNegocio', 'industria', 'descripcion'],
  2: [],
  3: [],
  4: ['nombre', 'email'],
}

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [dir, setDir]   = useState(1)
  const [sending, setSending] = useState(false)
  const [error, setError]     = useState('')
  const router = useRouter()

  const {
    register, handleSubmit, trigger, setValue, watch,
    formState: { errors },
  } = useForm<FormData>({ defaultValues: { funcionalidades: [] } })

  const goNext = async () => {
    const fields = requiredByStep[step]
    const ok = fields.length === 0 || await trigger(fields)
    if (!ok) return
    setDir(1)
    setStep(s => Math.min(s + 1, 4))
  }

  const goBack = () => {
    setDir(-1)
    setStep(s => Math.max(s - 1, 1))
  }

  // FIX: nunca usamos type="submit" — llamamos handleSubmit manualmente
  const onClickSend = () => {
    handleSubmit(async (data) => {
      setSending(true)
      setError('')
      try {
        const res = await fetch('/api/formulario', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error()
        router.push('/gracias')
      } catch {
        setError('Hubo un error al enviar. Intenta de nuevo.')
        setSending(false)
      }
    })()
  }

  const current = STEPS[step - 1]

  return (
    <div className="relative z-10 bg-grid flex min-h-screen flex-col lg:flex-row">

      {/* ── Panel izquierdo ── */}
      <aside className="flex flex-col justify-between border-b border-white/5 px-8 py-10
                        lg:w-[38%] lg:border-b-0 lg:border-r lg:border-white/5 lg:px-14 lg:py-16 lg:sticky lg:top-0 lg:h-screen">
        <div>
          {/* Logo */}
          <p className="font-display text-sm font-semibold tracking-tight text-white mb-16 hidden lg:block">
            <span className="text-blue-400">JR</span> Web Studio
          </p>

          {/* Paso actual */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-[11px] font-semibold tracking-widest text-white/20 uppercase">
              Paso {step} / 4
            </span>
          </div>

          {/* Pregunta */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={step}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.2 } }}
              className="font-display text-3xl font-bold leading-snug text-slate-100 lg:text-4xl"
            >
              {current.pregunta}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`s-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.1, duration: 0.3 } }}
              exit={{ opacity: 0 }}
              className="mt-3 text-sm text-white/30 font-body"
            >
              {current.sub}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Stepper */}
        <div className="hidden lg:flex flex-col gap-3 mt-10">
          {STEPS.map((s) => (
            <button
              key={s.num}
              type="button"
              disabled={s.num > step}
              onClick={() => { if (s.num < step) { setDir(-1); setStep(s.num) } }}
              className="flex items-center gap-3 group disabled:cursor-default"
            >
              <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-all duration-200 ${
                s.num < step  ? 'bg-blue-500/20 text-blue-400' :
                s.num === step ? 'bg-blue-600 text-white ring-2 ring-blue-500/30' :
                                  'bg-white/5 text-white/20'
              }`}>
                {s.num < step ? <CheckCircle size={14} /> : s.num}
              </span>
              <span className={`text-xs font-medium transition-colors ${
                s.num === step ? 'text-white/80' : s.num < step ? 'text-blue-400/60' : 'text-white/15'
              }`}>
                {s.pregunta}
              </span>
            </button>
          ))}
        </div>
      </aside>

      {/* ── Panel derecho ── */}
      <main className="flex flex-1 flex-col px-8 py-10 lg:px-14 lg:py-16 lg:overflow-y-auto">

        {/* Barra de progreso móvil */}
        <div className="mb-8 lg:hidden">
          <div className="flex justify-between text-xs text-white/30 mb-2">
            <span>Paso {step} de 4</span>
            <span>{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="h-0.5 w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Contenido del paso */}
        <div className="flex-1">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.div
              key={step}
              custom={dir}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
            >
              {step === 1 && <Step1 register={register} errors={errors} setValue={setValue} watch={watch} />}
              {step === 2 && <Step2 register={register} errors={errors} setValue={setValue} watch={watch} />}
              {step === 3 && <Step3 register={register} errors={errors} setValue={setValue} watch={watch} />}
              {step === 4 && <Step4 register={register} errors={errors} />}
            </motion.div>
          </AnimatePresence>
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400 text-center font-body">{error}</p>
        )}

        {/* Navegación — TODOS los botones son type="button" */}
        <div className="mt-10 flex items-center justify-between pt-6 border-t border-white/5">
          <button
            type="button"
            onClick={goBack}
            disabled={step === 1}
            className="btn-back disabled:opacity-0 disabled:pointer-events-none"
          >
            <ArrowLeft size={15} />
            Atrás
          </button>

          {step < 4 ? (
            <button type="button" onClick={goNext} className="btn-next">
              Siguiente
              <ArrowRight size={15} />
            </button>
          ) : (
            <button
              type="button"
              onClick={onClickSend}
              disabled={sending}
              className="btn-next"
            >
              {sending
                ? <><Loader2 size={15} className="animate-spin" /> Enviando…</>
                : <><Send size={15} /> Enviar</>
              }
            </button>
          )}
        </div>

      </main>
    </div>
  )
}
