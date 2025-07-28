const COMMANDS = ["wink", "double blink", "close your eyes", "jump"];
export function commands(n) {
  const result = COMMANDS.filter((_, i) => (1 << i) & n);
  return n & 16 ? result.reverse() : result;
}