import React from "react";

export default function Projects({
  name,
  video,
  content,
  gitlink,
  demolink,
  videoPosition = "object-fill",
}) {
  return (
    <div className="border-[1px] p-3 w-full bg-slate-100">
      <div className="flex flex-col">
        <div className="w-full h-[300px] overflow-hidden rounded-lg">
          <video
            className={`w-full h-full ${videoPosition}`}
            src={video}
            autoPlay
            loop
            muted
          />
        </div>

        <h1 className="text-[20px] mt-3">{name}</h1>

        <p className="text-[16px] mt-2">{content}</p>

        <div className="flex items-center gap-3 mt-5">
          <a href={demolink} target="_blank" rel="noopener noreferrer">
            <button className="mt-8 px-6 py-2 border-2 border-[#000033] bg-[#000033] text-white hover:bg-white hover:text-[#000033] transition-all">
              Live Demo
            </button>
          </a>

          <a href={gitlink} target="_blank" rel="noopener noreferrer">
            <button className="mt-8 px-6 py-2 border-2 border-[#000033] bg-[#000033] text-white hover:bg-white hover:text-[#000033] transition-all">
              Github Link
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
