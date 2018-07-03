import { uid } from '../utils';

export class Suggestion {

  constructor(label) {
    this.label = label;
    this.key = uid();
  }
}
