import React from "react";

const Desc = ({ img, title, description }) => {
  return (
    <article className="flex flex-col gap-4 items-center justify-between ">
      <img
        className="w-[60px] lg:w-[80px] h-[100px] object-contain"
        src={img}
        alt={title}
      />
      <p className="font-semibold text-[1.2rem] md:text-2xl">{title}</p>
      <p className="text-sm sm:text-base text-center max-w-[340px] text-gray-200">
        {description}
      </p>
    </article>
  );
};

export default Desc;
