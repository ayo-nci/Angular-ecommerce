# HelloWorld

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

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

## Custom Help
- Generate new application with `ng new [app name]`
- Use cli to create components as it registers it and generates files

### Services
- Services are used to seperate component logic from component class(which deals with component presentation). Allows for unit testing too since we can mock http endpoints. 
#### How to use
- Create [component name].service.ts file for your component
- Add logic to get data from some service or add mock data
- Add dependency injection in app.module.ts > provider
- Use in constructor like ` constructor (service: CoursesService) {
        this.courses = service.getCourses();
    }`
- Use `ng g s [service name]` to use cli to generate service 
