export const toggleWindowBody = value => {
  if (value) {
    document.ontouchmove = function (e) {
      e.preventDefault();
    };
    return document.body.style.overflowY = 'hidden';
  }
  document.ontouchmove = function (e) {
    return true;
  };
  return document.body.style.overflowY = '';
};
