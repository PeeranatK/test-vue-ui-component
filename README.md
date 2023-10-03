# VUE use external UI component & typescript sample
- SASS/SCSS
    1. Add package `npm add -D sass`
    2. Add `@import 'filename.scss'` in `<style lang='scss'>` 
- Bootstrap
    1. Install package `npm i bootstrap`
    2. Add `import 'bootstrap/dist/css/bootstrap.css'` in `src/main.js`
- Vuetify
    1. Install package `npm i vuetify`
    2. Add this to `src/main.js`
        ```
        import 'vuetify/styles'
        import { createVuetify } from 'vuetify'
        import * as components from 'vuetify/components'
        import * as directives from 'vuetify/directives'
        ```
    3. Add `app.use(vuetify)` in `src/main.js` to enable.
- tailwind
    1. Install package `npm install -D tailwindcss postcss autoprefixer`
    2. Create config file `npx tailwindcss init -p`
    3. Edit `tailwind.config.js`
        ```
        export default {
            content: [
                "./index.html",
                "./src/**/*.{vue,js,ts,jsx,tsx}",
            ],
            theme: {
                extend: {},
            },
            plugins: [],
        }
        ```
    4. Add this code to `filename.css`
        ```
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        ```
    5. Import `css` to `main.js` via `import filename.css`
# Typescript
- axios sample
- declare variable / object 
- ref, reactive
- try ui