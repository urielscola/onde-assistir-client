import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

const NotDesktop = ({ children }) => {
  const isNotDesktop = useMediaQuery({ maxWidth: 991 });
  return isNotDesktop ? children : null;
};

export default {
  Desktop,
  Tablet,
  Mobile,
  NotDesktop,
};
