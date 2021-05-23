import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import pointer from "./json/pointer.json";
import "./Pointers.css";

type PointerInfo = {
  en_name: string;
  ja_name: string;
  image: string;
};

export default function Pointers() {
  const lang = i18n.language;
  const { t } = useTranslation();
  const infoList = pointer as PointerInfo[];

  const pointerGrid = () => {
    return infoList.map((value, i) => {
      const name = lang == "en" ? value.en_name : value.ja_name;
      return (
        <div key={`child-${i}`}>
          <img src={value.image} alt={name} />
          <p>{name}</p>
        </div>
      );
    });
  };

  return (
    <div className="section">
      <a className="anchor" id="pointers" />
      <p className="title">{t("pointers")}</p>
      <div className="pointer-grid">{pointerGrid()}</div>
      <p className="explain">{t("explain5")}</p>
    </div>
  );
}
