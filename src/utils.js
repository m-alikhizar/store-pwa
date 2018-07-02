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
