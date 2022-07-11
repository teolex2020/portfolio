import React from 'react'
import Image from 'next/image'

const Other = () => {
   const [open, setOpen] = React.useState(false);
   const timeClouse = () =>
     setTimeout(() => {
       setOpen(false);
     }, 0.500);
  return (
    <div
      className="w-full h-96"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => timeClouse()}>
        {open ? 
        <Image src="/think2.png" width={300} height={300} />:
        <Image src="/think1.png" width={300} height={300} />}
      </div>
    </div>
  );
}

export default Other