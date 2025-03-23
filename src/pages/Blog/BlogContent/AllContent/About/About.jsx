import AboutHeader from "./AboutLayout/AboutHeader";
import AboutSection from "./AboutSection";
import EditorList from "./EditorList";
import NoteSection from "./NoteSection";
import "./About.scss"
import WriterList from "./WriterList";

function About() {
  return (
    <div className="medium-page">
      <AboutHeader />
      <div className="content">
        <AboutSection />
        <NoteSection />
        <EditorList />
        <WriterList />
      </div>
    </div>
  );
}

export default About;
