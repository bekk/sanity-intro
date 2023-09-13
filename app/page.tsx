import { AuthorSection } from "./components/author/AuthorSection";
import { ProjectSection } from "./components/projects/ProjectSection";

const Page = async () => {
  return (
    <main className="px-auto bg-gradient-to-b from-white to-blue-300">
      <AuthorSection />
      <ProjectSection />
    </main>
  );
};

export default Page;
