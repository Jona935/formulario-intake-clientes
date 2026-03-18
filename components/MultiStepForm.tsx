'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send, Loader2 } from 'lucide-react'
import type { FormData } from '@/types/form'
import { Step1 } from './steps/Step1'
import { Step2 } from './steps/Step2'
import { Step3 } from './steps/Step3'
import { Step4 } from './steps/Step4'

const STEPS = [
  { num: 1, pregunta: '¿Qué hace\ntu negocio?',    sub: 'Cuéntanos de qué va esto' },
  { num: 2, pregunta: '¿Cómo quieres\nque te vean?', sub: 'El estilo visual de tu marca' },
  { num: 3, pregunta: '¿Qué necesita\ntu web?',    sub: 'Páginas, funciones y tiempos' },
  { num: 4, pregunta: '¿Cómo te\ncontactamos?',    sub: 'Últimos datos y ya está' },
]

const slide = {
  enter: (dir: number) => ({ x: dir > 0 ? 48 : -48, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit:  (dir: number) => ({ x: dir > 0 ? -48 : 48, opacity: 0, transition: { duration: 0.2 } }),
}

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [dir,  setDir]  = useState(1)
  const [sending, setSending] = useState(false)
  const [error, setError]     = useState('')
  const router = useRouter()

  const { register, handleSubmit, trigger, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: { funcionalidades: [] },
  })

  const requiredByStep: Record<number, Array<keyof FormData>> = {
    1: ['nombreNegocio', 'industria', 'descripcion'],
    2: [],
    3: [],
    4: ['nombre', 'email'],
  }

  const next = async () => {
    const fields = requiredByStep[step]
    const ok = fields.length === 0 || await trigger(fields)
    if (!ok) return
    setDir(1)
    setStep(s => Math.min(s + 1, 4))
  }

  const back = () => { setDir(-1); setStep(s => Math.max(s - 1, 1)) }

  const onSubmit = async (data: FormData) => {
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
  }

  const current = STEPS[step - 1]

  return (
    <div className="relative z-10 flex min-h-screen w-full flex-col lg:flex-row">

      {/* Panel izquierdo — contexto del paso */}
      <div className="flex flex-col justify-between border-b border-white/5 px-8 py-10 lg:w-2/5 lg:border-b-0 lg:border-r lg:px-14 lg:py-16">
        <div>
          {/* Logotipo */}
          <p className="font-display italic text-lg text-amber-500/80 mb-16 hidden lg:block">
            Web Studio
          </p>

          {/* Número de paso */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium tracking-widest text-white/20 uppercase">
              Paso {step} de 4
            </span>
            <span className="h-px flex-1 bg-white/5" />
          </div>

          {/* Pregunta del paso */}
          <AnimatePresence mode="wait">
            <motion.h2
              key={step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
              className="font-display text-4xl leading-[1.15] text-[#f5f0e8] whitespace-pre-line lg:text-5xl"
            >
              {current.pregunta}
            </motion.h2>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${step}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.15 } }}
              exit={{ opacity: 0 }}
              className="mt-4 text-sm text-white/35"
            >
              {current.sub}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Indicadores de paso */}
        <div className="hidden lg:flex items-center gap-2 mt-12">
          {STEPS.map((s) => (
            <button
              key={s.num}
              type="button"
              onClick={() => { if (s.num < step) { setDir(-1); setStep(s.num) } }}
              className="group flex items-center gap-2"
            >
              <span className={`h-1 rounded-full transition-all duration-300 ${
                s.num === step  ? 'w-8 bg-amber-500' :
                s.num < step   ? 'w-4 bg-amber-500/40' :
                                  'w-4 bg-white/10'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* Panel derecho — el formulario */}
      <div className="flex flex-1 flex-col px-8 py-10 lg:overflow-y-auto lg:px-14 lg:py-16">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 flex-col">

          <div className="flex-1 overflow-hidden">
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
            <p className="mt-4 text-sm text-red-400 text-center">{error}</p>
          )}

          {/* Navegación */}
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={back}
              disabled={step === 1}
              className="btn-back disabled:opacity-0 disabled:pointer-events-none"
            >
              <ArrowLeft size={15} />
              Atrás
            </button>

            {step < 4 ? (
              <button type="button" onClick={next} className="btn-next">
                Siguiente
                <ArrowRight size={15} />
              </button>
            ) : (
              <button type="submit" disabled={sending} className="btn-next">
                {sending ? (
                  <><Loader2 size={15} className="animate-spin" /> Enviando…</>
                ) : (
                  <><Send size={15} /> Enviar</>
                )}
              </button>
            )}
          </div>

        </form>
      </div>
    </div>
  )
}
