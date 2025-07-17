# Portfolio Website

Here in my website I will constantly upload my recent works in the field on machine leraning and artificial intelligence.

<!-- Currently, :

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->

## Folder Structure
/portfolio-website
├── /public
│   ├── index.html
│   └── favicon.ico
├── /src
│   ├── /assets
│   │   └── profile-picture.jpg
│   ├── /components
│   │   ├── About.js
│   │   ├── Blog.js
│   │   ├── Contact.js
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   └── Projects.js
│   ├── /services
│   │   ├── emailjs.js      // Configuration and functions for EmailJS
│   │   └── cms.js          // Functions to fetch data from your headless CMS
│   ├── App.js              // Main component, handles routing
│   ├── index.css           // Tailwind CSS directives
│   ├── index.js            // Renders the App
│   └── content.js          // Your static content file
├── .gitignore
├── package.json
└── tailwind.config.js