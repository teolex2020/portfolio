import React from "react";
import Image from "next/image";

const maps = [
  "File",
  "Edit",
  "Selection",
  "View",
  "Go",
  "Run",
  "Terminal",
  "Help",
];

function Header() {


  return (
    <div className=" z-50 fixed bg-[#0f0e0e] w-full h-10 flex flex-col p-2 ">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: "14px",
        }}
      >
        <div className="flex gap-3">
          <div className="w-30 h-30 ">
            <Image src="/vscode.svg" width={30} height={30} />
          </div>
          <div>
            <ul className="hidden lg:flex gap-2 z-50">
              {maps.map((es, i) => {
                return (
                  <li
                    key={i}
                    className="text-slate-400 cursor-pointer  hover:text-slate-300 hover:bg-slate-500 hover:rounded px-1 z-50"
                  >
                    {es}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex gap-5  w-[500px] ">
          <p className="text-slate-400 text-[11px] lm:text-[14px] text-center">
            {" "}
            Oleksander Tepliuk - [Java Script, Next.js, MongoDB, CSS, SASS...]
          </p>
        </div>
        <div className="w-[200px] h-[8px] hidden sm:flex items-center justify-end  ">
          <div className="flex items-center justify-center cursor-pointer hover:bg-slate-500 w-12 h-8">
            <Image src="/minus.svg" width={20} height={20} />
          </div>
          <div className="hover:bg-slate-500 w-12 h-8 flex items-center justify-center">
            <div className="border-2 border-neutral-400 w-4 h-4 rounded cursor-pointer"></div>
          </div>

          <div className="flex items-center justify-center cursor-pointer hover:bg-red-600 w-12 h-8">
            <Image src="/delete.svg" width={20} height={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
