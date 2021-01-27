import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from '@/styles/Header.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => {
  const router: any = useRouter();
  const [addedEventListeners, setAddedEventListeners] = useState(false);

  const onClickNavLink = (e: any) => {
    if (addedEventListeners) {
      removeEventListeners();
    }

    const navToggle: any = document.getElementById('navToggle') || {};
    navToggle.checked = false;

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

  const navToggleToggle = () => {
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const navToggle: any = document.getElementById('navToggle') || {};
        console.log('navToggle.checked', navToggle.checked);

        if (navToggle.checked) {
          addEventListeners();
        } else {
          removeEventListeners();
        }
      });
    });
  };

  const addEventListeners = () => {
    if (!addedEventListeners) {
      setAddedEventListeners(true);
      document.addEventListener('click', handleClick);
    }
  };

  const removeEventListeners = () => {
    setAddedEventListeners(false);
    document.removeEventListener('click', handleClick);
  };

  const handleClick = (e: any) => {
    const target = e.target;
    const navToggle: any = document.getElementById('navToggle') || {};

    const isHeader__nav = target.closest('#Header__nav');
    const isHeader__navToggle = target.classList.contains('Header__navButtonPreventClickStop');

    if (target === navToggle || isHeader__nav || isHeader__navToggle) return;

    navToggle.checked = false;
    removeEventListeners();
  };

  return (
    <header className={cx('Header')}>
      <div className={cx('Header__inner', 'siteWidth', 'siteSidePadding')}>
        <div className={cx('Header__logo', 'animateUnderline')}>
          <Link href="/">
            <a>Joel Drake</a>
          </Link>
        </div>

        <input
          type="checkbox"
          id="navToggle"
          onChange={navToggleToggle}
          className={cx('Header__navButton')}
          aria-label="Open navigation"
        />

        <label
          className={cx('Header__navToggle', 'Header__navButtonPreventClickStop')}
          htmlFor="navToggle"
        >
          <img
            src="/images/menu.svg"
            className={cx('Header__navOpen', 'Header__navButtonPreventClickStop')}
            alt="Open navigation"
          />
          <img
            src="/images/close.svg"
            className={cx('Header__navClose', 'Header__navButtonPreventClickStop')}
            alt="Close navigation"
          />
        </label>

        <nav className={cx('Header__nav', 'animateUnderline')} id="Header__nav">
          <Link href="/#about">
            <a onClick={onClickNavLink}>
              About
              <div className={styles.Header__icon}>
                &nbsp;
                <span role="img" aria-label="dragon">
                  🐲
                </span>
              </div>
            </a>
          </Link>
          <Link href="/#work">
            <a onClick={onClickNavLink}>
              Work
              <span className={styles.Header__icon}>
                &nbsp;
                <span role="img" aria-label="work">
                  🛠
                </span>
              </span>
            </a>
          </Link>
          <Link href="/#contact">
            <a onClick={onClickNavLink}>
              Contact
              <span className={styles.Header__icon}>
                &nbsp;
                <span role="img" aria-label="contact">
                  📨
                </span>
              </span>
            </a>
          </Link>
          <Link href="/blog">
            <a onClick={onClickNavLink}>
              Blog
              <span className={styles.Header__icon}>
                &nbsp;{' '}
                <span role="img" aria-label="blog">
                  📝
                </span>
              </span>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
