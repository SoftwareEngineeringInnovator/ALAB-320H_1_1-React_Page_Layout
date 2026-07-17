# ALAB-320H 1.1 - React Page Layout

## Employee Directory

This project is a beginner React application created to practice building a page from a mockup.

The application displays an Employee Directory containing employee names, job titles, and profile images. The layout was divided into smaller React components to keep the project organized and easier to understand.

This project was built as part of the Per Scholas Software Engineering Program.

---

## Project Objective

The main goals of this lab were to:

- Create a React application with Vite
- Build a page based on a provided mockup
- Separate the page into reusable React components
- Pass employee information through props
- Use `.map()` to display multiple employees
- Import and display local images
- Style React components using regular CSS
- Practice working with Git and GitHub

---

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- HTML
- CSS
- Oxlint
- npm
- Git
- GitHub

---

## React Components

The application is organized using the following components:

### `App`
The main component that displays the `Homepage` component.

### `Homepage`

Organizes the main Employee Directory layout.

### `Header`

Displays the Employee Directory heading.

### `SearchBar`

Displays the search input shown in the mockup. The search field is currently part of the layout only and does not filter employees.

### `EmployeeList`

Stores the employee information and uses `.map()` to display each employee.

### `EmployeeListItem`

Displays one employee’s image, name, and job title. This component is reused for every employee in the directory.

---

## Component Structure

```text
App
└── Homepage
    ├── Header
    ├── SearchBar
    └── EmployeeList
        └── EmployeeListItem
```

---

## Employees Displayed

The directory includes:

- James King - President and CEO
- Julie Taylor - VP of Marketing
- Eugene Lee - CFO
- John Williams - VP of Engineering
- Ray Moore - VP of Sales
- Paul Jones - QA Manager

Each employee has an individual profile image stored locally inside the `src/assets` folder.

---

## Project Structure

```text
src/
├── assets/
│   ├── EugeneLee.png
│   ├── JamesKing.png
│   ├── JohnWilliams.png
│   ├── JulieTaylor.png
│   ├── PaulJones.png
│   └── RayMoore.png
│
├── components/
│   ├── EmployeeList.jsx
│   ├── EmployeeListItem.jsx
│   ├── Header.jsx
│   └── SearchBar.jsx
│
├── App.css
├── App.jsx
├── Homepage.jsx
├── index.css
└── main.jsx
```

---

## How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/SoftwareEngineeringInnovator/ALAB-320H_1_1-React_Page_Layout.git
```

### 2. Enter the project folder

```bash
cd ALAB-320H_1_1-React_Page_Layout
```

### 3. Install the project dependencies

```bash
npm install
```

### 4. Start the Vite development server

```bash
npm run dev
```

Vite will display a local address similar to:

```text
http://localhost:5173/
```

Open the address shown in the terminal.

---

## Available Commands

Run the development server:

```bash
npm run dev
```

Check the project for linting problems:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## Current Functionality

This assignment focuses on recreating the visual layout from the mockup.

The current project includes:

- Employee Directory header
- Search input
- Six employee rows
- Individual employee profile images
- Employee names and job titles
- Reusable React components
- Responsive image sizing and circular profile pictures

No interactive functionality was required for this lab.

---

## Future Improvements

A future version of this project could include:

- A working employee search feature
- The right-side Employee Details page shown in the original mockup
- The ability to select an employee
- Employee phone numbers and email addresses
- React Router for navigating between pages
- Additional responsive styling for smaller screens

For this assignment, only the left-side Employee Directory was required.

---

## What I Learned

This lab helped me understand how React applications can be divided into smaller components.

I also practiced:

- Importing and exporting React components
- Passing information with props
- Rendering lists with `.map()`
- Adding a unique React `key`
- Importing local image files
- Applying CSS classes through JSX
- Organizing a React project into folders
- Committing and pushing changes to GitHub

---

## Author

Fredy Chilito  
Software Engineering Student  
Created as part of the Per Scholas Software Engineering Program.  
Project: ALAB-320H 1.1 - React Page Layout