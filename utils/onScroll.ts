import { debounce } from './debounce';

let callbacks: any = [];

const handleScroll = debounce((evt: any) => {
  callbacks.forEach((fn: any) => fn(evt));
}, 16);

function registerListener() {
  window.addEventListener('scroll', handleScroll, { passive: true });
}
function removeListener() {
  window.removeEventListener('scroll', handleScroll);
}

export default function onScroll(fn: any) {
  if (callbacks.length === 0) registerListener();

  callbacks.push(fn);

  return () => {
    callbacks = callbacks.filter((cb: any) => cb !== fn);
    if (callbacks.length === 0) removeListener();
  };
}
