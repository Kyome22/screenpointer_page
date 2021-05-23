import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import Top from "./Top";
import SampleUsage from "./SampleUsage";
import Pointers from "./Pointers";
import Operations from "./Operations";
import FAQ from "./FAQ";
import "./Content.css";

export default function Content() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="content">
      <Top />
      <div className="section">
        <a className="anchor" id="what_is_this" />
        <p className="title">{t("what_is_this")}</p>
        <img src="images/screenpointer_demo.gif" alt="" />
        <p className="limited-explain">{t("explain1")}</p>
      </div>
      <SampleUsage />
      <Pointers />
      <div className="section">
        <a className="anchor" id="select_pointer" />
        <p className="title">{t("select_pointer")}</p>
        <img src={`images/${lang}/selecting.gif`} />
        <p className="limited-explain">{t("explain6")}</p>
        <p className="limited-explain">{t("explain7")}</p>
      </div>
      <Operations />
      <FAQ />
    </div>
  );
}
