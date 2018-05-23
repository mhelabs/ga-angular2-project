# Vending Machine Interview Take-Home

## Prerequisites

- npm 3.10.10 
- node 6.11.0

## Introduction

In this exercise you will build the brains of a vending machine.  It will accept money, maintain
inventory, and dispense products.  All the things that you might expect a vending machine to accomplish.

The point of this kata is to provide a larger than trivial exercise that will show your understanding of Typescript and Angular.  A significant portion of the effort will be in determining how to create your components and interact with the provided Angular services for managing communication across components and external API calls.

## Interview Instructions

Please fork the original repo https://github.com/mhelabs/mhe-angular-vending-machine and submit your work as PR to mhelabs/mhe-angular-vending-machine. In the PR comments please include any questions/feedback you have going along with your work. Thank you!

## Setup

Install dependencies:
```
npm install
```

Start the app:
```
npm start
```
NOTE: Data for the API server is found in `db.json` in the root project folder.


Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Features

We have split the work of creating our vending machine into three user stories.

### STORY-1: Insert Coin

_As a vendor_  
_I want a vending machine that accepts coins_  
_So that I can collect money from the customer_ 

- The vending machine will accept valid coins (nickels, dimes, and quarters). Coins represented by three buttons.
- When a valid coin is inserted (button pressed) the amount of the coin will be added to the current balance and the machine's display will be updated.
- When there are no coins inserted, the machine displays INSERT COIN.

DEV NOTE: insert-coin.component and balance.service have been created for you -- please wire up the component correctly

### STORY-2: Select Item

_As a vendor_  
_I want customers to select items_  
_So that I can give them an incentive to put money in the machine_

- The machine shows a list of items with their price and remaining inventory. List represented as radio button group.
- List of items is populated from item.service, which uses the external API to return an array of item objects.

DEV NOTE: item.service has been created for you -- please create the component and wire up correctly

### STORY-3: Dispense Item

_As a customer_  
_I want to be told whether my item has been dispensed_  
_So that I can know whether my transaction has completed_  

- A button labeled 'Dispense' when pressed dispenses the selected item if there is enough current balance and the selected item has remaining stock.
- The machine responds with "Insufficient Balance" or "No Inventory Remaining," respectively if there is an error, and cancels dispensing of item.
- The machine responds with success message (developer's choice :) ) when item is successfully dispensed.
- The machine deducts item cost after successfully dispensing item.

Please make liberal use of this [cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html).

## References

-   [Angular 2 Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
-   [Angular-cli github page](https://github.com/angular/angular-cli)
-   [Official Angular Documentation](https://github.com/angular/angular-cli)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3.

[![MHE Logo](http://ecommerce-prod.mheducation.com.s3.amazonaws.com/unitas/corporate/news/press-kit/mhe-logo-red-rgb-150ppi.png)](http://www.mheducation.com/)
