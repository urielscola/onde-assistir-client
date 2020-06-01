export const toggleWindowBody = value => {
  if (value) return document.body.style.overflowY = 'hidden';
  return document.body.style.overflowY = '';
};
