# Navbar / Header

When creating the navbar, it should have links to each page using the link component provided by the Next.js library:
`import Link from 'next/link'`

There may also be a search bar involved. This could search through the whole site and scroll to the relevant result and switch page if needed. This should be a low priority feature. It's not like it will be searching through a database.

The rest of the header/navbar is straight forward.

Use an \<img> tag for the logo. The \<Image> tag from Next is not needed because we are not going to use server-side rendering.

A language selector will go on the right side of the navbar. It will be a button that will switch the language to English or French depending on the current language. This button could also be a link that will redirect to the same page in the other language. The link could resemble `/en` or `/fr`. 

### The pages for each language should be in the `pages` directory with directories labeled `en` and `fr`.