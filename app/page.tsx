import Link from "next/link";

export default function Home() {
  return (
   <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/my-skills-bg.webp"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Hello, I'm 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              {" "}
               John Gill!
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block text-lg">
          Welcome to My Personal Portfolio!
I’m passionate about web development and full-stack software engineering. Dive in to explore my work, skills, and journey as a developer. Feel free to connect and learn more about me!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-6">
            <Link href="/my-skills" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
              My Skills
            </Link>
            <Link href="/my-projects" className="rounded-[20px] bg-blue-500 group relative hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
                My Projects
            </Link>
            <Link href="/contact-me" className="rounded-[20px] bg-blue-500 group relative hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
                Contact Me
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
          Learn More
        </Link>
        <Link href="/my-projects" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
          My Projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] bg-blue-500 hover:bg-blue-400 px-3 py-3 text-lg text-white max-w-[200px]">
          Contact Me
        </Link>
      </div>
   </main>
  );
}
