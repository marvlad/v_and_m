// =====================================================================
// Pega este código en: Google Sheet > Extensiones > Apps Script
// Luego: Implementar > Administrar implementaciones > lápiz > Nueva versión > Implementar
// (así la URL no cambia)
// =====================================================================

const HOJA = 'Respuestas';

function doPost(e) {
  try {
    const datos = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    let hoja = ss.getSheetByName(HOJA);
    if (!hoja) {
      hoja = ss.insertSheet(HOJA);
      hoja.appendRow(['Fecha', 'Nombre', 'Asiste', 'Vegetariano']);
      hoja.setFrozenRows(1);
    }

    hoja.appendRow([
      new Date(),
      datos.nombre || '',
      datos.asiste || '',
      datos.vegetariano || ''
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
