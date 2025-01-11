import React from "react";

const Testi = ({ quote, name, position, img }) => {
  return (
    <article className="bg-dark-blue-testimonials w-full max-w-[360px] rounded-md p-5 lg:p-8 flex flex-col items-start justify-center gap-4">
      <p className="text-sm lg:text-base text-gray-300">{quote}</p>
      <div className="flex items-center gap-2">
        <img className="rounded-full w-fit max-w-[30px]" src={img} alt={name} />
        <span>
          <p className="text-sm lg:text-base font-semibold">{name}</p>
          <p className="text-[10px] lg:text-xs text-gray-400">{position}</p>
        </span>
      </div>
    </article>
  );
};

export default Testi;
