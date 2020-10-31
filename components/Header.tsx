import cn from 'classnames';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createRef } from 'react';

const Header = () => {
  const router: any = useRouter();
  const navToggle: any = createRef();
  let addedEventListeners: Boolean = false;

  let onClickNavLink = (e: any) => {
    console.log('HEY', e.target.hash);
    if (addedEventListeners) {
      navToggle.checked = false;
      removeEventListeners();
    }

    const hash = e.target.hash;
    if (!hash) return;

    const target = document.getElementById(hash.substring(1));
    if (!target) return;

    e.preventDefault();
    router.push(hash);
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
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

  return (
    <header className={styles.Header}>
      <div className={cn(styles.Header__inner, 'siteWidth', 'siteSidePadding')}>
        <div className={styles.Header__logo + ' animateUnderline'}>
          <Link href="/">
            <a>Joel Drake</a>
          </Link>
        </div>
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
          <Link href="/#about">
            <a onClick={onClickNavLink}>About 🐲</a>
          </Link>
          <Link href="/#work">
            <a onClick={onClickNavLink}>Work 🛠</a>
          </Link>
          <Link href="/#contact">
            <a onClick={onClickNavLink}>Contact 📨</a>
          </Link>
          <Link href="/blog">
            <a onClick={onClickNavLink}>Blog 📝</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
