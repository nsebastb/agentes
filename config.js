// Configuración compartida de las pantallas de Nattalia Café.
// Cambia aquí la URL de n8n, el token o el intervalo de refresco sin tocar las páginas.
window.NATTALIA = {
  // Base de los webhooks de producción de n8n (sin barra final)
  base: 'https://kvillaco.app.n8n.cloud/webhook/nattalia',

  // Mismo valor que la credencial "El secreto de Nattalia" (encabezado x-nattalia-token)
  token: 'ntt-nattalia-6UsNNptMvfHoPidQF-Oqds9QsobYG1_y',

  // Refresco en milisegundos. Cada consulta es una ejecución de n8n: no bajar de 6000.
  refrescoMs: 8000,

  // Códigos de país del selector
  paises: [
    { codigo: '51', etiqueta: 'PE +51' },
    { codigo: '57', etiqueta: 'CO +57' },
    { codigo: '52', etiqueta: 'MX +52' },
    { codigo: '56', etiqueta: 'CL +56' },
    { codigo: '54', etiqueta: 'AR +54' },
    { codigo: '593', etiqueta: 'EC +593' },
    { codigo: '34', etiqueta: 'ES +34' },
    { codigo: '1', etiqueta: 'US +1' }
  ]
};

// Helper común para llamar a n8n con el token
window.nattaliaApi = async function (ruta, opciones) {
  const cfg = window.NATTALIA;
  const o = opciones || {};
  const url = cfg.base + ruta + (o.query ? '?' + new URLSearchParams(o.query).toString() : '');
  const init = { method: o.method || 'GET', headers: { 'x-nattalia-token': cfg.token } };
  if (o.body) { init.headers['Content-Type'] = 'application/json'; init.body = JSON.stringify(o.body); }
  const res = await fetch(url, init);
  let data = null;
  try { data = await res.json(); } catch (e) { data = null; }
  if (!res.ok && !(data && data.motivo)) throw new Error('HTTP ' + res.status);
  return data || {};
};
