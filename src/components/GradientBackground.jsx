// components/GradientBackground.jsx
import { useEffect, useState } from "react";

const GradientBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,105,180,0.25)_0%,transparent_30%),radial-gradient(circle_at_90%_30%,rgba(0,255,255,0.2)_0%,transparent_30%),radial-gradient(circle_at_50%_80%,rgba(186,85,211,0.25)_0%,transparent_40%)]" />

      {/* Floating Orbs */}
      <div className="absolute rounded-full blur-[40px] opacity-70 w-[300px] h-[300px] top-[10%] left-[10%] animate-[float_6s_ease-in-out_infinite] bg-gradient-to-br from-pink-500 to-cyan-400" />
      <div className="absolute rounded-full blur-[40px] opacity-70 w-[250px] h-[250px] top-[60%] right-[15%] animate-[float_6s_ease-in-out_infinite_2s] bg-gradient-to-br from-cyan-400 to-purple-500" />
      <div className="absolute rounded-full blur-[40px] opacity-70 w-[200px] h-[200px] bottom-[20%] left-[50%] animate-[float_6s_ease-in-out_infinite_4s] bg-gradient-to-br from-red-500 to-orange-400" />
    </div>
  );
};

export default GradientBackground; // Change to default export
