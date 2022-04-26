# App Guide
## This guide should be read clearly, if something is skipped, you may run into problems.
### This is a guide for creating the app. Use the other documents for more information about design. 
### This document focuses on the development process of the app itself.

Hopefully whoever reads this has some experience with React. React is a JavaScript library that allows you to build user interfaces with JavaScript using JSX syntax. Rather than pure html.

Since the website being created is (mostly) a static website without dynamic content, Next.js is the best choice for the front-end. 

Next is a framework that is used to build server-side rendered applications (server takes JS and creates html), but it is also used to build static html applications. It is a static site generator (SSG).

Next.js should be used for because it helps to create a static website with SEO, which React alone has trouble with.

- After building a React project using `npm run build`, an empty html file is served and the rest of the site is rendered (added to the [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)) using javascript.

- After building a Next.js project using `npm run build`, the site is served html files generated from Next.js. The only javascript that may exist on the site after building is code to fetch news articles from the API, for example. 


## To start a Next.js project, run the following command in the terminal:
Next.js docs: https://nextjs.org/docs/api-reference/create-next-app

```
npx create-next-app@latest SA2GE
cd SA2GE
```

this will create a folder named SA2GE in the current directory with a Next.js project init.
Use the commands below to run the starter project on http://localhost:3000.

```
npm run dev
```


## For testing deployment, run the following command in the terminal:

```
npm run build
npm start
```

This will build the project into the .next directory and start the server on http://localhost:3000.