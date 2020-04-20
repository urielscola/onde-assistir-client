export const toggleWindowBody = value => {
  if (value !== undefined) return document.body.style.overflowY === value;
  const isHidden = document.body.style.overflowY === 'hidden';
  return isHidden
    ? (document.body.style.overflowY = '')
    : (document.body.style.overflowY = 'hidden');
};
