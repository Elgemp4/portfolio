import { Outlet } from "react-router";
import NavigationLink from "../components/NavigationLink";

export default function BaseLayout() {
  return (
    <div className="bg-background-900 text-text-50 font-mono p-4">
      <header className="flex items-center justify-between p-4 text-text-50 relative z-10">
        <h1 className="text-2xl font-bold">
          emilien<span className="text-accent-500">_</span>marquegnies
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <NavigationLink to="/me" text="me" />
            <NavigationLink to="/projects" text="project" />
            <NavigationLink to="/experimentations" text="experimentations" />
            <NavigationLink to="/blog" text="blog" />
          </ul>
        </nav>
      </header>
      <main className="">
        <Outlet />
      </main>
      <footer className="flex items-center justify-center p-4  text-text-50 relative z-10">
        <p className="text-sm">
          © 2025 Emilien Marquegnies. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
