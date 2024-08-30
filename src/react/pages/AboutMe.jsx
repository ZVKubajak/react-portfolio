import '../../css/css_pages/aboutMe.css';

export default function AboutMe() {
  return (
    <section id="aboutMe-section">
      <article>
        <h1>About Me</h1>
        <hr></hr>
        <p>
          Hello, my name is Zander, and I am a full steck web developer. I like to work on cars, experience new things, and program applications for myself to use everyday. I have experience in the following languages:
        </p>
        <ul>
          <li id="html-color">HTML</li>
          <li id="css-color">CSS</li>
          <li id="javascript-color">JavaScript</li>
          <li id="typescript-color">TypeScript</li>
          <li id="nodejs-color">NodeJS</li>
          <li id="react-color">React</li>
          <li id="postgresql-color">PostgreSQL</li>
        </ul>
      </article>
      <img src="https://placehold.co/300x300"></img>
    </section>
  );
}