# PtRecisa

STM - RECISA es una Prueba Técnica de Angular, PHP y MariaDB hecha por Carlos Gutierrez © 2022.06.04.

# Instrucciones de Instalacion
- Clonar repositorio en el DocumentRoot del localhost.
- Ejecutar 'npm install' desde la consola de comandos para instalar todas las depencias del proyecto. 
- Importar desde phpMyAdmin el script '/api/pt-recisa-db.sql', este crea la base de datos y carga un dataset de prueba.
- Editar las credenciales de acceso a la DB si es necesario en '/api/index.php'
- Comprobar funcionamiento de la API desde http://localhost/pt-recisa/api/?query-asesor
- Ejecutar 'npm serve' y acceder a http://localhost:4200 para visualizar el proyecto.

# Requerimientos FrontEnd
- node v16.15.1
- npm 8.11.0
- Angular CLI version 14.0.0
 # Requerimientos Backend
- Apache/2.4.53
- mariadb Ver 15.1 Distrib 10.7.3-MariaDB
- PHP Version 7.4.29

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
