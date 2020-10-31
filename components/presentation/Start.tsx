import { createRef } from 'react';

let navToggle: any = createRef(),
  addedEventListeners = false;
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

let navToggleToggle = (e: any) => {
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

const handleClick = async (e) => {
  const target = e.target;
  var isHeader__nav = target.closest('.Header__nav');
  if (!isHeader__nav) {
    navToggle.checked = false;
    window.requestAnimationFrame(() => {
      removeEventListeners();
    });
  }
};

const Start = () => {
  return (
    <div className={'Start'}>
      <div className="Start__inner siteWidth siteSidePadding">
        <div className="Start__logo">Joel Drake</div>

        <input
          type="checkbox"
          id="navToggle"
          ref={navToggle}
          onChange={navToggleToggle}
          className="Start__nav-button"
          aria-label="Open navigation"
        />
        <label className="Start__nav-toggle" htmlFor="navToggle">
          <img src="/img/menu.svg" className="Start__nav-open" alt="Open navigation" />
          <img src="/img/close.svg" className="Start__nav-close" alt="Close navigation" />
        </label>

        <nav className="Start__nav animateUnderline" aria-haspopup="true">
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
    </div>
  );
};

export default Start;
