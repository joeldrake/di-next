import styles from '@/styles/About.module.css';

const About = () => {
  return (
    <div className={styles.About} id="about">
      <div className="siteWidth sectionPadding siteSidePadding invisibleSideScrolling">
        <h2>About 🐲</h2>
        <hr />

        <p>
          Greetings,
          <br />I am a web developer focusing on web apps and user interfaces. I consider myself
          front end, because that is what I enjoy. But I have experience and knowledge of setting up
          full tech stacks.
        </p>
        <p>
          I have been building websites since I was young. Was part of a startup a few years back,
          and got some good experience working with <b>React.</b>
        </p>
        <p>
          Since 2019 I work with a team building a web app for a big retail company in Sweden. This
          project is in <b>Vue</b> which have been fun to learn more about. In personal projects I
          like to try new things out. Most recently I have been looking into <b>Typescript</b> and{' '}
          <b>Svelte.</b>
        </p>
        <p>
          With that said, my preferences for doing a front end web architecture is not bound to any
          specific framework or tool. I am versatile and can work in most settings. What I consider
          important is a <b>scalable system</b> (both in terms of code and design) that can grow in
          chunks, for a <b>fast and lightweight</b> delivery to the end user. <b>Accessibility</b>{' '}
          is something I always keep in mind.
        </p>
        <p>
          Read more about my work below, or get in touch with me to talk more about my view on what
          makes a good web experience.
        </p>
        <p>
          Best Regards,
          <br />
          Joel Drake
        </p>
      </div>
    </div>
  );
};

export default About;
