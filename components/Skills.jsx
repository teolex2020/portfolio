import React from "react";

const Skills = () => {
  const maps = [
  
    { number: 5, name: "Next.js(React.js)" },
    { number: 6, name: "SASS" },
    { number: 7, name: "Tailwind" },
    { number: 8, name: "Redux Toolkit" },
    { number: 9, name: "MongoDB" },
  ];

    const maps2 = [
    {number: 11, name: "Java Script" },
    { number: 12, name: "CSS" },
    { number: 13, name: "HTML" },
    ];

  return (
    <div className="text-[12px] mm:text-[16px] md:text-[26px] mm:pl-10 w-full">
      <p className="text-fuchsia-700">
        <span className="text-slate-400 mr-4">1</span>import{" "}
        <span className="text-red-700">React</span> from{" "}
        <span className="text-green-700">'react'</span>
      </p>
      <p className="text-fuchsia-700">
        <span className="text-slate-400 mr-4">2</span>
        const <span className="text-blue-400">{"Skills"}</span> ={" "}
        <span className="text-yellow-400">{"(  )"}</span>
        <span>{"=>"}</span> <span className="text-yellow-400">{"{"}</span>
      </p>
      <p className="text-fuchsia-700">
        <span className="text-slate-400 mr-8">3</span>return (
      </p>
      <p className="text-red-700">
        <span className="text-green-700">
          <span className="text-slate-400 mr-12">4</span>
          {"<"}
        </span>
        div
        <span className="text-green-700">{">"}</span>
      </p>

      {maps.map((e, index) => (
        <p
          key={index}
          className="text-slate-400 hover:text-slate-200 cursor-pointer hover:underline hover:underline-offset-1 hover:bg-slate-800"
        >
          <span className="text-slate-400 mr-20">{e.number}</span>
          <span>{"<"}</span>
          <span className="text-red-700">{"p"}</span>
          <span>{">"}</span>
          {e.name}
          <span>{"</"}</span>
          <span className="text-red-700">{"p"}</span>
          <span>{">"}</span>
        </p>
      ))}

      <p className="text-green-700">
        <span className="text-slate-400 mr-20">10</span>
        <span>{"<"}</span>
        <span className="text-red-700">{"div"}</span>
        <span>{">"}</span>
        ---||---
        <span>{"</"}</span>
        <span className="text-red-700">{"div"}</span>
        <span>{">"}</span>
      </p>

      {maps2.map((e, index) => (
        <p
          key={index}
          className="text-slate-400 hover:text-slate-200 cursor-pointer hover:underline hover:underline-offset-1 hover:bg-slate-800"
        >
          <span className="text-slate-400 mr-20">{e.number}</span>
          <span>{"<"}</span>
          <span className="text-red-700">{"p"}</span>
          <span>{">"}</span>
          {e.name}
          <span>{"</"}</span>
          <span className="text-red-700">{"p"}</span>
          <span>{">"}</span>
        </p>
      ))}
      <p className="text-red-700">
        <span className="text-green-700">
          <span className="text-slate-400 mr-12">14</span>
          {"</"}
        </span>
        div
        <span className="text-green-700">{">"}</span>
      </p>
      <p className="text-red-700">
        <span className="text-slate-400 mr-4">10</span>
        <span className="text-fuchsia-700">export</span> default Skills
      </p>
    </div>
  );
};

export default Skills;
