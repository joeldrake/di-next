import styles from '@/styles/CV.module.css';

const CV = () => {
  return (
    <div className={styles.CV}>
      <h1 className={styles.CV__title}>CV</h1>
      <p className={styles.CV__info}>
        <strong>Joel Drake, 1985/05/20</strong>
        <br />
        Surbrunnsgatan 11, <span className={styles.CV__address_under}>114 27, Stockholm</span>
        <br />
        +46 (0) 70 692 32 25
        <br />
        joel@drakeinnovation.se
      </p>
      <img
        className={styles.CV__image}
        src={'/images/joel_squared_small.jpg'}
        alt={'Joel Drake'}
        width={'100px'}
        height={'100px'}
      />

      <h2 className={styles.CV__title_under}>Work in IT</h2>

      <p className={styles.CV__item_time}>2019 - ongoing</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Web Consultant, RetailOnly</strong>
        </div>
        Part of a team building a web app for ICA. Working tightly together with business analysts
        and UI/UX experts to construct the product.
      </p>

      <p className={styles.CV__item_time}>2015 - 2019</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Co-founder & Web developer, Infoping</strong>
        </div>
        Tech startup created with ett.se. I designed and built the front-end of the platform, which
        included a public website, an admin dashboard and a PWA.
      </p>

      <p className={styles.CV__item_time}>2011 - 2019</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Co-founder, ett.se</strong>
        </div>
        We were a team of five people that worked together between 2008 and 2019, with collaboration
        solutions and digital communication. In 2011 we launched ett.se and started to focus more on
        the development of our own products and services.
      </p>
      <p className={styles.CV__item_time}>2008 - 2011</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Tech support, OpenText</strong>
        </div>
        Technical Support for the email and collaboration system FirstClass, in Sweden and
        Scandinavia.
      </p>

      <h2 className={styles.CV__title_under}>Education</h2>

      <p className={styles.CV__item_time}>2013</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Copywriting, Evening class at Berghs School of Communication</strong>
        </div>
        Creativity and idea generation, Commercial Communication, The roles of an advertising
        writer, Project briefs, Language, Rhetoric.
      </p>

      <p className={styles.CV__item_time}>2012</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Graphic design, Evening class at Berghs School of Communication</strong>
        </div>
        Advertising, Photography, Print, Web Design, Illustration, Typography, Color, Layout.
      </p>

      <p className={styles.CV__item_time}>2005 - 2008</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Media and Communications Studies, Örebro University</strong>
        </div>
        Film Theory, Film Aesthetics, Media Analysis, Mass Media, Communication Theory, Television
        Studies, Science Theory, English.
      </p>
      <p className={styles.CV__item_time}>2001 - 2004</p>
      <p className={styles.CV__item_text}>
        <div className={styles.CV__item_text_headline}>
          <strong>Computer Science, Bruksgymnasiet Gimo</strong>
        </div>
        Programming, Local Networking, Operating Systems, Web Design, Web Server, Graphic
        Communications, Multimedia, Psychology.
      </p>

      <p className={styles.CV__footer}>
        <i>References available upon request.</i>
      </p>
    </div>
  );
};

export default CV;
