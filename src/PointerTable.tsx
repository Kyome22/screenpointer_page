import React from "react";
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import pointer from "./json/pointer.json";
import "./PointerTable.css";

type PointerInfo = {
  en_name: string;
  ja_name: string;
  image: string;
};

export function PointerTable() {
  const lang = i18n.language;
  const { t } = useTranslation();
  const infoList = pointer as PointerInfo[];

  const rows = (values: PointerInfo[]) => {
    return values.reduce(
      (array, value) => {
        if (array[array.length - 1].length < 3) {
          array[array.length - 1].push(value);
        } else {
          array.push([value]);
        }
        return array;
      },
      [[]] as PointerInfo[][]
    );
  };

  const trs = (rows: PointerInfo[][]) => {
    return rows.map((values, i) => <tr key={`tr-${i}`}>{tds(values)}</tr>);
  };

  const tds = (row: PointerInfo[]) => {
    return row.map((value, i) => {
      const name = lang == "en" ? value.en_name : value.ja_name;
      return (
        <td key={`td-${i}`}>
          <div className="runner">
            <img src={value.image} alt={name} />
          </div>
          <p>{name}</p>
        </td>
      );
    });
  };

  return (
    <table className="pointer-table">
      <tbody>{trs(rows(infoList))}</tbody>
    </table>
  );
}
