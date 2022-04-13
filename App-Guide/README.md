# App Guide
### This is a guide for creating the app. Use the other documents for more information about design. 
### This document focuses on the development process of the app itself.

Hopefully whoever reads this has some experience with React. React is a JavaScript library that allows you to build user interfaces with JavaScript using JSX syntax. Rather than pure html.

Since the website being created is (mostly) a static website without dynamic content, Next.js is the best choice for the front-end. 

Next is a framework that is used to build server-side rendered applications (server takes JS and creates html), but it is also used to build static html applications. It is a static site generator (SSG).

Next.js should be used for because it helps to create a static website with SEO, which React alone has trouble with.

- After building a React project using `npm run build`, an empty html file is served and the rest of the site is rendered (added to the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)) using javascript.

- After building a Next.js project using `npm run build`, the site is served html files generated from Next.js. The only javascript that may exist on the site after building is code to fetch news articles from the API, for example. 