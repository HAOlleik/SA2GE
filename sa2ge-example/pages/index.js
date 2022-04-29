import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

export default function Home() {
  const { t } = useTranslation();
  const [name, setName] = useState();

  const nameApi = "/api/hello";

  // use a useEffect hook to fetch the name from the server
  // should always be used when changing something on the ui
  // only runs after the first render
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(nameApi);
      const data = await response.json();
      // setState rerenders the whole component
      setName(data.name);
    };
    fetchData();
    // add empty dependency array to call this only once on first render
  }, []);

  return (
    <div className={styles.container}>
      <h1>{t("title")}</h1>
      <h3>{t("description")}</h3>
      {name ? (
        <p>
          Fetched Name from <a href={nameApi}>{nameApi}</a>:{" "}
          <span style={{ color: "limegreen" }}>{name}</span>
        </p>
      ) : (
        <p>{t("loading")}</p>
      )}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      // "about" is here even though it is not used in the page because it is used by the Header component created by _app.js
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
