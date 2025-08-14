import { useState } from "react";
import "./App.css";
import One from "./components/One.jsx";
import Two from "./components/Two.jsx";
import Three from "./components/Three.jsx";
import GradientBackground from "./components/GradientBackground.jsx";
import a1 from "../src/assets/SARKAR_JI/a5.jpg";

function App() {
  return (
    <>
      <div className="">
        <GradientBackground />
        <div className="relative z-10">
          <div className="bg-[whitesmoke] h-fit w-fit p-3 rounded-2xl">
            <div className="text-center text-2xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
              ❤️For SARKAAR PAK JI❤️
            </div>
          </div>
          <One />
          <Two />
          <p className="text-center text-3xl font-bold  text-gray-700">
            There is nikkah cermony of Muhammad Mahfooz Ul Haq JAMALI which will
            be held on{" "}
            <span className="underline underline-offset-4">
              14th of Rabiul Aval Sharif
            </span>
          </p>
          <p className="text-center">&</p>
          <p className="text-center font-bold text-gray-700">
            Marriage Cermony will be held on{" "}
            <span className="underline underline-offset-4">
              3rd October (Baraat)
            </span>{" "}
            &{" "}
            <span className="underline underline-offset-4">
              4rth October (Valima)
            </span>
          </p>

          <Three />
        </div>
      </div>
    </>
  );
}

export default App;
