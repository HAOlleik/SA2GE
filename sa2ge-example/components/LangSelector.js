import { useRouter } from "next/router";

export default function LangSelector(props) {
  const router = useRouter();

  const setLocale = (elem) => {
    router.push(router.pathname, undefined, {
      locale: elem.target.value,
    });
  };

  return (
    <select
      defaultValue={router.locale || "en"}
      onChange={setLocale}
      {...props}
    >
      <option value="en">En</option>
      <option value="fr">Fr</option>
    </select>
  );
}
