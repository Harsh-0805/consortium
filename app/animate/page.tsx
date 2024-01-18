"use client";

import React, { useEffect, useState } from "react";
// import "./App.css";

const DEBUG_MODE = "FALSE";
const maxDivs = 300;

const App: React.FC = () => {
  const [divs, setDivs] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);
  const [bodyH, setBodyH] = useState(0);
  const [bodyW, setBodyW] = useState(0);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    changeWords();
    for (let i = 0; i < maxDivs / 3; i++) {
      newLingo();
    }
    setTimeout(() => {
      setInterval(newLingo, 25);
    }, 750);
  }, []);

  const changeWords = () => {
    const _index = (document.getElementById("thisSelect") as HTMLSelectElement)
      .value;
    switch (_index) {
      case "0":
        setWords([
          "function()",
          "Debug.Print()",
          "for(i=0;i<length;i++)",
          "var i",
          "ASCII",
          "Math.random()",
          "abs()",
          "block",
          "bool",
          "hasDedidcatedThread()",
          "setup.exe",
          "var me = new Person()",
          "terminate()",
          "abort()",
          "acos()",
          "asin()",
          "ceil()",
          "floor()",
          "isalpha()",
          "remove()",
          "toupper()",
          "modf()",
          "<html></html>",
          "$.ajax({})",
          "int64",
          "$query",
          "AI",
          "crypt()",
          "===",
          "!==",
          "empty()",
          "operators",
          "threading()",
          "session_start",
          '$_GET["paramater"]',
          '$POST["password"]',
          "hypertext",
          "color: black;",
          "font-family: Consolas",
          "array_push()",
          "array.push",
          "array_map()",
          "array_diff()",
          "base64_decode",
          "bcmod",
          "bcpow",
          "CachingIterator::count",
          "new Date()",
          "session_encode",
          "shuffle()",
          "sin",
          "sizeOf",
          "socket_bind",
          "socket_accept",
          "socket_sendto",
          "DateTime::setDate",
        ]);
        break;
      case "1":
        setWords(["0", "1"]);
        break;
    }
  };

  const newLingo = () => {
    setCounter(counter + 1);
    let lingo = getRandomValue(words);
    let lthan = "<";
    let regi = new RegExp(lthan, "g");
    lingo = lingo.replace(regi, "&lt;");
    let divId = "div" + counter;
    type DivStyle = {
      left: string;
      top: string;
      "--dest-x"?: string;
      "--dest-y"?: string;
      "--dest-z"?: string;
    };
    let divStyle: DivStyle = {
      left: getRandomInt(0, bodyW - 100) + "px",
      top: getRandomInt(0, bodyH - 100) + "px",
    };
    let _destZ = getRandomInt(100, 600);
    let quad = getQuandrantForElem(divStyle);
    switch (quad) {
      case 1:
        divStyle["--dest-x"] = "-50%";
        divStyle["--dest-y"] = "-50%";
        divStyle["--dest-z"] = _destZ + "px";
        break;
      case 2:
        divStyle["--dest-x"] = "50%";
        divStyle["--dest-y"] = "-50%";
        divStyle["--dest-z"] = _destZ + "px";
        break;
      case 3:
        divStyle["--dest-x"] = "-50%";
        divStyle["--dest-y"] = "50%";
        divStyle["--dest-z"] = _destZ + "px";
        break;
      case 4:
        divStyle["--dest-x"] = "50%";
        divStyle["--dest-y"] = "50%";
        divStyle["--dest-z"] = _destZ + "px";
        break;
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [divs, setDivs] = useState<
      { id: string; style: DivStyle; text: string }[]
    >([]);

    setDivs([...divs, { id: divId, style: divStyle, text: lingo }]);
    if (divs.length > maxDivs) {
      setDivs(divs.slice(1));
    }
  };

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const getRandomValue = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const getQuandrantForElem = (elem: any) => {
    let result = 0;
    let divDim = {
      X: parseInt(elem.left.slice(0, -2)),
      Y: parseInt(elem.top.slice(0, -2)),
    };
    let buffer = 50;
    if (divDim.X >= bodyW / 2 - buffer) {
      if (divDim.Y >= bodyH / 2) {
        result = 4;
      }
      if (divDim.Y <= bodyH / 2) {
        result = 2;
      }
    }
    if (divDim.X <= bodyW / 2 - buffer) {
      if (divDim.Y >= bodyH / 2) {
        result = 3;
      }
      if (divDim.Y <= bodyH / 2) {
        result = 1;
      }
    }
    return result;
  };

  return (
    <div className="App">
      <select id="thisSelect" onChange={changeWords}>
        <option value="0">Words</option>
        <option value="1">Binary</option>
      </select>
      {divs.map((div) => (
        <div key={div.id} id={div.id} className="lingo" style={div.style}>
          {div.text}
        </div>
      ))}
    </div>
  );
};

export default App;
