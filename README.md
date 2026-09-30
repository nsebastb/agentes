# Nattalia Café · pantallas móviles

| Archivo | Qué es |
|---|---|
| `registro.html` | 1A y 1B: formulario del QR y confirmación con el turno en vivo |
| `whatsapp.html` | 1C: WhatsApp simulado donde llegan los avisos |
| `demo.html` | Los dos celulares lado a lado para presentar |
| `config.js` | URL de n8n, token y tiempo de refresco |
| `ntt-data-logo.png` | Logo |

## Publicar en GitHub Pages

1. Sube la carpeta completa al repo (por ejemplo `kvillaco/ntt_dx_dashboards_agentes`, en una carpeta `nattalia/`).
2. En el repo: Settings › Pages › rama `main` › carpeta raíz.
3. Abre `https://kvillaco.github.io/ntt_dx_dashboards_agentes/nattalia/demo.html`.
4. El QR del evento apunta a `.../nattalia/registro.html`.

## Webhooks de n8n que usan

- `POST /webhook/nattalia/registro`: F1 Registro
- `GET /webhook/nattalia/movil?turno=` o `?whatsapp=`: F7 Estado móvil

Todos llevan el encabezado `x-nattalia-token`, cuyo valor está en `config.js`.

## Pasar a WhatsApp real

En la hoja `config` pon `wa_habilitado` en TRUE y activa los nodos de envío del flujo WA enviar. Los mismos avisos que hoy ves en `whatsapp.html` saldrán por WhatsApp. Para eso Meta tiene que haber aprobado las plantillas, porque la persona no escribe primero.
