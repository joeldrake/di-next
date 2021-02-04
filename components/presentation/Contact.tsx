import styles from '@/styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.Contact} id="contact">
      <div className={'siteWidth sectionPadding siteSidePadding invisibleSideScrolling'}>
        <h2>
          Contact{' '}
          <span role="img" aria-label="Contact">
            📨
          </span>
        </h2>
        <hr />
        <p>Send me an email or a message on social media if you want to get in touch with me.</p>

        <div className={styles.Contact__email + ' animateUnderline'}>
          <a href="mailto:joel@drakeinnovation.se">joel@drakeinnovation.se</a>
        </div>

        <div className={styles.Contact__socialMedia}>
          <a href="https://www.facebook.com/joel.blom">
            <img src="/images/facebook.svg" alt="facebook" />
          </a>
          <a href="https://www.instagram.com/joeldrak3/">
            <img src="/images/instagram.svg" alt="facebook" />
          </a>
          <a href="https://www.linkedin.com/in/joeldrake85/">
            <img src="/images/linkedin.svg" alt="facebook" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
