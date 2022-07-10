import React, { useContext } from "react";
import Image from "next/image";
import context from "../context/Context";

const Second = () => {
  const { activePage, active } = useContext(context);

  const img = (
    <Image
      src="/images.png"
      width={20}
      height={20}
      className="cursor-pointer "
    />
  );
  const img1 = (
    <Image src="/file.png" width={20} height={20} className="cursor-pointer " />
  );

  return (
    <div className="relative">
      {" "}
      <div className="h-full w-48  mm:w-80  bg-[#252526] absolute z-30 mm:relative">
        <div
          className="pt-[50px] px-5 "
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div>
            <p className="text-slate-300 text-[14px]">EXPLORER</p>
          </div>
          <div>
            <Image
              src="/dotsthree.svg"
              width={20}
              height={20}
              className="cursor-pointer "
            />
          </div>
        </div>

        {/* contact  */}
        <details open className="h-6 w-full  bg-[#333333] pl-2 text-slate-200">
          <summary>Portfolio</summary>
          <details className="flex items-center justify-center">
            <summary
              className="flex gap-3 pl-3 mm:pl-6 mt-3 "
              onClick={() => {
                activePage(0);
              }}
            >
              <div className="w-30 h-30">{active === 0 ? img1 : img}</div>

              <p className="cursor-pointer hover:text-green-400 ">Contact</p>
            </summary>
          </details>

          {/* professionals  */}
          <details className="flex items-center justify-center">
            <summary
              className="flex gap-3 pl-3 mm:pl-6 mt-3 "
              onClick={() => {
                activePage(1);
              }}
            >
              <div className="w-30 h-30">{active === 1 ? img1 : img}</div>

              <p className="cursor-pointer hover:text-green-400 ">
                Professionals experience
              </p>
            </summary>
          </details>

          {/* skills  */}
          <details className="flex items-center justify-center">
            <summary
              className="flex gap-3 pl-3 mm:pl-6 mt-3 "
              onClick={() => activePage(2)}
            >
              <div className="w-30 h-30">{active === 2 ? img1 : img}</div>
              <p className="cursor-pointer hover:text-green-400 ">Skills</p>
            </summary>
          </details>
          {/* other  */}
          <details className="flex items-center justify-center">
            <summary
              className="flex gap-3 pl-3 mm:pl-6 mt-3  "
              onClick={() => activePage(3)}
            >
              <div className="w-30 h-30">{active === 3 ? img1 : img}</div>
              <p className="cursor-pointer hover:text-green-400 ">
                Other information
              </p>
            </summary>
          </details>
        </details>
      </div>
    </div>
  );
};

export default Second;
