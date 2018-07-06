export class QueryTransformer {
  constructor(str) {
    this.prefix = '^';
    this.postfix = '.+';

    return this.transform(str);
  }

  transform(str) {
    return new RegExp(
      this.prefix +
      str.split(/\s+/)
      .map(s => '(?=.*\\b' + s + '\\b)')
      .join('') +
      this.postfix
    , 'ig')
  }
}


export function uid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
