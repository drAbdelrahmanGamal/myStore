# MyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.5.

This project is a scalable front end framework for stores.

## Description

### Components

the project is made up with components that can be classified as follow:

- Products Menue components:
  - `productsList` component is the main menue which holding next companents on it.
  - `productItem` component is the product itself which can be used as a template to display every product in the list.
  - `productItemDetail` component which allows you to display a specific product and show its full detailes and any related data to that product.
- Cart components:
  - `cart` component itself which playing a key role in gathering the whole cart components through one route.
  - `cartForm` component containing all form elements for the order submission.
  - `confirmation` component which will be displayed when the order is confirmed.

### Flow

the project is made to:

1. start with a menu containing a list of all available products which displayed by image, name and price.
2. user is allowed to add the product to the cart with the desired amount.
3. when user click on `Add to cart` button the product will be added to the cart with the desired amount and a response alert will be shown.
4. also user can show full product details by clicking on the product image.
5. also, in the product details page, the user can specify the product amount and adding that amount to the cart.
6. User can return back to all products by clicking on the `back to all products` button.
7. all the entire experince with the products menu and product details pages the user can see a header containing the main routes we have which are (productsList and Cart).
8. when user decides to go to the cart and viewing his choices he can click on the `Cart` navigation button in the header and it will direct him to Carts and orders he has.
9. User can easily modify or delete any choosen product and provides user data to confirm the order.
10. finally a confirmation message will appear to let him know that teh order has been successfully confirmed.

### Available routes

- `/` the main route
- `/product/:productId` the product details page
- `/cart` the Cart display page

any unprovided routes will be redirected to the main route

## Installation and configuration

### Installing project dependancies

Run `npm install` to install all required dependancies

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Unit tests not working properly (it will be skipped for now) and will be implemented in the next version.

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
