import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-[100px] m-10 shadow-lg border-gray-100 flex justify-center items-center">
      {children}
    </div>
  );
};

export default Card;
