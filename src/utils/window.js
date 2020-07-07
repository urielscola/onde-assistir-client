import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const toggleWindowBody = value => {
  const target = document.querySelector('body');
  if (value) return disableBodyScroll(target);
  return enableBodyScroll(target);
};
