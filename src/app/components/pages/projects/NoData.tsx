"use client";

const NoData = () => {
  return (
    <div className="w-full flex justify-center">
      <div
        className="max-w-2xl w-full bg-linear-to-br from-black/20 to-black/10 rounded-2xl p-8 text-center"
        style={{
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,165,0,0.06)",
        }}
      >
        <div className="flex flex-col items-center gap-4">
       
          <h4 className="text-white text-xl font-bold">No Projects Found</h4>
         
        </div>
      </div>
    </div>
  );
};

export default NoData;
