export const toggleWindowBody = () => {
  const isHidden = document.body.style.overflowY === 'hidden';
  return isHidden
    ? (document.body.style.overflowY = '')
    : (document.body.style.overflowY = 'hidden');
};
