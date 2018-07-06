import { uid } from '../helpers/utils';

export class Suggestion {

  constructor(label) {
    this.label = label;
    this.key = uid();
  }
}
