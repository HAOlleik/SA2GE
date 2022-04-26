# Translation

There are two options for translating the app:
1. Separate the app into different directories for each language. (ex. `pages/en/` and `pages/fr/`)
2. Use a single directory for all languages. (ex. `pages/`) and use the [next-i18next](https://www.npmjs.com/package/next-i18next) package to translate the app using strings from json files.

## Using next-i18next

next-i18next is build for next to support server side rendering and static site generation inspired by react-i18next.

I recommend going through the documentation and then seeing the [simple example of how to use next-i18next](https://github.com/isaachinman/next-i18next/tree/master/examples/simple).

1. Install next-i18next: `npm install next-i18next`
2. Define the languages you want to support and add them to the exported object: 
    ```
    const nextConfig = {
        i18n: {
            defaultLocale: "en",
            locales: ["en", "fr"],
        },
        // other options here ...
    };
    ```
3. Create the structure for locales:
    ```
    public/
        locales/
            en/
                common.json
            fr/
                common.json
    ```
4. Add text inside the json files:
    ```
    {
        "title": "My App",
        "description": "This is my app",
        "footer": "Copyright © 2020"
    }
    ```
5. Add imports to the top of pages: 
    ```
    import { useTranslation } from "next-i18next";
    import { serverSideTranslations } from "next-i18next/serverSideTranslations";
    ```
6. Configure translations static generation:
    ```
    export async function getStaticProps({ locale }) {
        return {
            props: {
            ...(await serverSideTranslations(locale, ["common", "about"])),
            },
        };
    }
    ```
    - getStaticProps is a function that is called when the app is built. It is used to generate the props that will be used in the app. _There is a bit of magic that Next does in the background to make this work._
    - serverSideTranslations returns a promise that needs to be awaited. It takes the current locale and an array of file names containing the translation dependencies for this page.
7. Add translations to the app:
    ```
    const { t } = useTranslation();
    return (
        <div>
            <h1>{t("title")}</h1>
            <p>{t("description")}</p>
            <footer>{t("footer")}</footer>
        </div>
    );
    ```
    `t` is a function that will translate text by fetching the appropriate string depending on the current locale.
    The example project I made has an example for translations from multiple files using one `t` function.



### Translating routes 
(ex. "/about" <-> "/a-propos")
- Translating the routes in the url would have to be done using Dynamic Routes and the getStaticPaths function. This does not seem like it is worth the effort. Stick with one language for the routing (probably French).