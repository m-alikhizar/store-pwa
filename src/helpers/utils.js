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


export function sort(list, order, key) {

  if(order === 'ASC') {
    return list.sort(((a, b) => {
      if(a[key] < b[key]) return -1;
      if(a[key] > b[key]) return 1;
      return 0;
    }));
  } else if(order === 'DESC') {
    return list.sort(((a, b) => {
      if(a[key] > b[key]) return -1;
      if(a[key] < b[key]) return 1;
      return 0;
    }));
  } else {
    return list;
  }
}
