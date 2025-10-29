"use client";

import Header from "@/components/header";

export default function Home() {
  return (
    <div className="content max-w-[860px] mx-auto min-h-screen">
      <div className="flex flex-col gap-16 px-8 py-24">
        <Header></Header>

        {/* Me */}
        <div className="flex flex-col justify-center py-16 sm:gap-6 sm:flex-row">
          <pre className="leading-none ">
            {`⠀⠀⠀⠀⠀⠀⠰⡊⣿⣷⣂⠄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⣀⣴⢶⠀⠀⠈⣉⣽⣯⠃⠀⠀⠀⠀⠀⠀⠀⠀
⢀⢴⡿⡷⠁⣠⠊⠉⠂⠀⠀⠙⠒⠒⠒⠒⠢⢀⠀⠀
⡜⣿⣿⣵⣶⡃⠀⠀⢀⡤⠂⠈⠉⠀⣀⡀⠀⠀⢆⠀
⠙⠾⠿⠃⢹⠀⠀⠀⠀⠀⠀⠀⠀⠈⠋⠀⡀⠀⡞⠀
⠀⠀⠀⠀⠘⢆⠀⠀⠀⠣⣀⠀⠀⠀⢀⡴⠵⠊⠀⠀
⠀⠀⠀⠀⠀⠀⠑⣆⡤⠤⢬⠙⠉⡽⠋⢐⡲⢲⠀⠀
⠀⠀⠀⠀⠀⢰⡓⠃⠷⠤⠴⠗⠈⠉⠈⠁⣀⢰⠃⠀
⠀⠀⠀⠀⠀⠀⠥⣆⠖⠒⠢⡀⠀⠀⠈⢏⠈⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⢗⣤⠁⠀⠀⠀⠀⠃⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠊⢢⣇⠀⠀⠀⣀⢐⠗⡲⡰⢢
⠀⠀⠀⠀⠀⠀⠀⠘⡆⠀⠉⠠⢏⡁⢸⢇⠄⢆⠔⡸
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⢤⣆⣂⡹⠸⣀⣃⡫⠞⠁`}
          </pre>
          <div className="flex flex-col gap-4 pt-8 italic">
            <div className="text-3xl text-outline">
              margyn <span className="text-sm">x marlen satriani</span>
            </div>
            <div className="font-sans text-sm ">eng & idn</div>
            <div className="text-sm ">programmer, music lover, and reader</div>
          </div>
        </div>

        {/* More */}
        <div className="grid gap-10 sm:grid-cols-2">
          {/* Projects */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Projects</h2>

            <div className="space-y-3">
              <div>
                <a
                  href=""
                  className="text-lg underline underline-offset-2 hover:text-yellow-200"
                >
                  Raedan
                </a>
                <div className="text-sm opacity-80">Oct &apos;25 - Present</div>
              </div>
            </div>
          </div>

          {/* Works */}
          <div className="flex flex-col gap-4 sm:items-end">
            <h2 className="text-xl font-bold">Works</h2>

            <div className="space-y-3">
              <div>
                <div className="text-lg">
                  Software Engineer Intern - Seven inc.
                </div>
                <div className="text-sm opacity-80">
                  Oct &apos;24 - Apr &apos;25
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Media */}
        <div className="flex gap-4 pt-8">
          <a
            href="https://github.com/Myrlyon"
            className="underline cursor-pointer underline-offset-2 hover:text-yellow-200"
          >
            Github
          </a>
          <a
            href="https://x.com/maeurion"
            className="underline cursor-pointer underline-offset-2 hover:text-yellow-200"
          >
            X or Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
