import cn from 'classnames';
import styles from '@/styles/Header.module.css';

import { createRef } from 'react';

let navToggle: any = createRef(),
  addedEventListeners: Boolean = false;
let onClickNavLink = (e: any) => {
  if (addedEventListeners) {
    navToggle.checked = false;
    removeEventListeners();
  }

  const hash = e.target.hash;
  const target = document.getElementById(hash.substring(1));

  if (target) {
    e.preventDefault();
    //goto(e.target.hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  }
};

let navToggleToggle = () => {
  if (navToggle.checked) {
    addEventListeners();
  } else {
    removeEventListeners();
  }
};

const addEventListeners = () => {
  if (!addedEventListeners) {
    addedEventListeners = true;
    document.addEventListener('click', handleClick);
  }
};

const removeEventListeners = () => {
  addedEventListeners = false;
  document.removeEventListener('click', handleClick);
};

const handleClick = async (e: any) => {
  const target = e.target;

  var isHeader__nav = target.closest('#Header__nav');

  console.log(target, isHeader__nav);
  if (!isHeader__nav) {
    navToggle.checked = false;
    window.requestAnimationFrame(() => {
      removeEventListeners();
    });
  }
};

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className={cn(styles.Header__inner, 'siteWidth', 'siteSidePadding')}>
        <div className={styles.Header__logo}>Joel Drake</div>

        <input
          type="checkbox"
          id="navToggle"
          ref={navToggle}
          onChange={navToggleToggle}
          className={styles.Header__navButton}
          aria-label="Open navigation"
        />
        <label className={styles.Header__navToggle} htmlFor="navToggle">
          <img src="/images/menu.svg" className={styles.Header__navOpen} alt="Open navigation" />
          <img src="/images/close.svg" className={styles.Header__navClose} alt="Close navigation" />
        </label>

        <nav
          className={cn(styles.Header__nav, 'animateUnderline')}
          id="Header__nav"
          aria-haspopup="true"
        >
          <a href="#about" onClick={onClickNavLink}>
            About 🐲
          </a>
          <a href="#work" onClick={onClickNavLink}>
            Work 🛠
          </a>
          <a href="#contact" onClick={onClickNavLink}>
            Contact 📨
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
