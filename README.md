
Built by https://www.blackbox.ai

---

# Next.js Project

## Project Overview
This is a Next.js project designed for building web applications with a focus on performance and accessibility. Utilizing the latest features of Next.js and leveraging components from Radix UI, this project provides a robust and flexible foundation for creating modern web interfaces.

## Installation
To set up the project locally, follow these steps:

1. **Clone the repository**
    ```bash
    git clone <repository-url>
    cd nextjs
    ```

2. **Install the dependencies**
    ```bash
    npm install
    ```

3. **Run the development server**
    ```bash
    npm run dev
    ```

## Usage
Once the development server is running, navigate to [http://localhost:3000](http://localhost:3000) in your web browser. You will see the Next.js welcome page, from which you can begin developing your application.

## Features
- Built with Next.js for server-side rendering and improved performance.
- Supports React components from Radix UI, providing accessible and customizable UI primitives.
- ESLint configuration set up for code quality and consistency.
- Uses Tailwind CSS for rapid UI styling and custom component styling.
- Supports TypeScript for type safety and better developer experience.

## Dependencies
This project was built using the following packages:

```json
"dependencies": {
    "@hookform/resolvers": "^3.9.0",
    "@next/swc-wasm-nodejs": "13.5.1",
    "@radix-ui/react-accordion": "^1.2.0",
    "@radix-ui/react-alert-dialog": "^1.1.1",
    "@radix-ui/react-aspect-ratio": "^1.1.0",
    "@radix-ui/react-avatar": "^1.1.0",
    "@radix-ui/react-checkbox": "^1.1.1",
    "@radix-ui/react-collapsible": "^1.1.0",
    "@radix-ui/react-context-menu": "^2.2.1",
    "@radix-ui/react-dialog": "^1.1.1",
    "@radix-ui/react-dropdown-menu": "^2.1.1",
    "@radix-ui/react-hover-card": "^1.1.1",
    "@radix-ui/react-label": "^2.1.0",
    "@radix-ui/react-menubar": "^1.1.1",
    "@radix-ui/react-navigation-menu": "^1.2.0",
    "@radix-ui/react-popover": "^1.1.1",
    "@radix-ui/react-progress": "^1.1.0",
    "@radix-ui/react-radio-group": "^1.2.0",
    "@radix-ui/react-scroll-area": "^1.1.0",
    "@radix-ui/react-select": "^2.1.1",
    "@radix-ui/react-separator": "^1.1.0",
    "@radix-ui/react-slider": "^1.2.0",
    "@radix-ui/react-slot": "^1.1.0",
    "@radix-ui/react-switch": "^1.1.0",
    "@radix-ui/react-tabs": "^1.1.1",
    "@radix-ui/react-toast": "^1.2.1",
    "@radix-ui/react-toggle": "^1.1.0",
    "@radix-ui/react-toggle-group": "^1.1.0",
    "@radix-ui/react-tooltip": "^1.1.3",
    "@types/node": "20.6.2",
    "@types/nodemailer": "^6.4.14",
    "@types/react": "18.2.22",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "cmdk": "^1.0.0",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.3.0",
    "eslint": "8.49.0",
    "eslint-config-next": "13.5.1",
    "framer-motion": "^11.0.8",
    "input-otp": "^1.2.4",
    "lucide-react": "^0.446.0",
    "next": "13.5.1",
    "next-themes": "^0.3.0",
    "nodemailer": "^6.9.11",
    "postcss": "8.4.30",
    "react": "18.2.0",
    "react-confetti": "^6.1.0",
    "react-day-picker": "^8.10.1",
    "react-dom": "18.2.0",
    "react-hook-form": "^7.53.0",
    "react-resizable-panels": "^2.1.3",
    "recharts": "^2.12.7",
    "sonner": "^1.5.0",
    "tailwind-merge": "^2.5.2",
    "tailwindcss": "3.3.3",
    "tailwindcss-animate": "^1.0.7",
    "typescript": "5.2.2",
    "vaul": "^0.9.9",
    "zod": "^3.23.8"
}
```

## Project Structure
The project's file structure is laid out as follows:

```
/nextjs
|-- /node_modules      # Package dependencies
|-- /public            # Static files
|-- /src               # Application source
|   |-- /components     # Reusable components
|   |-- /hooks         # Custom hooks
|   |-- /lib           # Utility functions
|   |-- /pages         # Next.js pages
|   |-- /styles        # Global styles
|-- /app               # Application layout
|-- next.config.js     # Configuration file for Next.js
|-- package.json        # Project metadata and dependencies
|-- README.md          # Project overview and guide
```

This setup allows for development with a modular structure, enabling easy access to components and utilities across the application.