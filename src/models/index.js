import { v1 } from 'uuid';

export class Suggestion {

  constructor(label) {
    this.label = label;
    this.key = v1();
  }
}
