import type { FormData } from '@/types/form'

const estiloLabels: Record<string, string> = {
  elegante: 'Elegante y minimalista',
  vibrante: 'Vibrante y audaz',
  moderno:  'Moderno y tech',
  calido:   'Cálido y cercano',
  lujoso:   'Lujoso y premium',
  fresco:   'Fresco y orgánico',
}

const tipoLabels: Record<string, string> = {
  landing: 'Landing page',
  sitio:   'Sitio completo (varias páginas)',
  tienda:  'Tienda online',
  blog:    'Blog / Portal',
}

const plazoLabels: Record<string, string> = {
  urgente:  'Lo antes posible',
  normal:   '2-3 semanas',
  sinprisa: 'Sin fecha fija',
}

const row = (label: string, value: string | string[] | undefined) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return ''
  const v = Array.isArray(value) ? value.join(', ') : value
  return `
    <tr>
      <td style="padding:10px 0;color:#8a7a6a;font-size:12px;vertical-align:top;width:140px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;">${label}</td>
      <td style="padding:10px 0;color:#f5f0e8;font-size:14px;line-height:1.6;">${v}</td>
    </tr>`
}

export function buildEmailHtml(data: FormData): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:#0c0b09;margin:0;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
<div style="max-width:580px;margin:0 auto;">

  <div style="margin-bottom:32px;">
    <span style="background:#d4840a;color:#0c0b09;padding:4px 14px;border-radius:20px;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;">Nuevo proyecto</span>
  </div>

  <h1 style="color:#f5f0e8;font-size:32px;font-weight:800;margin:0 0 4px;">${data.nombreNegocio || 'Sin nombre'}</h1>
  <p style="color:#8a7a6a;font-size:14px;margin:0 0 32px;">${data.industria || ''}</p>

  <div style="background:#17150f;border-radius:16px;padding:28px;border:1px solid #2a2520;">
    <table style="width:100%;border-collapse:collapse;">
      ${row('Descripción', data.descripcion)}
      ${row('Estilo visual', estiloLabels[data.estiloVisual] || data.estiloVisual)}
      ${row('Referencias', data.referencias)}
      ${row('Colores de marca', data.coloresMarca)}
      ${row('Tipo de web', tipoLabels[data.tipoWeb] || data.tipoWeb)}
      ${row('Funcionalidades', data.funcionalidades)}
      ${row('Plazo', plazoLabels[data.plazo] || data.plazo)}
    </table>
  </div>

  <div style="background:#17150f;border-radius:16px;padding:28px;border:1px solid #2a2520;margin-top:16px;">
    <p style="color:#d4840a;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;margin:0 0 16px;">Contacto</p>
    <table style="width:100%;border-collapse:collapse;">
      ${row('Nombre', data.nombre)}
      ${row('Email', data.email)}
      ${row('WhatsApp', data.whatsapp)}
      ${row('Extras', data.extras)}
    </table>
  </div>

  <p style="text-align:center;color:#3a3530;font-size:11px;margin-top:24px;">Formulario recibido automáticamente</p>
</div>
</body>
</html>`
}
