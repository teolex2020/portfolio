import React, { useContext } from "react";
import Image from "next/image";
import Second from "./Second";
import Contact from "./Contact.jsx";
import First from "./First";
import Skills from "./Skills";
import ProfessionalsExperience from "./ProfessionalsExperience";
import Other from "./Other";
import context from "../context/Context";
import FormMessage from "./FormMessage";

const Main = () => {
  const [open, setClose] = React.useState(false);

  const { active, setActive } = useContext(context);

  const secondOC = () => {
    setClose(!open);
  };

  return (
    <div className="h-full w-full flex">
      <First secondOC={secondOC} />
      {open ? <Second /> : ""}

      {/* Third  */}
      <div className="h-full w-full bg-[#1e1e1e]  pt-9 relative ">
        <div className="relative flex">
          <div className=" bg-[#2c2c2e] w-40 h-10 shadow-1xl z-20 p-2 flex gap-2 justify-center items-center">
            <Image src="/jsx.svg" width={20} height={20} />
            <p className="text-green-400 ">Index.jsx </p>
            <Image
              src="/delete.svg"
              width={20}
              height={17}
              className="cursor-pointer"
            />
          </div>
          <div className="bg-[#0f0e0e] w-full h-10 flex justify-end pr-4 items-center">
            <div className=" h-7 w-8 flex items-center justify-center hover:bg-slate-700 hover:rounded px-1">
              <Image
                src="/run.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className=" h-7 w-8 flex items-center justify-center  hover:bg-slate-700 hover:rounded px-1">
              <Image
                src="/git.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <div className=" h-7 w-8 flex items-center justify-center  hover:bg-slate-700 hover:rounded px-1">
              <Image
                src="/dotsthree.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className=" bg-[#2c2c2e] w-full h-6 shadow-lg shadow-cyan-500/50 ">
          <p className="ml-4 text-slate-400">
            Portfolio &#62; Oleksander Tepliuk
          </p>

          {/* contact  */}
          <div className="w-full h-full flex p-2 md:p-6">
            {active === 0 ? <Contact /> : ""}
            {active === 1 ? <ProfessionalsExperience /> : ""}
            {active === 2 ? <Skills /> : ""}
            {active === 3 ? <Other /> : ""}
          </div>
        </div>
        <div className="w-full h-1/5 bg-[#1e1e1e] border-t-2 border-slate-600 absolute bottom-0 flex  px-4 flex-col pr-16">
          <div style={{ justifyContent: "space-between" }} className="flex">
            <div className="flex gap-3 mm:gap-5  text-[14px] text-slate-400 my-2 ">
              <p>TERMINAL</p>
              <p className="hidden  mm:block">GITLENS</p>
              <p className="hidden sm:block">DEBUG CONSOLE</p>
              <p className="hidden lm:block">PROBLEM</p>
              <p className="hidden md:block">OUTPUT</p>
            </div>
            <div className="h-50 w-50 flex gap-2 ">
              <Image src="/plus.svg" width={27} height={27} />
              <Image src="/down.svg" width={15} height={20} />
              <Image src="/up.svg" width={15} height={20} />
              <Image src="/delete.svg" width={20} height={20} />
            </div>
          </div>
          <div className="pt-1">
            <p className="text-slate-400">
              <span className="text-fuchsia-700">event</span> - compiled
              successfully in 81 ms (174 modules){" "}
            </p>
            <p className="text-slate-400">
              <span className="text-blue-500">wait</span> - compiling...{" "}
            </p>
          </div>

          {/* <FormMessage /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
