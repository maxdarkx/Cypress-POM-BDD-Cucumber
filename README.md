## Testing de API mediante el framework Cypress 
Este repositorio pretende ser una guía básica y rápida de trabajo usando Cypress para probar una aplicación E2E.

## Instalación
1. Debe instalar npm para trabajar de forma optima con este repositorio. Puede instalarlo desde el siguiente link: 
    - Guía de instalación: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
    - Descarga de npm (Se recomienda instalar la version LTS mas reciente): https://nodejs.org/en/download

2. Debe instalar git en su equipo para posteriormente descargar el repositorio usando el comando git clone https://github.com/maxdarkx/Cypress-POM-BDD-Cucumber-Api-Testing.git`, o descárguelo como un archivo comprimido:

![archivo comprimido](images/zip%20file.png)

3. Una vez instalado npm, utilice el siguiente comando para instalar las dependencias (instalara las dependencias mostradas en el archivo "package.json"):
    - `npm install`

4. Tambien puede instalar las dependencias por separado. Para ello utilice los siguientes comandos
    - `npm install cypress --save-dev`
    - `npm install @badeball/cypress-cucumber-preprocessor`
    - `npm install -D @bahmutov/cypress-esbuild-preprocessor`

5. La configuración del cypress es bastante delicada y critica a la hora de ejecutar las pruebas con Cypress. Verifique que el archivo `cypress.config.js` contenga la siguiente función requerida para el uso del preprocesador para Cucumber:
```
  async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
```

6. Utilice el comando `npx cypress open` para abrir Cypress, y ejecute las feature que necesite haciendo clic sobre ellas.
- Se ejecutara la aplicación Cypress, seleccione la opción `E2E Testing`.

![Paso 1](images/cypress%20step1.png)

- Seleccione el navegador de su preferencia (Por ejemplo, google chrome).

![Paso 2](images/cypressStep2.png)

- Haga clic en el botón `Start E2E...`

![Paso 3](images/cypressStep3.png)

- Se ejecutara la ventana de pruebas de Cypress en el navegador seleccionado. Seleccione la Feature que desea probar

![Paso 4](images/cypressStep4.png)

- Se ejecuta tanto la `Feature` seleccionada, como el `StepDefinitions` de dicha feature. Si hace clic sobre los escenarios, se muestran todos los pasos ejecutados por Cypress para la prueba.

![Paso 5](images/cypressStep5.png)

7. También puede ejecutar cypress desde la terminal ubicándose en la carpeta de instalación del proyecto, y usando el comando `npx cypress run`. De este modo se generaran las evidencias (en video y screenshots) para después ser consumidas por un servicio CI-CD o manualmente, en las carpetas `cypress/video` y `cypress/screenshots`. Consulte la documentación de Cypress para hacer un mejor uso de la consola en https://docs.cypress.io/guides/guides/command-line.