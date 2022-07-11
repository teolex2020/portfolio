import React from 'react'
import bd from "../pages/bd.jsx"



const ProfessionalsExperience = () => {
  return (
    <div className="text-[10px] mm:text-[15px] xl:text-[16px]">
      <p className="text-fuchsia-700">
        <span className="text-blue-600 mr-4"></span>import{" "}
        <span className="text-yellow-400">React</span> from{" "}
        <span className="text-green-700">'react'</span>
      </p>
      <p className="text-fuchsia-700">
        <span className="text-blue-600 mr-4"></span>
        const <span className="text-blue-600">
          {"ProfessionalsExperience"}
        </span>{" "}
        = <span className="text-yellow-400">{"(  )"}</span>
        <span>{"=>"}</span> <span className="text-yellow-400">{"{"}</span>
      </p>
      <p className="text-fuchsia-700">
        <span className="text-blue-600 mr-8"></span>return (
      </p>
      <p className="text-yellow-400">
        <span className="text-green-700">
          <span className="text-blue-600 mr-12"></span>
          {"<"}
        </span>
        div
        <span className="text-green-700">{">"}</span>
      </p>
      <p className="text-blue-600">
        <span className="text-blue-600 mr-20"></span>
        <span>{"<"}</span>
        <span className="text-yellow-400">{"h1"}</span>
        <span>{">"}</span>
        Next JS Developer
        <span>{"</"}</span>
        <span className="text-yellow-400">{"h1"}</span>
        <span>{">"}</span>
      </p>
      <p className="text-blue-600">
        <span className="text-blue-600 mr-20"></span>
        <span>{"<"}</span>
        <span className="text-yellow-400">{"h2"}</span>
        <span>{">"}</span>
        AOEK
        <span>{"</"}</span>
        <span className="text-yellow-400">{"h2"}</span>
        <span>{">"}</span>
      </p>

      <p className="text-yellow-400">
        <span className="text-green-700">
          <span className="text-blue-600 mr-12"></span>
          {"<"}
        </span>
        ul
        <span className="text-green-700">{">"}</span>
      </p>
      <div className=" pl-20">
        {bd.map((e, index) => (
          <p
            key={index}
            className="text-blue-600 hover:text-slate-200 cursor-pointer hover:underline hover:underline-offset-1 hover:bg-slate-800"
          >
            <span className="text-blue-600 "></span>
            <span>{"<"}</span>
            <span className="text-yellow-400">{"li"}</span>
            <span>{">"}</span>
            {e.name}
            <span>{"</"}</span>
            <span className="text-yellow-400">{"li"}</span>
            <span>{">"}</span>
          </p>
        ))}
      </div>
      <p className="text-yellow-400">
        <span className="text-green-700">
          <span className="text-blue-600 mr-12"></span>
          {"</"}
        </span>
        ul
        <span className="text-green-700">{">"}</span>
      </p>
      <p className="text-yellow-400">
        <span className="text-green-700">
          <span className="text-blue-600 mr-12"></span>
          {"</"}
        </span>
        div
        <span className="text-green-700">{">"}</span>
      </p>
      <p className="text-yellow-400">
        <span className="text-blue-600 mr-4"></span>
        <span className="text-fuchsia-700">export</span> default
        ProfessionalsExperience
      </p>
    </div>
  );
}

export default ProfessionalsExperience