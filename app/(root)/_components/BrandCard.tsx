import  { useRef, useEffect } from "react";

const BrandCard = ({ data, setRef }) => {
  const Icon = data.icon;
  const isLight = data.type === "light";
  return (
    <div
      ref={setRef}
      className={`absolute left-1/2 top-1/2 w-[320px] h-[450px] md:w-[380px] md:h-[540px] rounded-3xl overflow-hidden shadow-2xl flex flex-col ${data.brandColor} ${data.border || ""} ${data.border ? "border" : ""} transform-gpu`}
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* Decorative Card Header */}
      <div
        className={`p-6 flex items-center justify-between ${isLight ? "text-black" : "text-white"}`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2 rounded-xl ${isLight ? "bg-black/5" : "bg-white/10 backdrop-blur-md"}`}
          >
            <Icon
              size={24}
              className={
                isLight
                  ? "text-black"
                  : data.id === "c2"
                    ? "text-[#a3ff90]"
                    : "text-white"
              }
            />
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{data.name}</h3>
            <p className={`text-xs opacity-70 font-medium`}>{data.desc}</p>
          </div>
        </div>
      </div>

      {/* Card Content Mockup based on type */}
      <div className="flex-1 px-6 pb-6 flex flex-col gap-3 relative">
        {data.type === "ui" && (
          <>
            <div
              className={`w-full h-24 rounded-xl ${isLight ? "bg-black/5" : "bg-white/10"} mb-2`}
            />
            <div className="flex gap-3">
              <div
                className={`flex-1 h-32 rounded-xl ${isLight ? "bg-black/5" : "bg-white/10"}`}
              />
              <div
                className={`w-1/3 h-32 rounded-xl ${isLight ? "bg-black/5" : "bg-white/10"}`}
              />
            </div>
            <div
              className={`w-2/3 h-6 rounded-md ${isLight ? "bg-black/10" : "bg-white/20"} mt-auto`}
            />
          </>
        )}

        {data.type === "dark" && (
          <div className="flex-1 border border-white/10 rounded-xl bg-black/40 p-4 flex flex-col gap-4">
            <div className="flex justify-between items-end h-16 border-b border-white/10 pb-2">
              {[40, 70, 30, 90, 50, 80].map((h, i) => (
                <div
                  key={i}
                  className="w-3 rounded-t-sm bg-[#a3ff90]/80"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="w-full h-4 rounded bg-white/5" />
            <div className="w-3/4 h-4 rounded bg-white/5" />
          </div>
        )}

        {data.type === "gradient" && (
          <div className="flex-1 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 transform rotate-3 scale-105" />
            <div className="absolute inset-0 bg-black/10 rounded-xl backdrop-blur-md border border-white/20 transform -rotate-2" />
            <Icon size={80} className="text-white/50 z-10 drop-shadow-xl" />
          </div>
        )}

        {data.type === "light" && (
          <div className="flex-1 bg-white rounded-xl shadow-inner p-4 flex flex-col gap-3 border border-zinc-200">
            <div className="w-full h-10 bg-zinc-100 rounded-lg" />
            <div className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-zinc-200" />
              <div className="flex-1 h-8 bg-zinc-100 rounded-lg" />
            </div>
            <div className="w-full flex-1 bg-zinc-50 rounded-lg border border-zinc-100 mt-2" />
          </div>
        )}
      </div>

      {/* Dynamic shadow overlay for 3D depth (controlled by JS) */}
      <div
        className="shadow-overlay absolute inset-0 bg-black pointer-events-none transition-opacity duration-75"
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default BrandCard;
