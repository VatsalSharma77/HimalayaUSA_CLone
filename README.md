# HimalayaUSA E-commerce Clone

A clone of the HimalayaUSA e-commerce website, featuring health and wellness products like toothpaste, gummies, ashwagandha, etc.

## Introduction

This project is a Chakra UI-based clone of the HimalayaUSA e-commerce website. It provides users with a familiar shopping experience for health and wellness products. The project utilizes authentication, browser routes, and a cart provider for a seamless user journey.

## Technologies Used

- Chakra UI
- Authentication
- React Router (browser routes)
- CartProvider
- JSON Server (for simulating a backend with db.json)
- React components (Navbar, Footer, PrivateRoute, Product Details, Product Card)
- Pages (About, Home, Error, Account, Cart, Login, Products, Register, SingleProduct)

## Project Structure

- `src/`
  - `assets/` (contains images)
  - `components/` (contains reusable React components)
  - `pages/` (contains React components representing pages)

## Features

- User authentication with registration, login, and logout functionalities.
- Protected routes using PrivateRoute to control access to certain pages.
- Browse and select health and wellness products with add to cart functionality.
- Manage shopping cart, including emptying the cart and adjusting product quantities.

## Getting Started

Follow these steps to set up the project on your local machine.

### Installation

1. Clone the repository: `git clone https://github.com/yourusername/himalayausa-clone.git`
2. Navigate to the project directory: `cd himalayausa-clone`
3. Install dependencies: `npm install`
4. Start the JSON Server: `npm run json-server`
5. Start the application: `npm start`

## Usage

Once the project is set up, visit `http://localhost:3000` in your web browser to explore the HimalayaUSA clone and start shopping.

## Functionalities

- **Registration and Login:** Users must register and log in to access shopping and cart pages.
- **Product Selection:** Browse and select health and wellness products.
- **Add to Cart:** Add selected products to the shopping cart.
- **Cart Management:** View and manage items in the shopping cart, including emptying the cart and adjusting quantities.

## Acknowledgments

- The HimalayaUSA team for inspiration.
- Chakra UI, React, and other technologies used in the development of this project.


