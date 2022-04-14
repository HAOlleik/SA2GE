# [Next.js Pages](https://nextjs.org/docs/basic-features/pages)

Next.js works very similar to React, but there are some differences.
When a Next.js app is created, there is support for pages right away through the `pages` directory. For example, the "/about" page location would be `pages/about.js`. `about.js` is a file that contains the JSX for the page.

Normally to support pages in React, the `react-router-dom` library is used.

Both React and Next.js have a `Link` component that creates links on the website for users to click on. 

The [Next.js \<Link>](https://nextjs.org/docs/api-reference/next/link) has an `href` attribute that specifies the location of the page. The React \<Link> has a `to` attribute.

To make a link to a page, you can use the `Link` component.

For example,

`<Link href="/about">About</Link>`