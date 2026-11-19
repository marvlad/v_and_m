// =====================================================================
// Pega este código en: Google Sheet > Extensiones > Apps Script
// Luego: Implementar > Nueva implementación > Tipo: Aplicación web
//        Ejecutar como: Yo   |   Quién tiene acceso: Cualquier usuario
// Copia la URL que te da y pégala en CONFIG.appsScriptUrl de index.html
// =====================================================================

const HOJA = 'Respuestas';

function doPost(e) {
  try {
    const datos = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let hoja = ss.getSheetByName(HOJA);
    if (!hoja) {
      hoja = ss.insertSheet(HOJA);
      hoja.appendRow(['Fecha', 'Nombre', 'Asiste']);
      hoja.setFrozenRows(1);
    }

    hoja.appendRow([
      new Date(),
      datos.nombre || '',
      datos.asiste || ''
    ]);

    return respuesta({ ok: true });
  } catch (err) {
    return respuesta({ ok: false, error: String(err) });
  }
}

function respuesta(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
