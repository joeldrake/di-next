import { debounce } from './debounce';

let callbacks: any = [];

const onResize = debounce((evt: any) => {
  callbacks.forEach((fn: any) => fn(evt));
}, 50);

function registerListener() {
  window.addEventListener('resize', onResize);
}
function removeListener() {
  window.removeEventListener('resize', onResize);
}

export function onWindowResize(fn: any) {
  if (callbacks.length === 0) registerListener();

  callbacks.push(fn);

  return () => {
    callbacks = callbacks.filter((cb: any) => cb !== fn);
    if (callbacks.length === 0) removeListener();
  };
}
