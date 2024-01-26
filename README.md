# MyAngularProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Steps to run the Project

Once Cloned the repository, do 
`npm install`

Install Mockoon Mock server tool and import the environment json from Mockoon folder to mock api. 
**Download**: https://mockoon.com/download/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## About Other Packages and Tools used.
Used Mockoon for mock server, git has the mockon environment configuration which can be imported and started in the mockoon desktop app.

Used Bootstrap CSS for basic grids and utilities.


## Solution
Used Angular Standalone Components as Angular is recommending the standalone as future.
https://www.angulararchitects.io/en/blog/angulars-future-without-ngmodules-lightweight-solutions-on-top-of-standalone-components/#:~:text=Standalone%20Components%20make%20the%20future,we%20just%20use%20EcmaScript%20modules.

Used Angular Reactive Forms for scalability

## Scenarious
The application is responsive

User can navigate between home and signup link on header

User can enter the form fields like firstname, lastname, email, marketing and terms. Except marketing all are mandatory.

Any fields which was not entered will throw an error along with red highlights around text field.

On register the form will show the succesfull registration after posting the data to mock server.

On click of the register the complete form will be shown back.
