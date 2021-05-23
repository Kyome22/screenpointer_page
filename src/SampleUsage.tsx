import React from "react";
import { useTranslation } from "react-i18next";

export default function SampleUsage() {
  const { t } = useTranslation();

  return (
    <div className="section">
      <a className="anchor" id="sample_usage" />
      <p className="title">{t("sample_usage")}</p>
      <div>
        <p className="sub-title">{t("presentation")}</p>
        <img className="usage" src="images/presentation_1.png" alt="" />
        <img className="usage" src="images/presentation_2.png" alt="" />
        <p className="limited-explain">{t("explain2")}</p>
      </div>
      <div>
        <p className="sub-title">{t("workshop")}</p>
        <img className="usage" src="images/workshop_1.png" alt="" />
        <img className="usage" src="images/workshop_2.png" alt="" />
        <p className="limited-explain">{t("explain3")}</p>
      </div>
      <div>
        <p className="sub-title">{t("spreadsheet")}</p>
        <img className="usage" src="images/spreadsheet_1.png" alt="" />
        <img className="usage" src="images/spreadsheet_2.png" alt="" />
        <p className="limited-explain">{t("explain4")}</p>
      </div>
    </div>
  );
}
