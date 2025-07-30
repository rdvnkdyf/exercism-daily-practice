export const proverb = (...args) => {
  let proverb = ``;
  let options = {};
  const last = args[args.length - 1];
  if (typeof last === 'object') {
    options = last;
    args.pop();
  }
  const qualifier = options.qualifier ? `${options.qualifier} ${args[0]}` : args[0];
  args.map((arg, i) => i != args.length - 1 ? proverb += `For want of a ${arg} the ${args[i + 1]} was lost.\n` : proverb += `And all for the want of a ${qualifier}.`);
  return proverb;
}