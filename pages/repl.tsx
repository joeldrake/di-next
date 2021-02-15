import Head from 'next/head';
import { useEffect } from 'react';

import styles from '@/styles/Repl.module.css';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Repl = () => {
  useEffect(() => {
    // runs on mount
    const textarea: any = document.getElementById('code');
    const iframe: any = document.getElementById('output');

    const srcdoc = `
      <!DOCTYPE html>
      <html>
        <head>
          <script type="module">
            function iframe_update(source) {
              document.body.innerHTML = source;

              // Select all scripts found in body and
              // execute them with import() to get scripts to work
              const scripts = document.body.querySelectorAll('script');
              if (scripts.length) {
                scripts.forEach((script) => {
                  const blob = new Blob([script.innerHTML], { type: 'text/javascript' });
                  const url = URL.createObjectURL(blob);
                  import(url);
                });
              }            
            }
            window.addEventListener(
              'message',
              (e) => {
                iframe_update(e.data);
              },
              false
            );
          <\/script>
        </head>
        <body></body>
      </html>
    `;

    const textareaStart = `<h1>Hello 👋</h1>
<p>I am a REPL</p>`;

    if (textarea) textarea.value = textareaStart;
    if (iframe) iframe.srcdoc = srcdoc;

    setTimeout(() => update(), 500);
  }, []);

  const update = () => {
    const textarea: any = document.getElementById('code');
    const iframe: any = document.getElementById('output');
    if (textarea && iframe) iframe.contentWindow.postMessage(textarea.value, '*');
  };

  return (
    <div className={cx('Repl')}>
      <textarea id="code" className={cx('Repl__textarea')} onInput={update} />

      <iframe title="output" className={cx('Repl__iframe')} id="output"></iframe>
    </div>
  );
};

export default Repl;
