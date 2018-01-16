import { css } from 'styled-components'

export const getUrlPath = data => typeof data === 'object' ? data.url : data

export const someProp = (data, props) =>
  data[props.find(prop => data[prop] !== null && data[prop] !== undefined)]

export const media = {
  mobile: (...args) => css`
    @media (max-width: 48em) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 48em) {
      ${css(...args)}
    }
  `
}
