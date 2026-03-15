import type { FormData } from '@/types/form'

export function buildEmailHtml(data: FormData): string {
  const section = (title: string, content: string) => `
    <div style="margin-bottom:32px;">
      <h2 style="color:#6366f1;font-size:14px;font-weight:700;text-transform:uppercase;
                 letter-spacing:0.1em;margin:0 0 12px;border-bottom:1px solid #2a2a38;
                 padding-bottom:8px;">${title}</h2>
      ${content}
    </div>`

  const field = (label: string, value: string | string[]) => {
    const val = Array.isArray(value) ? value.join(', ') : value
    if (!val || val.trim() === '') return ''
    return `
      <div style="margin-bottom:10px;">
        <span style="color:#9ca3af;font-size:12px;font-weight:600;text-transform:uppercase;
                     letter-spacing:0.05em;">${label}</span>
        <p style="color:#f3f4f6;font-size:14px;margin:4px 0 0;line-height:1.6;">${val}</p>
      </div>`
  }

  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="background:#0f0f13;color:#f3f4f6;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
             margin:0;padding:40px 20px;">
  <div style="max-width:640px;margin:0 auto;">

    <div style="text-align:center;margin-bottom:40px;">
      <div style="display:inline-block;background:#6366f1;color:#fff;padding:8px 20px;
                  border-radius:20px;font-size:12px;font-weight:700;letter-spacing:0.1em;
                  text-transform:uppercase;margin-bottom:16px;">Nuevo proyecto</div>
      <h1 style="color:#f3f4f6;font-size:28px;font-weight:800;margin:0;">
        ${data.nombreNegocio || 'Sin nombre'}
      </h1>
      <p style="color:#9ca3af;font-size:14px;margin:8px 0 0;">${data.industria || ''}</p>
    </div>

    <div style="background:#17171f;border-radius:12px;padding:32px;border:1px solid #2a2a38;">

      ${section('Contacto', `
        ${field('Nombre', data.nombreContacto)}
        ${field('Email', data.emailContacto)}
        ${field('Teléfono', data.telefonoContacto)}
      `)}

      ${section('El negocio', `
        ${field('Descripción', data.descripcionUnaLinea)}
        ${field('Propuesta de valor', data.propuestaValor)}
      `)}

      ${section('Audiencia', `
        ${field('Cliente ideal', data.clienteIdeal)}
        ${field('Problemas que resuelve', data.problemasQueResuelves)}
        ${field('¿Cómo llegan los clientes?', data.comoLleganClientes)}
      `)}

      ${section('Referencias y competencia', `
        ${field('Competidores', data.competidores)}
        ${field('Diferencial vs competencia', data.diferencialVsCompetencia)}
        ${field('Referencias visuales', data.referenciasVisuales)}
      `)}

      ${section('Identidad visual', `
        ${field('Logo', data.tieneLogo === 'si' ? 'Sí, tiene logo' : data.tieneLogo === 'mejorar' ? 'Tiene pero necesita mejora' : 'No tiene logo')}
        ${field('Colores de marca', data.coloresMarca)}
        ${field('Estilo visual', data.estiloVisual)}
        ${field('Tipografía', data.preferenciaTipografia)}
      `)}

      ${section('Contenido', `
        ${field('Textos', data.tieneTextos === 'si' ? 'Tiene todo el contenido' : data.tieneTextos === 'algunos' ? 'Tiene algunos, necesita ayuda' : 'No tiene, necesita redacción')}
        ${field('Fotografías', data.tieneFotos)}
        ${field('Video', data.necesitaVideo)}
      `)}

      ${section('Funcionalidades', `
        ${field('Páginas requeridas', data.paginasRequeridas)}
        ${field('Funcionalidades', data.funcionalidades)}
        ${field('Tono de comunicación', data.tonoComunicacion)}
        ${field('Objetivo principal', data.objetivoPrincipal)}
        ${field('Mensaje destacado', data.mensajeDestacado)}
      `)}

      ${section('Alcance', `
        ${field('Idioma', data.idioma)}
        ${field('Cantidad de páginas', data.cantidadPaginas)}
        ${field('Plazo', data.plazo === 'fecha' ? data.fechaEspecifica : data.plazo)}
        ${field('Dominio y hosting', data.tieneDominioHosting)}
        ${field('Info adicional', data.informacionAdicional)}
      `)}

    </div>

    <p style="text-align:center;color:#4b5563;font-size:12px;margin-top:24px;">
      Formulario recibido automáticamente
    </p>
  </div>
</body>
</html>`
}
