import rocket from "../assets/rocket.png";

export default function MeView() {
  return (
    <>
      <div
        className={`absolute top-0 left-0 right-0 starry bg-cover bg-center w-full h-[700px] overflow-hidden`}
      >
        <img
          src={rocket}
          alt="Moon images"
          className="w-2  animate-[fly_45s_linear_infinite] "
        />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Me</h1>
        <p className="mt-4 text-lg">Welcome to my personal page!</p>
        <p className="mt-2 text-lg">
          Here you can find information about me and my projects.
        </p>
      </div>
    </>
  );
}
