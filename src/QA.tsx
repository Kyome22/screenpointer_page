import React from "react";
import "./QA.css";

type Props = {
  question: string;
  answer: string;
};

export function QA(props: Props) {
  return (
    <div className="qa-box">
      <div className="qa">
        <p className="mark">Q.</p>
        <p className="text">{props.question}</p>
      </div>
      <div className="qa">
        <p className="mark">A.</p>
        <p className="text">{props.answer}</p>
      </div>
    </div>
  );
}
