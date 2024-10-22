import React from "react";

export default function Skills({ name, image, content }) {
  return (
    <>
      <div className="border-[1px] border-[#000033] p-3 w-[100%]">
        <div className="flex flex-col">
          <div className="flex items-center font-bold justify-between">
            <h1 className="text-[20px]">{name}</h1>
            <img className="h-8 w-8" src={image} alt="" />
          </div>
          <div className="mt-3">
            <p className="text-[16px]">{content}</p>
          </div>
        </div>
      </div>
    </>
  );
}
