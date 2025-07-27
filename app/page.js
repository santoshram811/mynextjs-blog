"use client";

import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import AuthorBio from "../components/AuthorBio";

export default function Home() {
  const { t } = useTranslation();

  const codeString = `
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Santosh"));
`;

  return (
    <main>
      <h1>{t("welcome")}</h1>
      <p>{t("intro")}</p>
      <h2>{t("sampleCode")}</h2>
      <SyntaxHighlighter language="javascript" style={oneDark}>
        {codeString}
      </SyntaxHighlighter>
      <AuthorBio />
    </main>
  );
}
