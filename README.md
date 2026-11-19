# Invitación de boda · Marvin ∞ Valeri

Página de invitación con cuenta atrás, detalles, tarjeta y confirmación de asistencia.
Las respuestas se guardan en una hoja de Google Sheets (en Drive) mediante Google Apps Script.

## Archivos

- `index.html`: la invitación completa (una sola página).
- `Code.gs`: script que se pega en Apps Script de la hoja de respuestas.

## Configurar el registro de respuestas

1. Crea una hoja de Google Sheets en tu Drive.
2. Ve a **Extensiones → Apps Script**, pega el contenido de `Code.gs` y guarda.
3. **Implementar → Nueva implementación → Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier usuario**
4. Copia la URL (termina en `/exec`) y pégala en `appsScriptUrl` dentro de `index.html`.

## Publicar

Este repositorio se publica con GitHub Pages desde la rama principal.
