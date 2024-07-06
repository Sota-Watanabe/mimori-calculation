"use client";
import { css } from "@emotion/react";
import Image from "next/image";
import { useState } from "react";
import { useCalcMimori } from "./use-calc-mimori";

const container = css`
  display: flex;
  justify-content: center;
`;

const main = css`
  background-image: url("/三森算背景.svg");
  background-size: cover; /* 画像をコンテナに合わせてサイズ調整 */
  background-repeat: no-repeat; /* 画像を繰り返さない */
  background-position: center; /* 画像を中央に配置 */
  max-width: 400px;
  width: 100%;
  height: 100vh; /* ビューポート全体の高さ */
`;

const h2 = css`
  margin: 40px 0 0 0;
`;

const ad = css`
  height: 35px;
  background: blue;
`;

const form = css`
  height: 64px;
  background: white;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
  border-color: rgba(149, 149, 149, 1);

  width: 100%;
  text-align: center;
  font-size: 20px;
  color: rgba(108, 108, 108, 1);
`;

const btn = css`
  display: flex;
  justify-content: center;
  margin: 8px;
`;

const resultStyle = css`
  min-height: 250px;
  background: white;
  border-width: 1px 0px 1px 0px;
  border-style: solid;
  border-color: rgba(149, 149, 149, 1);
`;

const howToUse = css`
  p {
    font-size: 12px;
    margin: 2px 0;
  }
`;

const pointer = css`
  cursor: pointer;
`;
const textCenter = css`
  text-align: center;
`;

export default function Home() {
  const { calcMimori } = useCalcMimori();
  const [value, setValue] = useState(1);
  const [result, setResult] = useState<string>(calcMimori(Number(value)));
  const handleChange = (e: { target: { value: any } }) => {
    const newValue = e.target.value;
    if (newValue >= 0 && newValue <= 1000) {
      setValue(newValue);
    }
  };

  return (
    <div css={container}>
      <div css={main}>
        <h1 css={textCenter}>三森算</h1>
        {/* <div css={ad}>広告</div> */}

        <h2 css={h2}>何森？</h2>
        <input
          css={form}
          type="number"
          min={0}
          max={1000}
          value={value}
          onChange={handleChange}
        />

        <div css={btn} onClick={() => setResult(calcMimori(Number(value)))}>
          <img
            src="/実行ボタン.svg"
            alt="実行ボタン"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div css={resultStyle}>{calcMimori(Number(value))}</div>
        <div css={howToUse}>
          <p>使い方：</p>
          <p>数字を入れて実行押せば三森すずこのできあがり</p>
          <p>1 → 一木さざこ</p>
          <p>3 → 三森すずこ</p>
          <p>6 → 六森森ただこ</p>
        </div>
      </div>
    </div>
  );
}
