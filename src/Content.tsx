import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./Content.css";
import { PointerTable } from "./PointerTable";
import { QA } from "./QA";

export function Content() {
  const lang = i18n.language;
  const { t } = useTranslation();

  const newline = (str: string) => {
    return str.split("\n").map((str, index) => (
      <React.Fragment key={`newline-${index}`}>
        {str}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="content">
      <div className="section">
        <p className="title">{t("what_is_this")}</p>
        <img src="images/screenpointer_demo.gif" alt="" />
        <p className="explain">{newline(t("explain1"))}</p>
      </div>
      <div className="section">
        <p className="title">{t("sample_usage")}</p>
        <p className="sub-title">{t("presentation")}</p>
        <img src="images/presentation.png" alt="" />
        <p className="explain">{newline(t("explain2"))}</p>
        <p className="sub-title">{t("workshop")}</p>
        <img src="images/workshop.png" alt="" />
        <p className="explain">{newline(t("explain3"))}</p>
        <p className="sub-title">{t("spreadsheet")}</p>
        <img src="images/spreadsheet.png" alt="" />
        <p className="explain">{newline(t("explain4"))}</p>
      </div>
      <div className="section">
        <p className="title">{t("pointers")}</p>
        <PointerTable />
        <p className="explain" id="help">
          {newline(t("explain5"))}
        </p>
      </div>
      <div className="section">
        <p className="title">{t("operations")}</p>
        <p className="sub-title">{t("toggle_method")}</p>
        <img src={`images/${lang}/toggle.png`} alt="" />
        <p className="explain">{newline(t("explain6"))}</p>
        <p className="sub-title">{t("drawing_action")}</p>
        <img src="images/drawing_action_demo.gif" alt="" />
        <p className="explain">{newline(t("explain7"))}</p>
        <p className="sub-title">{t("size")}</p>
        <img src="images/change_size.png" alt="" />
        <p className="explain">{newline(t("explain8"))}</p>
        <p className="sub-title">{t("alpha")}</p>
        <img src="images/change_alpha.png" alt="" />
        <p className="explain">{newline(t("explain9"))}</p>
        <p className="sub-title">{t("key_action")}</p>
        <p className="explain">{t("explain10")}</p>
        <img src={`images/${lang}/switching.png`} alt="" />
        <p className="explain">{t("explain11")}</p>
      </div>
      <div className="section">
        <p className="title" id="qa">
          {"Q&A"}
        </p>
        <QA question={t("question1")} answer={t("answer1")} />
        <QA question={t("question2")} answer={t("answer2")} />
      </div>
    </div>
  );
}
