import React from "react";

export default function Certificate({ logo, name, institution, bgColor }) {
  return (
    <div className="border-[1px] rounded-lg overflow-hidden shadow-lg w-full max-w-sm mx-auto">
      {/* Logo Section */}
      <div className={`flex items-center justify-center p-5 ${bgColor} h-40`}>
        <img
          src={logo}
          alt="Certificate Logo"
          className="max-h-20 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="bg-white p-6 text-center">
        <h1 className="text-[20px] text-[#000033] font-semibold">{name}</h1>
        <p className="text-[16px] mt-2 text-gray-500">{institution}</p>
      </div>
    </div>
  );
}
