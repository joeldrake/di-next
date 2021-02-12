/**
 * Use in async functions to wait
 * @param time miliseconds to sleep
 */
export default function sleep(time: number) {
  return new Promise((r: any) => setTimeout(() => r(), time));
}
