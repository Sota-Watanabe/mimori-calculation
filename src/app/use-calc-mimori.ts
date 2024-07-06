export const useCalcMimori = () => {
  // 以前作った関数(python だったもの)コピペ
  const calcMimori = (input: number) => {
    const kansuList = ["", "", "二", "三", "四", "五", "六", "七", "八", "九"];
    const hiraganaList = [
      "あ",
      "い",
      "う",
      "え",
      "お",
      "か",
      "き",
      "く",
      "け",
      "こ",
      "さ",
      "し",
      "す",
      "せ",
      "そ",
      "た",
      "ち",
      "つ",
      "て",
      "と",
      "な",
      "に",
      "ぬ",
      "ね",
      "の",
      "は",
      "ひ",
      "ふ",
      "へ",
      "ほ",
      "ま",
      "み",
      "む",
      "め",
      "も",
      "や",
      "ゆ",
      "よ",
      "ら",
      "り",
      "る",
      "れ",
      "ろ",
      "わ",
      "を",
      "ん",
    ];

    const makeKansu = (argNum: number): string => {
      if (argNum === 0) {
        return "零";
      }

      const thousand = Math.floor(argNum / 1000);
      const hundred = Math.floor((argNum % 1000) / 100);
      const ten = Math.floor((argNum % 100) / 10);
      const one = argNum % 10;

      let kansu = "";
      if (thousand) {
        kansu += `${kansuList[thousand]}千`;
      }
      if (hundred) {
        kansu += `${kansuList[hundred]}百`;
      }
      if (ten) {
        kansu += `${kansuList[ten]}十`;
      }
      if (one === 1) {
        kansu += "一";
      } else {
        kansu += kansuList[one];
      }

      return kansu;
    };

    const makeMori = (argNum: number): string => {
      const numMori = Math.floor(argNum / 3);
      let mod = argNum % 3;
      const numHayashi = Math.floor(mod / 2);
      const numKi = mod % 2;

      let mori = "";
      mori += "森".repeat(numMori);
      mori += "林".repeat(numHayashi);
      mori += "木".repeat(numKi);

      return mori;
    };

    const makeSuzuko = (argNum: number): string => {
      const num = (argNum + 9) % 46;
      return `${hiraganaList[num].repeat(2)}゙こ`;
    };

    const makeMimoriSuzuko = (argNum: number): string => {
      let mimoriSuzuko = "";
      mimoriSuzuko += makeKansu(argNum);
      mimoriSuzuko += makeMori(argNum);
      mimoriSuzuko += makeSuzuko(argNum);
      return mimoriSuzuko;
    };

    if (0 <= input || input <= 1000) return makeMimoriSuzuko(input);
    else return "";
  };
  return { calcMimori };
};
