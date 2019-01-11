# SportsStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Developer's notes
The application uses asynchronous HTTP requests to get model data provided by a RESTful web service.
As this is an educational project, I haven't set up a real server, with a db and endpoints, to fulfill HTTP requests sent by this client. Instead, I'm using two files to mock the behaviour expected by such facilities:
1. **data.js**: holds the data the application will work with (in place of a db)
2. **authMiddleware.js**: inspects HTTP requests sent to the RESTful web service and implements some basic security features, so that ordinary users can't modify the products or change the status of orders. 
