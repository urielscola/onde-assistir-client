export const toggleWindowBody = value => {
  if (value) {
    document.ontouchmove = function (e) {
      e.preventDefault();
    };

    const filters = document.querySelector('.filters');
    if (filters) {
      filters.ontouchmove = function () {
        return true;
      };
    }
    return document.body.style.overflowY = 'hidden';
  }
  document.ontouchmove = function () {
    return true;
  };
  return document.body.style.overflowY = '';
};
