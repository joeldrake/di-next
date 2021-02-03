import { debounce } from './debounce.ts';

let callbacks: any = [];

const onResize = debounce((evt: any) => {
  callbacks.forEach((fn: any) => fn(evt));
}, 50);

function registerListener() {
  window.addEventListener('resize', onResize, { passive: true });
}
function removeListener() {
  window.removeEventListener('resize', onResize, { passive: true });
}

export function onWindowResize(fn: any) {
  if (callbacks.length === 0) registerListener();

  callbacks.push(fn);

  return () => {
    callbacks = callbacks.filter((cb: any) => cb !== fn);
    if (callbacks.length === 0) removeListener();
  };
}
