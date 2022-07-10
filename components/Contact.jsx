import React from 'react'
import Image from 'next/image';

const Contact = () => {

 const maps = [
   { number: 5, name: "teolex2017@gmail.com" },
   { number: 6, name: "+3(8098)456-84-41" },
   { number: 7, name: "https://github.com/teolex2020" },
   { number: 8, name: "Ukraine" },
 ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
      }}
    >
      <div className="w-full h-full text-[12px] mm:text-[16px] md:text-[28px] m-0 p-0 ">
        <p className="text-fuchsia-700 ">
          <span className="text-slate-400 mr-4">1</span>import{" "}
          <span className="text-red-700">React</span> from{" "}
          <span className="text-green-700">'react'</span>
        </p>
        <p className="text-fuchsia-700">
          <span className="text-slate-400 mr-4">2</span>
          const <span className="text-blue-400">{"Contact"}</span> ={" "}
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
        <p className="text-red-700">
          {" "}
          <span className="text-slate-400 mr-12">9</span>
          <span className="text-green-700">{"</"}</span>div
          <span className="text-green-700">{">"}</span>
        </p>
        <p className="text-red-700">
          <span className="text-slate-400 mr-4">10</span>
          <span className="text-fuchsia-700">export</span> default Contact
        </p>
      </div>
      <div className="w-28 h-32">
        <Image src="/code.png" width={100} height={100} />
      </div>
    </div>
  );
}

export default Contact