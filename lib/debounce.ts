export function debounce(fn: any, waitMilliseconds = 300) {
  let timeoutId: any = null;
  return (...args: any) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), waitMilliseconds);
  };
}
