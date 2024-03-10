import AnimalSize from '../AnimalSize.enum';
import IMonkey from './IMonkey';

class Mandrill implements IMonkey {
  readonly isPredator: boolean = false;
  age: number;
  name: string;
  weight: number;
  size: AnimalSize = AnimalSize.Medium;
  constructor(age: number, name: string, weight: number) {
    this.age = age;
    this.name = name;
    this.weight = weight;
  }
  voice: () => string = () => 'Hello';

  eat: () => void = () => {};
}

export default Mandrill;
