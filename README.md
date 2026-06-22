# Component Library

A reusable collection of UI components built with **React** and **TypeScript**, designed for easy integration and customization across projects.

## Description

This library provides a set of styled, accessible, and theme‑aware components such as buttons, cards, badges, and more. It leverages Vite for fast development, TypeScript for type safety, and follows the project's existing conventions.

## Installation

```bash
# Install dependencies
npm install

# Install the component library (if published as a package)
npm i @your-scope/component-library
```

> **Note:** If you are using the repository directly, simply run `npm install` in the project root after cloning.

## Usage

Import and use components in your React application:

```tsx
import React from "react";
import { Button, Card } from "your-component-library"; // adjust import path as needed

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Card title="Welcome">
        <p>This is a sample usage of the Card component.</p>
        <Button onClick={() => alert("Clicked!")}>Click Me</Button>
      </Card>
    </div>
  );
}

export default App;
```

Run the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

## Contributing

Feel free to open issues or submit pull requests. Follow the project's ESLint and TypeScript guidelines when adding new components.
