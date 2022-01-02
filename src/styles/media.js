import { css } from "styled-components";

const screenSizes = {
  large: 1170,
  desktop: 1024,
  tablet: 768,
  mobile: 414,
  mobileS: 320,
};

const media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
export default media;
