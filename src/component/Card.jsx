import React from "react";
import image from "../component/image.png";

function Card() {
  const cards = [...Array(8)];

  return (
    <>
      <div className="w-full bg-[#F4F6FF] py-12 overflow-hidden">
        {/* HEADER */}
        <div className="max-w-screen-xl mx-auto px-4 mb-12 text-center">
          <h2 className="abc font-bold text-[32px] mb-4">
            What Our Customers Say
          </h2>
          <p className="abc text-[18px] max-w-[800px] mx-auto">
            See how businesses are saving time, managing billing faster, and
            growing with our software through real customer feedback.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="relative mb-8">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {cards.map((_, i) => (
              <div
                key={`row1-${i}`}
                className="min-w-[360px] h-[233px] bg-white p-6 border border-gray-300 rounded-lg flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.065 9.375c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.948z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm abc text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt.
                </p>

                <div className="flex items-center gap-3">
                  <img src={image} className="w-14 h-14 rounded-full" />
                  <p className="font-semibold abc">
                    Kathryn Murphy <br />
                    <span className="text-gray-600 text-sm">McDonald's</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        <div className="relative">
          <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused]">
            {cards.map((_, i) => (
              <div
                key={`row2-${i}`}
                className="min-w-[360px] h-[233px] bg-white p-6 border border-gray-300 rounded-lg flex flex-col justify-between"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.948a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.538 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.538-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.065 9.375c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.948z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm abc text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt.
                </p>

                <div className="flex items-center gap-3">
                  <img src={image} className="w-14 h-14 rounded-full" />
                  <p className="font-semibold abc">
                    Kathryn Murphy <br />
                    <span className="text-gray-600 text-sm">McDonald's</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Card;
