const fs = require('fs');
const path = require('path');
const merge = require('mochawesome-merge');
const generator = require('mochawesome-report-generator');

// Ruta al directorio que contiene los resultados de las pruebas Cypress en formato JSON
const resultsDir = path.join('cypress', 'results');

// Generar un único archivo JSON combinado
merge({ files: [`${resultsDir}/*.json`] }).then((report) => {
  // Escribir el archivo combinado
  const reportFile = path.join('cypress', 'mochawesome-report', 'report.json');
  fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

  // Generar el informe HTML a partir del archivo combinado
  generator.create(report, {}).then(() => {
    console.log('Informe de Mochawesome generado con éxito.');
  }).catch((error) => {
    console.error('Error al generar el informe de Mochawesome:', error);
  });
}).catch((error) => {
  console.error('Error al combinar los resultados de las pruebas:', error);
});
