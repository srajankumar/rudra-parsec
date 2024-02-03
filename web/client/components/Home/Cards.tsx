"use client";
import React from "react";

const CardData = [
  {
    id: 1,
    title: "Pots",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M11 5v3h2V5zM4.91 7.5L3.5 8.91l1.77 1.77l1.41-1.41zm14.18 0l-1.77 1.77l1.41 1.41l1.77-1.77zM4 12c0 2.86 1.5 5.5 4 6.93s5.5 1.43 8 0s4-4.07 4-6.93z"
        />
      </svg>
    ),
    content:
      "Collaborative Money Pots for Seamless and Shared Financial Goals.",
  },
  {
    id: 2,
    title: "Newsletter",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 16 16"
      >
        <path
          fill="currentColor"
          d="M3.5 5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM4 9V8h1v1zm3.5-2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2a2 2 0 0 1 2 2v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 10.5zm11.5 6.5a.5.5 0 0 1-.5-.5V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6.5A1.5 1.5 0 0 0 3.5 12h9a1.5 1.5 0 0 0 1.5-1.5V6a1 1 0 0 0-1-1v5a.5.5 0 0 1-.5.5"
        />
      </svg>
    ),
    content:
      "Stay informed on finance with our newsletter. Make smart decisions.",
  },
];

const Cards = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    e.currentTarget.style.background = `radial-gradient(circle at ${x}px ${y}px, #ffffff18, transparent)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.background = "#d1f2f900";
  };

  return (
    <div className="my-10">
      <div className="font-semibold text-5xl text-center mb-10">
        Our Services
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 max-w-7xl p-5">
        {CardData.map((card) => (
          <div key={card.id} className="relative w-80 h-64 overflow-hidden">
            <div className="absolute h-full inset-0 bg-gradient-to-br from-blue-500 via-[#f6cbc5] to-[#df8175] rounded-3xl p-1 z-5">
              <div className="bg-black w-full rounded-[1.25rem] h-full">
                <div
                  className="rounded-2xl flex flex-col justify-center items-center p-5 h-full"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center flex-col gap-1 mb-2">
                    {card.icon}
                    <div className="text-xl font-bold">{card.title}</div>
                  </div>
                  <div className="text-lg mb-3">{card.content}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
