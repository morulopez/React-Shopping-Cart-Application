# React Shopping Cart Application

# Description

This is a React-based shopping cart application that allows users to view products, add them to their cart, and filter through them.

## Key Features

- Product Display: The application fetches product data and presents it in a user-friendly format. Each product card provides essential details about the product.
- Shopping Cart: Users can add products to their shopping cart. The cart maintains its state even as users navigate through the product listings.
- Product Filtering: A filtering system allows users to narrow down the product list based on specific criteria.
- Custom Hooks: Each functionality is separated and managed by its own custom hook, which helps to keep the codebase clean and efficient.

## Technology Stack

- React: The core technology behind this project, used to create an interactive UI.
- Context API: Used to manage global application state such as cart items and filters.
- useReducer: Used to handle complex state logic involving multiple sub-values.
- Custom Hooks: Separated functionalities into distinct custom hooks for better management and readability of code.

## How To Use

- Clone the repository: git clone https://github.com/morulopez/React-Shopping-Cart-Application.git.
- Install dependencies: npm install.
- Run the application: npm run dev.
Once you run the application, you will be presented with a list of products. You can add products to the cart or use the filters to narrow down the product list.