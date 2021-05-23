const SPACE = 8

export const theme = {
  get space() {
    return SPACE
  },
  breakpoints: {
    mobile: '768px',
    tablet: '992px',
    desktop: '1200px',
  },
  colors: {
    primary: '#AAA',
    secondary: '#4894d4',
    white: '#FFF',
    black: '#000',
    whiteGray: '#f7f7f7',
    warmGray: '#999',
    lightGray: '#CCC',
    davyGray: '#555',
    darkGrey: '#333',
  },
  spacing(...values: number[]) {
    return values.map((value) => `${value * this.space}px`).join(' ')
  },
}

export type Theme = typeof theme
