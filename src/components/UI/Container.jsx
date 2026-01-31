import React from "react";

export const Container = ({ paragrad, title }) => {
  return (
    <div className="bg-blue-300 rounded-bl-4xl p-4 h-2/3 flex flex-col gap-1 md:w-2/3 shadow-lg shadow-black/30">
      <h3 className="text-amber-500 font-bold ">{title}</h3>
      <p className="text-white ">{paragrad}</p>
    </div>
  );
};
