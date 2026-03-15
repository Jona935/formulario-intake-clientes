'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Send, Loader2 } from 'lucide-react'
import type { FormData } from '@/types/form'
import { FormProgress } from './FormProgress'
import { Step1Negocio } from './steps/Step1Negocio'
import { Step2Audiencia } from './steps/Step2Audiencia'
import { Step3Referencias } from './steps/Step3Referencias'
import { Step4Visual } from './steps/Step4Visual'
import { Step5Contenido } from './steps/Step5Contenido'
import { Step6Funcionalidades } from './steps/Step6Funcionalidades'
import { Step7Alcance } from './steps/Step7Alcance'
import { Step8Contacto } from './steps/Step8Contacto'

const STEP_LABELS = [
  'Tu negocio',
  'Tu audiencia',
  'Referencias visuales',
  'Identidad visual',
  'Contenido',
  'Funcionalidades',
  'Alcance y plazos',
  'Datos de contacto',
]

const TOTAL_STEPS = STEP_LABELS.length

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -40 : 40,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
}

export function MultiStepForm() {
  const [step, setStep] = useState(1)
  const [direction, setDirection] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const router = useRouter()

  const { register, handleSubmit, trigger, watch, formState: { errors } } = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {
      estiloVisual: [],
      paginasRequeridas: [],
      funcionalidades: [],
    },
  })

  const fieldsPerStep: Array<Array<keyof FormData>> = [
    ['nombreNegocio', 'descripcionUnaLinea', 'industria'],
    ['clienteIdeal'],
    ['referenciasVisuales'],
    [],
    [],
    ['paginasRequeridas'],
    [],
    ['nombreContacto', 'emailContacto'],
  ]

  const goNext = async () => {
    const fields = fieldsPerStep[step - 1]
    const valid = fields.length === 0 || await trigger(fields)
    if (!valid) return
    setDirection(1)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const goPrev = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1))
  }

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/formulario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
      router.push('/gracias')
    } catch {
      setSubmitError('Hubo un error al enviar. Por favor intenta de nuevo.')
      setIsSubmitting(false)
    }
  }

  const stepProps = { register, errors, watch }

  const steps: Record<number, React.ReactNode> = {
    1: <Step1Negocio register={register} errors={errors} />,
    2: <Step2Audiencia register={register} errors={errors} />,
    3: <Step3Referencias register={register} errors={errors} />,
    4: <Step4Visual register={register} errors={errors} />,
    5: <Step5Contenido register={register} errors={errors} />,
    6: <Step6Funcionalidades register={register} errors={errors} />,
    7: <Step7Alcance register={register} errors={errors} watch={watch} />,
    8: <Step8Contacto register={register} errors={errors} />,
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormProgress currentStep={step} totalSteps={TOTAL_STEPS} labels={STEP_LABELS} />

      <div className="relative overflow-hidden min-h-[420px]">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            {steps[step]}
          </motion.div>
        </AnimatePresence>
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-400 text-center">{submitError}</p>
      )}

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-surface-border">
        <button
          type="button"
          onClick={goPrev}
          disabled={step === 1}
          className="btn-secondary disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft size={16} />
          Anterior
        </button>

        {step < TOTAL_STEPS ? (
          <button type="button" onClick={goNext} className="btn-primary">
            Siguiente
            <ArrowRight size={16} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
          >
            {isSubmitting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                Enviar formulario
                <Send size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  )
}
