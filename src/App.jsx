import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./compoonents/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickSwitchFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>

      <button onClick={onClickButton}>ｶｳﾝﾄｱｯﾌﾟ</button>
      <br />
      <button onClick={onClickSwitchFlag}>on/off</button>

      <p>{num}</p>
      {faceShowFlag && <p>($・・)/~~~</p>}
    </>
  );
};

export default App;
