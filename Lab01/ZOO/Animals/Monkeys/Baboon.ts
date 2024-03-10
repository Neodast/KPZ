import AnimalSize from '../AnimalSize.enum';
import IMonkey from './IMonkey';

class Baboon implements IMonkey {
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
  voice: () => string = () => 'UaaUaaaUaaaa';

  eat: () => void = () => {};
}

export default Baboon;
