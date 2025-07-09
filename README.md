# Multi-Select Filter

## Architecture & Design Decisions

This project is a React application built with TypeScript and Vite, featuring a modular component structure. Key components include:

- **MultiSelect**: Main filter component, manages selected and available items, search, and persistent state.
- **SearchInput**: Controlled input for searching/filtering items.
- **ItemList**: Renders selectable items with custom checkboxes and hover states.
- **SelectedOverview**: Displays selected categories in a summary panel.
- **Persistent State**: Uses a custom hook (`usePersistentState`) to store selections in localStorage, ensuring selections persist across reloads.
- **GraphQL**: Fetches categories using a GraphQL client and query abstraction.
- **Storybook**: All components are documented and tested with Storybook, including interaction tests using the Vitest addon for robust UI testing.
- **Tailwind CSS**: Used for styling, including custom states (e.g., hover on checkboxes).

### Important Design Decisions

- **Controlled Components**: All form elements are controlled via props and state, ensuring predictable UI and easy testing.
- **Testable Stories**: Storybook stories are written to support both documentation and automated interaction tests.
- **Accessibility**: ARIA roles and labels are used throughout for better accessibility.
- **Persistent Selection**: Selections are saved in localStorage, but tests clear this state to ensure reliability.

## Installation & Running the App

1. **Install dependencies:**

   ```sh
   pnpm install

   ```

2. **Run the development server:**

```sh
pnpm mock-server
```

The server will start and provide a GraphiQL playground for testing queries and will be available at `http://localhost:4000` (or the port shown in your terminal).

````

3. **Run the development server:**
```sh
pnpm dev
````

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

3. **Run Storybook:**

   ```sh
   pnpm storybook
   ```

   Storybook will be available at `http://localhost:6006`.

4. **Build for production:**

   ```sh
   pnpm build
   ```

5. **Run tests (including Storybook interaction tests):**
   ```sh
   pnpm test
   # or, for Storybook Vitest addon:
   pnpm storybook --test
   ```

## Mock GraphQL Server

This project includes a mock GraphQL server using [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server). This server provides mock data for development and testing, ensuring the app works without a real backend.

- **Location:** `mock-server/mock-server.ts`
- **How to run:**

  ```sh
  pnpm mock-server
  ```

  The server will start and provide a GraphiQL playground for testing queries.

- **Usage:**
  - The app and Storybook will use this mock server for all GraphQL requests during development.
  - You can explore and test queries directly in the GraphiQL playground at the server URL (shown in your terminal after starting the server).

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
