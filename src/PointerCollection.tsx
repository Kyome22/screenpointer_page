import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import pointer from "./json/pointer.json";
import "./PointerCollection.css";

type PointerInfo = {
  en_name: string;
  ja_name: string;
  image: string;
};

export function PointerCollection() {
  const lang = i18n.language;
  const infoList = pointer as PointerInfo[];

  const children = (info: PointerInfo[]) => {
    return info.map((value, i) => {
      const name = lang == "en" ? value.en_name : value.ja_name;
      return (
        <div key={`child-${i}`} className="pointer-child">
          <img src={value.image} alt={name} />
          <p>{name}</p>
        </div>
      );
    });
  };

  return <div className="pointer-collection">{children(infoList)}</div>;
}
