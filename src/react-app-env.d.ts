/// <reference types="react-scripts" />

declare module 'jss-global'

declare module "*.svg" {
  const content: any;
  export default content;
}
