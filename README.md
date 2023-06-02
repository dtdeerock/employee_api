# EmployeeApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

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


## let set up backend simple json server
 let's set up a simple JSON server as a mock backend to provide the API endpoints for creating and fetching employees.

Step 1: Install JSON Server
Open your terminal and run the following command to install JSON Server globally:

npm install -g json-server

Step 2: Create a mock JSON file
Create a new file called db.json in the root directory of your project and add the following content:

{
  "employees": []
}

Step 3: Start the JSON Server
In the terminal, navigate to the root directory of your project and run the following command to start the JSON Server:

json-server --watch db.json


Step 4: Update the API URL
In the src/app/employee.service.ts file, update the apiUrl variable to use the JSON Server URL:

private apiUrl = 'http://localhost:3000/employees';

With these changes, you should now have a working JSON API for employee details using Angular and JSON Server.

Please note that this setup is for mocking the backend and is not suitable for a production environment. In a real production scenario, you would need to set up a proper backend server with appropriate APIs to handle the employee data.



