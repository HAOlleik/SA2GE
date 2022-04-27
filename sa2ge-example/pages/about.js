import Link from "next/link";
import styles from "../styles/Home.module.css";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function About() {
  const { t } = useTranslation(["about", "common"]);

  return (
    <div className={styles.container}>
      <h1>{t("about")}</h1>
      <Link href="/">
        <a>{t("home", { ns: "common" })}</a>
      </Link>
      <p>{t("about_desc")}</p>
      <code>pages/about.js</code>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "about"])),
    },
  };
}
