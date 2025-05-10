import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import MeView from "../views/MeView";
import ProjectsView from "../views/ProjectsView";
import ExperimentationsView from "../views/ExperimentationsView";
import BlogView from "../views/BlogView";
import BaseLayout from "../layouts/BaseLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Navigate to="/me" />} />
          <Route path="/me" element={<MeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/experimentations" element={<ExperimentationsView />} />
          <Route path="/blog" element={<BlogView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
