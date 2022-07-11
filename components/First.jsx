import React from 'react'
import Image from 'next/image';
import Link from "next/link"



const First = ({secondOC}) => {
  
  return (
    <div
      className="h-full w-12 mm:w-[65px] bg-[#333333]  pt-9 relative "
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      {/* First */}
      <div className="w-12 mm:w-16 h-96 ">
        <div
          onClick={() => secondOC()}
          className="p-3 cursor-pointer w-15 hover:bg-slate-600 hover:rounded px-1 flex justify-center relative"
        >
          <Image src="/copyfile.svg" width={30} height={30} />
          <div className="absolute w-2 h-2 rounded-full bg-green-600 right-2 bottom-2"></div>
        </div>
        <div className="p-3 cursor-pointer w-15 px-1 flex justify-center relative">
          <Image
            src="/search.svg"
            width={30}
            height={30}
            className="fill-white"
          />
        </div>
        <Link href="https://github.com/teolex2020/portfolio">
          <a>
            <div className="p-3 cursor-pointer w-15 hover:bg-slate-600 hover:rounded px-1 flex justify-center relative">
              <Image
                src="/github.svg"
                width={30}
                height={30}
                className="fill-white"
              />
              <div className="absolute w-2 h-2 rounded-full bg-green-600 right-2 bottom-2"></div>
            </div>
          </a>
        </Link>

        <div className="p-3 cursor-pointer w-15 flex justify-center">
          <Image
            src="/gitbranch.svg"
            width={30}
            height={30}
            className="fill-white"
          />
        </div>
        <div className="p-3 cursor-pointer w-15 flex justify-center">
          <Image
            src="/modules.svg"
            width={30}
            height={30}
            className="fill-white"
          />
        </div>
        <div className="p-3 cursor-pointer w-15 flex justify-center">
          <Image
            src="/docker.svg"
            width={30}
            height={30}
            className="fill-white"
          />
        </div>
      </div>
      <div className="w-12 mm:w-16 h-32">
        <div className="p-3 cursor-pointer w-15 px-1 flex justify-center">
          <Image src="/account.svg" width={30} height={30} />
        </div>
        <div className="p-3 cursor-pointer w-15 px-1 flex justify-center">
          <Image src="/configuration.svg" width={30} height={30} />
        </div>
      </div>
    </div>
  );
}

export default First