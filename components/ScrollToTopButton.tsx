import { useEffect, useState } from 'react';
import onScroll from '@/utils/onScroll';

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  useEffect(() => {
    // runs on mount
    let removeOnScroll: any;
    if (typeof window !== 'undefined') {
      removeOnScroll = onScroll(handleScroll);
    }

    return () => {
      if (removeOnScroll) removeOnScroll();
    };
  }, []);

  const handleUpButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    const currentTarget = e.currentTarget;
    if (currentTarget) currentTarget.blur();
  };
  const modifiers = () => {
    return showButton ? ' ScrollToTopButton--showButton' : '';
  };

  return (
    <>
      <div className={'ScrollToTopButton' + modifiers()}>
        <div className={'ScrollToTopButton__inner siteWidth'}>
          <a
            href="#"
            className={'ScrollToTopButton__link'}
            onClick={handleUpButton}
            tabIndex={showButton ? 0 : -1}
            aria-hidden={!showButton}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        .ScrollToTopButton {
          position: fixed;
          width: 100%;
          right: 0;
          bottom: 0;
          z-index: 100;
          transform: translateY(2rem);
          opacity: 0;
          transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
          pointer-events: none;
        }

        .ScrollToTopButton--showButton {
          transform: translateY(0);
          opacity: 1;
        }

        .ScrollToTopButton__inner {
          position: relative;
        }
        .ScrollToTopButton__link {
          position: absolute;
          right: 1rem;
          bottom: 1rem;
          width: 3rem;
          height: 3rem;
          border-radius: 100%;
          display: block;
          color: var(--color-text-primary);

          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ScrollToTopButton--showButton .ScrollToTopButton__link {
          pointer-events: all;
        }

        .ScrollToTopButton__link:hover,
        .ScrollToTopButton__link:active,
        .ScrollToTopButton__link:focus {
          outline: 0;
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default ScrollToTopButton;
