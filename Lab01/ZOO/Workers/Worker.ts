import IWorker from './IWorker';
import Position from './Position.enum';

class Worker implements IWorker {
  name: string;
  age: number;
  position: Position;

  constructor(name: string, age: number, position: Position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

}

export default Worker;