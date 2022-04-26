import styles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LangSelector from "./LangSelector";

export default function Header() {
  const { t } = useTranslation(["common", "about"]);

  return (
    <header className={`${styles.container} ${styles["flex-row"]}`}>
      <img src="" alt="SA2GE logo here" />
      <nav className={styles.links}>
        <Link href="/">{t("home")}</Link>
        <Link href="/about">{t("about", { ns: "about" })}</Link>
      </nav>
      <div
        className={`${styles["flex"]} ${styles["flex-grow"]} ${styles["flex-end"]}`}
      >
        <LangSelector />
      </div>
    </header>
  );
}

// !! getStaticProps should not be here because this is not a page.

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "about"])),
//     },
//   };
// }
