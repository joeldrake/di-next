import cn from 'classnames';
import styles from '@/styles/Start.module.css';

let onClick = (e: any) => {
  const hash = '#about';
  const target = document.getElementById(hash.substring(1));

  if (target) {
    e.preventDefault();

    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
};

const Start = () => {
  return (
    <div className={styles.Start} id="start">
      <div
        className={cn(
          styles.Start__inner,
          'siteSidePadding',
          'fadeIn',
          'siteWidth',
          'invisibleSideScrolling'
        )}
      >
        <a href="#about" className={styles.Start__continueLink} onClick={onClick}>
          <h1 className={styles.Start__headline}>Front End Web Dev</h1>
          <img src="/images/downarrow.svg" alt="About" className={styles.Start__downArrow} />
        </a>
      </div>
    </div>
  );
};

export default Start;
