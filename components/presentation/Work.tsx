import styles from '@/styles/Work.module.css';

const Work = () => {
  return (
    <div className={styles.Work} id="work">
      <div className={`siteWidth sectionPadding siteSidePadding invisibleSideScrolling`}>
        <h2>
          Work{' '}
          <span role="img" aria-label="Work">
            🛠
          </span>
        </h2>
        <hr />
        <div className={styles.Work__boxes + ' animateUnderline'}>
          <div className={styles.Work__box + ' invisibleSideScrolling'}>
            <h3>RetailOnly</h3>
            <p>Part of a team building a web app for a big retail company in Sweden.</p>
            <p>
              Working tightly together with business analysts and UI/UX experts to construct the
              product.
            </p>
            <p>
              <a href="https://retailonly.se">retailonly.se</a>
            </p>
            <div className={styles.Work__tags}>
              <div className={styles.Work__tag}>Vue</div>
              <div className={styles.Work__tag}>Svelte</div>
              <div className={styles.Work__tag}>Web components</div>
              <div className={styles.Work__tag}>GraphQL</div>
              <div className={styles.Work__tag}>GitLab</div>
              <div className={styles.Work__tag}>Jira</div>
            </div>
          </div>
          <div className={styles.Work__box + ' invisibleSideScrolling'}>
            <h3>Infoping</h3>
            <p>Tech startup created with ett.se in 2015.</p>
            <p>
              I designed and built the front end of the platform, which included a public website,
              an admin dashboard and a PWA.
            </p>
            <p>
              <a href="https://infoping.se">infoping.se</a>
            </p>
            <div className={styles.Work__tags}>
              <div className={styles.Work__tag}>React</div>
              <div className={styles.Work__tag}>Node.js</div>
              <div className={styles.Work__tag}>PHP</div>
              <div className={styles.Work__tag}>Linux</div>
              <div className={styles.Work__tag}>Github</div>
            </div>
          </div>
          <div className={styles.Work__box + ' invisibleSideScrolling'}>
            <h3>ett.se</h3>
            <p>
              We were a team of five people that worked together between 2008 and 2019, with
              collaboration solutions and digital communication. In 2011 we launched ett.se and
              started to focus more on the development of our own products and services.
            </p>
            <p>
              <a href="https://ett.se.se">ett.se</a>
            </p>
            <div className={styles.Work__tags}>
              <div className={styles.Work__tag}>React</div>
              <div className={styles.Work__tag}>Node.js</div>
              <div className={styles.Work__tag}>PHP</div>
              <div className={styles.Work__tag}>Windows Server</div>
              <div className={styles.Work__tag}>Linux</div>
            </div>
          </div>
          <div className={styles.Work__box + ' invisibleSideScrolling'}>
            <h3>OpenText</h3>
            <p>
              Technical Support for the email and collaboration system FirstClass, in Sweden and
              Scandinavia.
            </p>
            <div className={styles.Work__tags}>
              <div className={styles.Work__tag}>IT support</div>
              <div className={styles.Work__tag}>FirstClass</div>
              <div className={styles.Work__tag}>SMTP</div>
              <div className={styles.Work__tag}>Server maintenance</div>
            </div>
          </div>

          <div className={styles.Work__box + ' invisibleSideScrolling'}>
            <h3>Github</h3>
            <p>Visit my Github page for personal projects and code examples.</p>
            <p>You can find the source code for this website there.</p>
            <p>
              <a href="https://github.com/joeldrake">github.com/joeldrake</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
