import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

export default function Operations() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="section">
      <a className="anchor" id="operations" />
      <p className="title">{t("operations")}</p>
      <div>
        <p className="sub-title">{t("toggle_method")}</p>
        <img src={`images/${lang}/toggle.png`} alt="" />
        <p className="explain">{t("explain8")}</p>
      </div>
      <div>
        <p className="sub-title">{t("drawing_action")}</p>
        <p className="explain">{t("explain9")}</p>
        <img src="images/drawing_action_demo.gif" alt="" />
        <p className="explain">{t("explain10")}</p>
      </div>
      <div>
        <p className="sub-title">{t("size")}</p>
        <img src="images/change_size.png" alt="" />
        <p className="explain">{t("explain11")}</p>
      </div>
      <div>
        <p className="sub-title">{t("alpha")}</p>
        <img src="images/change_alpha.png" alt="" />
        <p className="explain">{t("explain12")}</p>
      </div>
      <div>
        <p className="sub-title">{t("key_action")}</p>
        <p className="explain">{t("explain13")}</p>
        <img src={`images/${lang}/switching.png`} alt="" />
        <p className="explain">{t("explain14")}</p>
      </div>
    </div>
  );
}
