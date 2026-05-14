# React Form Builder

A simple drag-and-drop form builder built with React, Vite, and Tailwind CSS.

## Features

- Drag fields from the left panel into the form canvas
- Edit each dropped item in a modal
- Support for text input, textarea, checkbox group, radio group, select, button, and paragraph blocks
- Mark text-based fields as required
- Adjust labels, placeholders, widths, colors, and option lists
- Save the current form and view the generated JSON on the page

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS
- Headless UI
- Jodit React editor

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint

## How It Works

1. Drag a field type from the left sidebar.
2. Drop it into the form area.
3. Click `edit` to customize that field.
4. Click `Save` to print the current form schema as JSON.

## Project Structure

```text
src/
  App.jsx                Main form builder UI
  EditModal.jsx          Paragraph editor modal
  EditTextInputModal.jsx Field settings modal
  Modal.jsx              Shared modal wrapper
  main.jsx               App entry point
  index.css              Tailwind imports
```

## Notes

- This project currently stores form data in component state only.
- The `Save` button shows the generated JSON in the UI; it does not send data to a backend.
