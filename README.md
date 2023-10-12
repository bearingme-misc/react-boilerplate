# React + TypeScript + Vite + Tailwind CSS and more

This template provides you a full setup to start developing a React application with TypeScript, Vite, Tailwind CSS, ESLint, Prettier, Jest, Storybook, and more. Created for a better developer experience following best practices.

## Usage

To run the project, clone the repository and install dependencies using `pnpm install` or `npm install`. Then run `pnpm dev` or `npm run dev` to start the development server.

These tools and settings have already been installed and configured for this project. To use them effectively, follow these guidelines:

- Ensure that you write code adhering to ESLint and Prettier rules.
- While committing changes, `lint-staged` and `husky` will automatically lint and format your code.

## Recommended Setup

We recommend you using [pnpm](https://pnpm.io/) as your package manager. It is faster and more efficient than npm and yarn. Install it globally using `npm install -g pnpm`.

Vite also provides two plugins for Fast Refresh, which is a replacement for React Hot Loader. This project uses the SWC plugin by default. You can switch to the Babel plugin by changing the `vite.config.ts` file.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

> Note: If you are using the Babel plugin, you will need to install `@babel/plugin-transform-react-jsx` and `@babel/plugin-transform-react-jsx-source` as dev dependencies.

When using VS Code, we recommend installing the following extensions:

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)

## Src Folder Structure

- **assets:** static assets like images, fonts, etc.
- **components:** React components.
- **docs:** Documentation files.
- **hooks:** Custom React hooks.
- **layouts:** React components that are used as layouts.
- **libs:** Utility functions and classes.
- **locales:** Localization files.
- **pages:** React components that are used as pages.
- **queries:** ReactQuery hooks.
- **routes:** React Router routes.
- **services:** External services like API clients.
- **stores:** Recoil stores.
- **types:** TypeScript type definitions.
- **validations:** Yup validation schemas.
- **App.tsx:** the root component for the project.
- **main.tsx:** the entry point for the project.
- **vite-env.d.ts:** Vite environment variables.

## Tools and Settings

1. **ESLint**: ESLint is a static code analysis tool used to identify and fix problems in your JavaScript code.
2. **Prettier**: Prettier is an opinionated code formatter that ensures consistent code style across your project.
3. **ESLint Prettier Plugin**: This plugin integrates Prettier with ESLint, ensuring that your code follows both ESLint and Prettier rules.
4. **Prettier Tailwind Plugin**: This plugin extends Prettier to format Tailwind CSS code in a consistent manner.
5. **Tailwind CSS**: Tailwind CSS is a utility-first CSS framework used for styling your Vue components.
6. **Lint-Staged**: Lint-Staged is a tool that runs linters on pre-committed files, allowing you to catch and fix issues before committing changes to version control.
7. **Husky**: Husky is a tool that sets up Git hooks to enforce code quality checks before allowing commits.
8. **Jest**: Jest is a JavaScript testing framework used to test your code.
9. **Storybook**: Storybook is a tool used to develop and test UI components in isolation.

## Hidden Files

- **.git:** Git version control system metadata and configuration.
- **node_modules:** Directory containing project dependencies installed using Node.js package manager.
- **.eslintrc.cjs:** ESLint configuration file.
- **tsconfig.json:** TypeScript configuration file.
- **postcss.config.js:** PostCSS configuration file.
- **vite.config.ts:** Vite configuration file.
- **pnpm-lock.yaml:** pnpm (package manager) lockfile.
- **.prettierrc:** Prettier configuration file.
- **tsconfig.node.json:** TypeScript configuration for Node.js.
- **index.html:** Project's HTML entry file.
- **.lintstagedrc:** Configuration file for lint-staged.
- **jest.config.js:** Jest configuration file.

These are mostly configuration files for the tools and settings mentioned above. You can modify them to suit your needs. For example, you can add more ESLint rules to `.eslintrc.cjs`.

To show hidden files in VS Code, press `Ctrl + Shift + P` and search for `Toggle Hidden Files`. You can also open them by using your terminal and running `ls -a` (Linux/Mac) or `dir /a` (Windows), then `code <filename>`.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
