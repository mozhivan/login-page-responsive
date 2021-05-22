import { NoSubstitutionTemplateLiteral } from "typescript"

const SPACE = 8

export type Theme = {
  space: NoSubstitutionTemplateLiteral
  colors: Record<string, string>
  spacing: (...values: number[]) => string
}

export const theme = {
  get space() {
    return SPACE
  },
  colors: {
    primary: '',
    secondary: '',
    greyish: '#AAA',
    white: '#FFF',
    black: '#000',
    davyGray: '#555',
    darkGrey: '#333',
  },
  spacing(...values: number[]) {
    return values.map((value) => `${value * this.space}px`).join(', ')
  },
}