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

const field = (label: string, value: string | string[] | undefined) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return ''
  const v = Array.isArray(value) ? value.join(' · ') : value
  return `
    <tr>
      <td style="padding:10px 16px;border-bottom:1px solid #1a1a2a;">
        <span style="display:block;font-size:10px;font-weight:700;letter-spacing:0.08em;
                     text-transform:uppercase;color:#3b82f6;margin-bottom:3px;">${label}</span>
        <span style="font-size:13px;color:#c8cfe0;line-height:1.5;">${v}</span>
      </td>
    </tr>`
}

export function buildEmailHtml(data: FormData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:0;background:#080810;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#080810;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:28px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:15px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;">
                      <span style="color:#3b82f6;">JR</span> Web Studio
                    </span>
                  </td>
                  <td align="right">
                    <span style="display:inline-block;background:#3b82f6;color:#fff;
                                 font-size:10px;font-weight:700;letter-spacing:0.08em;
                                 text-transform:uppercase;padding:4px 12px;border-radius:20px;">
                      Nuevo proyecto
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Nombre + industria -->
          <tr>
            <td style="background:#0f0f1a;border:1px solid #1e1e30;border-radius:12px;
                       padding:24px 0 8px;margin-bottom:12px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:0 16px 16px;">
                    <h1 style="margin:0 0 4px;font-size:24px;font-weight:800;
                               color:#f0f4ff;letter-spacing:-0.03em;">
                      ${data.nombreNegocio || 'Sin nombre'}
                    </h1>
                    <span style="font-size:12px;color:#3b82f6;font-weight:600;
                                 text-transform:uppercase;letter-spacing:0.06em;">
                      ${data.industria || ''}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr><td style="height:10px;"></td></tr>

          <!-- Sección: El negocio -->
          <tr>
            <td style="background:#0f0f1a;border:1px solid #1e1e30;border-radius:12px;overflow:hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #1a1a2a;background:#111122;">
                    <span style="font-size:10px;font-weight:700;letter-spacing:0.1em;
                                 text-transform:uppercase;color:#4f6ef7;">El negocio</span>
                  </td>
                </tr>
                ${field('Descripción', data.descripcion)}
                ${field('Estilo visual', estiloLabels[data.estiloVisual] || data.estiloVisual)}
                ${field('Referencias visuales', data.referencias)}
                ${field('Colores de marca', data.coloresMarca)}
              </table>
            </td>
          </tr>

          <tr><td style="height:10px;"></td></tr>

          <!-- Sección: La web -->
          <tr>
            <td style="background:#0f0f1a;border:1px solid #1e1e30;border-radius:12px;overflow:hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #1a1a2a;background:#111122;">
                    <span style="font-size:10px;font-weight:700;letter-spacing:0.1em;
                                 text-transform:uppercase;color:#4f6ef7;">La web</span>
                  </td>
                </tr>
                ${field('Tipo', tipoLabels[data.tipoWeb] || data.tipoWeb)}
                ${field('Funcionalidades', data.funcionalidades)}
                ${field('Plazo', plazoLabels[data.plazo] || data.plazo)}
              </table>
            </td>
          </tr>

          <tr><td style="height:10px;"></td></tr>

          <!-- Sección: Contacto -->
          <tr>
            <td style="background:#0f0f1a;border:1px solid #1e1e30;border-radius:12px;overflow:hidden;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:14px 16px;border-bottom:1px solid #1a1a2a;background:#111122;">
                    <span style="font-size:10px;font-weight:700;letter-spacing:0.1em;
                                 text-transform:uppercase;color:#4f6ef7;">Contacto</span>
                  </td>
                </tr>
                ${field('Nombre', data.nombre)}
                ${field('Email', data.email)}
                ${field('WhatsApp', data.whatsapp)}
                ${field('Notas adicionales', data.extras)}
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:28px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#2a2a40;">
                Formulario recibido automáticamente · JR Web Studio
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}
