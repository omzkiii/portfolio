import Image from "next/image";

export default function Home() {
  return (

    <main className="flex-column flex-wrap bg-tokyonight-base00 text-tokyonight-base04">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <div class="gradients-container">
        <div class="g1"></div>
        <div class="g2"></div>
        <div class="g3"></div>
        <div class="g4"></div>
        <div class="g5"></div>

      </div>

      <div className="flex flex-wrap relative h-auto w-screen justify-evenly py-20 px-10">
        <div className="grid-rows-3 self-center">
          <h1 className="text-3xl p-5 ">Hi, my name is</h1>
          <h1 className="name text-7xl font-bold font-display">Geomar Santos</h1>
          <div className="flex flex-row justify-around">
            <dot className="d1 text-3xl text-tokyonight-base08 w-auto">⬤</dot>
            <dot className="d2 text-3xl text-tokyonight-base09 w-auto">⬤</dot>
            <dot className="d3 text-3xl text-tokyonight-base0A w-auto">⬤</dot>
            <dot className="d4 text-3xl text-tokyonight-base0B w-auto">⬤</dot>
            <dot className="d5 text-3xl text-tokyonight-base0C w-auto">⬤</dot>
            <dot className="d6 text-3xl text-tokyonight-base0D w-auto">⬤</dot>
            <dot className="d7 text-3xl text-tokyonight-base0E w-auto">⬤</dot>
            <dot className="d8 text-3xl text-tokyonight-base0F w-auto">⬤</dot>
          </div>
        </div>

        <div className="self-center justify-self-center size-auto">
          <img className="rick" src="./rick.png" />
        </div>
      </div>

      <div className="w-screen h-screen pl-20 pt-20 justify-center">
        <p className="text-5xl"> tech that I previously worked on </p>
        <p className="text-3xl">C Language</p>
        <img className="w-20" src="./c.svg" alt="" />
      </div>

      <div className="flex flex-col justify-center p-40">
        <p className="text-5xl p-20 self-center">Academic Background</p>
        <p className="text-3xl p-20">San Vicente Elementary School</p>
        <p className="text-3xl p-20">Sta. Catalina College</p>
        <p className="text-3xl p-20">Technological Institute of the Philippines</p>
      </div>

    </main >
  );
}
