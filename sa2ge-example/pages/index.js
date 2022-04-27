import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>{t("title")}</h1>
      <h3>{t("description")}</h3>
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
