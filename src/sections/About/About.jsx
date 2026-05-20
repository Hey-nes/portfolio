// Components
import Carousel from "components/Carousel/Carousel";

// Styles
import "sections/About/About.css";

function About() {
  return (
    <section id="about" className="about section">
      <h1 className="section-header">About me</h1>
      <p className="background">
        Educated as a Full-stack Developer by Nackademin, graduated summer of
        2025. The education focused mainly on building Full-stack applications,
        using JavaScript as our main programming language. We used frameworks
        and technologies such as React, Next.js and Node.js. On the database
        side we mainly took a NoSQL approach, writing most of our queries in
        MongoDB. During my internship at Ownit I mainly worked on developing
        backend services in Python and MySQL. I focused a bit more on automation
        and data collection, building small but powerful systems which automated
        repetative tasks, making everyday life easier for Ownits employees.
      </p>
      <p className="description">
        As a person I view challenges as opportunities, love to learn and develop new
        skills. I'm always obsessing about something, deconstructing it and
        learning everything I can about it. No challenge is too big or small,
        whether it involves programming, learning a new instrument, working on
        my motorcycle or even climbing a mountain. Spreading positivity and
        uplifting the people around me is my signature trait.
      </p>
      <Carousel />
    </section>
  );
}

export default About;
