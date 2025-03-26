# My Next.js E-commerce Application Documentation

This project is a modern e-commerce web application built with Next.js, leveraging Tailwind CSS for styling, and Redux Toolkit Query for efficient state management. It aims to provide a scalable and maintainable codebase with a focus on performance and developer experience.

## Technologies Used:

-   **Next.js:** React framework for server-side rendering, static site generation, and routing.
-   **React:** JavaScript library for building user interfaces.
-   **TypeScript:** Statically typed superset of JavaScript for improved code quality.
-   **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
-   **Redux Toolkit (RTK):** Simplifies Redux state management.
-   **Redux Toolkit Query (RTK Query):** Data fetching and caching tool for Redux.
-   **React Icons:** Library for easily using icons in React projects.

## Packages Installed and Their Purposes:

-   **Next.js:** Core framework for building the application.
-   **React and ReactDOM:** Libraries for building the UI.
-   **TypeScript:** Type checking and enhanced development experience.
-   **Tailwind CSS, postcss, autoprefixer:** Styling and CSS processing.
-   **@reduxjs/toolkit:** Simplifies Redux state management.
-   **react-redux:** Integrates React with Redux.
-   **react-icons:** For using icons in the application.

## Environment Variables

To run this project, you may need to set the following environment variables. Create a `.env.local` file in the root directory and add your variables:

-   `NEXT_PUBLIC_API_BASE_URL=your_api_base_url`: The base URL for the API the frontend communicates with.
-   `NEXT_PUBLIC_IMAGE_BASE_URL=your_image_base_url`: The base URL for image resources.
-   `Any other env variables that the project needs`: (Add any other relevant environment variables here)

## Setup:

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

4.  **Create `.env.local`:**

    Copy `.env.example` to `.env.local` and set the required environment variables.

    ```bash
    cp .env.example .env.local
    ```

5.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```

6.  **Open your browser:**

    Visit [http://localhost:3000](http://localhost:3000) to view the application.

## Folder Structure:

### Overview of the Main Directories and Their Purposes:

-   **`/app`:** Contains Next.js pages, which map to different routes.
-   **`/components`:** Holds reusable UI components.
-   **`/features`:** Redux Toolkit Query slices and related logic for data fetching and state management.
-   **`/hooks`:** Custom React hooks for reusable logic (if any).
-   **`/public`:** Static assets like images and fonts.
-   **`/styles`:** Global styles and custom CSS (if any).
-   **`/utils`:** Utility functions and helper modules.
-   **`/types`:** TypeScript type definitions.
-   **`/redux`:** Redux store setup and configuration.
-   **`/views`:** Contains views for each page, where each view is a group of components.

## Routing:

Next.js uses file-based routing. Files in the `/app` directory become routes. For example, `app/page.tsx` is the root route (`/`), and `app/products/page.tsx` is the `/products` route.

## Key Components:

### Brief Description of Important Components:

-   **`Button`:** Reusable button component.
-   **`HeroSection`:** Main section of the home page.
-   **`Breadcrumbs`:** Navigation breadcrumbs.
-   **`Card`:** Product card component.
-   **`EmptyCart`:** Component for displaying an empty cart message.
-   **`Footer`:** Application footer.
-   **`Navbar`:** Navigation bar.
-   **`GridButton`:** Button in a grid layout.
-   **`DataTable`:** Component for displaying tabular data.
-   **`Loader`:** Loading indicator component.
-   **`Pagination`:** Pagination component.
-   **`Success`:** Success message/component.
-   **`StarRating`:** Component for displaying star ratings.
-   **`Badge`:** Generic badge component.
-   **`SaleBadge`:** Badge indicating a sale.

## Views:

-   **`productsView`:** View for the home page displaying products.
-   **`ProductDetails`:** View for displaying product details.
-   **`CartDetails`:** View for displaying cart details.

## Redux:

-   **`store`:** Redux store configuration.
-   **`provider`:** Redux provider for wrapping the application.
-   **`slices`:** Redux slices for managing application state.

## Types:

-   TypeScript interfaces for defining data structures.

## Helpers:

-   **`TotalQuantity`:** Function to calculate the total quantity of products in the cart.
-   **`TotalPrice`:** Function to calculate the total price of products in the cart.

## How the Frontend Interacts with the Backend API:

The frontend uses Redux Toolkit Query to interact with the backend API. RTK Query simplifies data fetching, caching, and state management. API endpoints are defined in slices within the `/features` directory.

## Explanation of the Styling Approach:

-   **Tailwind CSS:** Used for utility-based styling and rapid UI development.

## List of Contributors:

- [Donya-Ahmed](https://github.com/Donya-Ahmed) - Donya Ahmed
