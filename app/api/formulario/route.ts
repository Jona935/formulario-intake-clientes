import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { buildEmailHtml } from '@/lib/email-template'

export async function POST(request: NextRequest) {
  const data = await request.json()

  if (!data.nombreNegocio || !data.emailContacto) {
    return NextResponse.json({ error: 'Datos incompletos' }, { status: 400 })
  }

  const contactEmail = process.env.CONTACT_EMAIL
  if (!contactEmail) {
    console.error('CONTACT_EMAIL no configurado')
    return NextResponse.json({ error: 'Configuración incompleta' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  try {
    await resend.emails.send({
      from: 'Formulario Web <onboarding@resend.dev>',
      to: contactEmail,
      reply_to: data.emailContacto,
      subject: `Nuevo proyecto: ${data.nombreNegocio} — ${data.industria || 'Sin industria'}`,
      html: buildEmailHtml(data),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error enviando email:', error)
    return NextResponse.json({ error: 'Error al enviar' }, { status: 500 })
  }
}
