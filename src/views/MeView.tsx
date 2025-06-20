import rocket from "../assets/rocket.png";

export default function MeView() {
  return (
    <div className="p-8">
      <div
        className={`flex flex-col px-8 py-20 border-background-600 border-2 rounded-md bg-[url(/starry_sky.jpg)] bg-cover overflow-hidden`}
      >
        <img
          src={rocket}
          alt="Moon images"
          className="w-2  animate-[fly_45s_linear_infinite] "
        />
        <div className="max-w-[50%] z-20">
          <h2 className="text-3xl font-extrabold mb-8">
            Hi I'm Emilien Marquegnies 👋
          </h2>
          <p>
            I am a Fullstack software developper and competitor at Worldskills
            Belgium
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold mb-8 mt-8 hover:underline">
          <span className="text-accent-500">#</span> About me
        </h2>
        <p>
          I am a passionate software developer with a strong interest in
          technology and innovation. I enjoy working on challenging projects and
          constantly learning new skills. My goal is to create impactful
          solutions that make a difference in people's lives.
        </p>
      </div>
      <div>
        <h2 className="text-3xl font-extrabold mb-8 mt-8 hover:underline">
          <span className="text-accent-500">#</span> What is this website ?
        </h2>
        <p>
          This website is dedicated to my projects and achievements. It serves
          as a portfolio to showcase my work and share my experiences with the
          world. Here, you can find information about my skills, projects, and
          interests. I hope you find it informative and inspiring!
        </p>
      </div>

      {/* <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Me</h1>
        <p className="mt-4 text-lg">Welcome to my personal page!</p>
        <p className="mt-2 text-lg">
          Here you can find information about me and my projects.
        </p>
      </div> */}
    </div>
  );
}
