export const hashtags = (text) => {
  return  text.match(/#[a-z]+/gi);
}
