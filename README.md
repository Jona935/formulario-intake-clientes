# Formulario Web — Intake de Clientes

Formulario multi-paso para capturar requerimientos de clientes de la web agency.

## Setup local

```bash
cd formulario-web
npm install
cp .env.example .env.local
# Llenar las variables en .env.local
npm run dev
# Abrir http://localhost:3000
```

## Variables de entorno

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | API key de [resend.com](https://resend.com) (gratis) |
| `CONTACT_EMAIL` | Tu email donde llegan los formularios |
| `NEXT_PUBLIC_URL` | URL del sitio en producción |

## Deploy en Vercel (gratis)

1. Crear repositorio en GitHub y subir este proyecto
2. Ir a [vercel.com](https://vercel.com) → New Project → importar el repo
3. En el dashboard de Vercel → Settings → Environment Variables → agregar las 3 variables
4. Vercel hace el deploy automáticamente

## Configurar Resend (email gratis)

1. Ir a [resend.com](https://resend.com) y crear cuenta gratis
2. API Keys → Create API Key
3. Pegar la key en `RESEND_API_KEY`
4. Con el plan gratuito puedes enviar desde `onboarding@resend.dev` a cualquier email

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Landing page con CTA |
| `/formulario` | Formulario multi-paso (8 pasos) |
| `/gracias` | Confirmación de envío |
