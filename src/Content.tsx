import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import "./Content.css";
import { PointerTable } from "./PointerTable";
import { QA } from "./QA";

export function Content() {
  const lang = i18n.language;
  const { t } = useTranslation();

  return (
    <div className="content">
      <div className="section">
        <p className="title">{t("what_is_this")}</p>
        <img src="images/screenpointer_demo.gif" alt="" />
        <p className="explain">{t("explain1")}</p>
      </div>
      <div className="section">
        <p className="title">{t("sample_usage")}</p>
        <p className="sub-title">{t("presentation")}</p>
        <img src="images/presentation.png" alt="" />
        <p className="explain">{t("explain2")}</p>
        <p className="sub-title">{t("workshop")}</p>
        <img src="images/workshop.png" alt="" />
        <p className="explain">{t("explain3")}</p>
        <p className="sub-title">{t("spreadsheet")}</p>
        <img src="images/spreadsheet.png" alt="" />
        <p className="explain">{t("explain4")}</p>
      </div>
      <div className="section">
        <p className="title">{t("pointers")}</p>
        <PointerTable />
        <p className="explain" id="help">
          {t("explain5")}
        </p>
      </div>
      <div className="section">
        <p className="title">{t("select_pointer")}</p>
        <img src={`images/${lang}/how_to_select_pointer.gif`} />
        <p className="limited-explain">{t("explain6")}</p>
        <p className="limited-explain">{t("explain7")}</p>
      </div>
      <div className="section">
        <p className="title">{t("operations")}</p>
        <p className="sub-title">{t("toggle_method")}</p>
        <img src={`images/${lang}/toggle.png`} alt="" />
        <p className="explain">{t("explain8")}</p>
        <p className="sub-title">{t("drawing_action")}</p>
        <p className="explain">{t("explain9")}</p>
        <img src="images/drawing_action_demo.gif" alt="" />
        <p className="explain">{t("explain10")}</p>
        <p className="sub-title">{t("size")}</p>
        <img src="images/change_size.png" alt="" />
        <p className="explain">{t("explain11")}</p>
        <p className="sub-title">{t("alpha")}</p>
        <img src="images/change_alpha.png" alt="" />
        <p className="explain">{t("explain12")}</p>
        <p className="sub-title">{t("key_action")}</p>
        <p className="explain">{t("explain13")}</p>
        <img src={`images/${lang}/switching.png`} alt="" />
        <p className="explain">{t("explain14")}</p>
      </div>
      <div className="section">
        <p className="title" id="qa">
          {"Q&A"}
        </p>
        <QA question={t("question1")} answer={t("answer1")} />
        <QA question={t("question2")} answer={t("answer2")} />
        <QA question={t("question3")} answer={t("answer3")} />
      </div>
    </div>
  );
}
