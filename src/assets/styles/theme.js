import { darken, lighten } from 'polished';

const ALTERATION_POWER = 0.2;

const colors = {
  black: '#000000',
  white: '#fff',
  brandPrimary: '#8566AA',
  brandSecundary: '#8ec6c5',
  offWhite: '#f4f4f4',
  fontPrimary: '#333',
  border: '#d4d4d4',
  gray: '#A8A8A8',
};

Object.keys(colors).forEach(key => {
  colors[`${key}Darken`] = darken(ALTERATION_POWER, colors[key]);
  colors[`${key}Lighten`] = lighten(ALTERATION_POWER, colors[key]);
});

const typography = {
  fontSizeXSmall: '12px',
  fontSizeSmall: '14px',
  fontSizeNormal: '16px',
  fontSizeMedium: '18px',
  fontSizeLarge: '20px',
  fontSizeXLarge: '28px',
  fontWeightLight: 300,
  fontWeightNormal: 400,
  fontWeightBold: 700,
  fontSpacing: '0.3px',
  fontFamilyPrimary: '"Open Sans"',
  fontFamilyTitles: '"Montserrat"',
};

const layout = {
  borderRadius: '5px',
  boxShadow: '0 10px 10px 0 rgba(0, 0, 0, 0.16)',
};

const transforms = {
  transition: '150ms ease-in-out',
};

export const theme = {
  ...colors,
  ...typography,
  ...layout,
  ...transforms,
};
