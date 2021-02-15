import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from '@/styles/Header.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Header = () => {
  const router: any = useRouter();
  const { route } = router;

  useEffect(() => {
    // runs on mount
    if (typeof window !== 'undefined') {
      const observer = new IntersectionObserver(callback);

      const target = document.querySelector('#header');
      if (target) observer.observe(target);
    }
  }, []);

  const callback = (entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        removeHashFromUrl();
      } else {
        const navToggle: any = document.getElementById('navToggle') || {};
        navToggle.checked = false;
      }
    });
  };

  const removeHashFromUrl = () => {
    const url = window.location.toString();
    if (url.indexOf('#') > 0) {
      const cleanUrl = url.substring(0, url.indexOf('#'));
      window.history.replaceState({}, document.title, cleanUrl);
    }
  };

  const onClickNavLink = (e: any) => {
    if (route != '/') return;
    const hash = e.target.hash;
    if (!hash) return;

    const target = document.getElementById(hash.substring(1));

    if (!target) return;

    e.preventDefault();
    window.scrollTo({
      top: target.offsetTop,
      behavior: 'smooth',
    });
  };

  const navLink = ({ href, label, emoji }: any) => {
    if (route === '/' && href != '/blog') {
      return (
        <a href={href} onClick={onClickNavLink}>
          {label}
          <div className={styles.Header__icon}>
            &nbsp;
            <span role="img" aria-label={label}>
              {emoji}
            </span>
          </div>
        </a>
      );
    } else {
      return (
        <Link href={href}>
          <a onClick={onClickNavLink}>
            {label}
            <div className={cx('Header__icon')}>
              &nbsp;
              <span role="img" aria-label={label}>
                {emoji}
              </span>
            </div>
          </a>
        </Link>
      );
    }
  };

  const isBlogPost = () => {
    return route === '/blog/[slug]';
  };

  const handleBackButton = (e: any) => {
    if (typeof window === 'undefined') return;
    if (!window.history.length) return;

    e.preventDefault();
    router.back();
  };

  return (
    <header className={cx('Header')} id="header">
      <div className={cx('Header__inner', 'siteWidth', 'siteSidePadding')}>
        <div className={cx('Header__logo', { animateUnderline: !isBlogPost() })}>
          {isBlogPost() ? (
            <Link href="/blog">
              <a className={cx('Header__backButton')} onClick={handleBackButton}>
                <img src="/images/arrow-left.svg" width="24" height="24" alt="Back" />
              </a>
            </Link>
          ) : (
            <Link href="/">
              <a className={cx('Header__homeButton')}>Joel Drake</a>
            </Link>
          )}
        </div>

        <input
          type="checkbox"
          id="navToggle"
          className={cx('Header__navButton')}
          aria-label="Open navigation"
        />

        <label
          className={cx('Header__navToggle', 'Header__navButtonPreventClickStop')}
          htmlFor="navToggle"
        >
          <img
            src="/images/menu.svg"
            width="24"
            height="24"
            className={cx('Header__navOpen', 'Header__navButtonPreventClickStop')}
            alt="Open navigation"
          />
          <img
            src="/images/close.svg"
            width="24"
            height="24"
            className={cx('Header__navClose', 'Header__navButtonPreventClickStop')}
            alt="Close navigation"
          />
        </label>

        <nav className={cx('Header__nav', 'animateUnderline')} id="Header__nav">
          {navLink({ href: '/#about', label: 'About', emoji: '🐲' })}
          {navLink({ href: '/#work', label: 'Work', emoji: '🛠' })}
          {navLink({ href: '/#contact', label: 'Contact', emoji: '📨' })}
          {navLink({ href: '/blog', label: 'Blog', emoji: '📝' })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
