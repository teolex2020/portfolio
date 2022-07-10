import React from 'react'
import Image from 'next/image';

const Footer = () => {
  return (
    <div
      style={{ justifyContent: "space-between" }}
      className="bg-gray-900 h-5 w-full fixed bottom-0 border-t-2 z-50 border-slate-600 px-10 flex "
    >
      <div className=" flex gap-5">
        <Image src="/gitbranch.svg" width={10} height={10} />
        <p className="text-slate-400 text-[12px]">main*</p>
        <p className="text-slate-400 text-[12px]">Scanning...</p>
        <p className="text-slate-400 text-[12px]">Git Graph</p>
        <p className="text-slate-400 text-[12px]">Quokka</p>
      </div>
      <div className=" flex gap-5">
        <p className="text-slate-400 text-[12px]">Ln 18, Col 61</p>
        <p className="text-slate-400 text-[12px]">Space:2</p>
        <p className="text-slate-400 text-[12px]">UTF-8</p>
        <p className="text-slate-400 text-[12px]">CRFL</p>
        <p className="text-slate-400 text-[12px]">JavaScript React</p>
      </div>
    </div>
  );
}

export default Footer