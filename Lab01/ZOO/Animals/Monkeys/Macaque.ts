import AnimalSize from '../AnimalSize.enum';
import IMonkey from './IMonkey';

class Macaque implements IMonkey {
  readonly isPredator: boolean = false;
  age: number;
  name: string;
  weight: number;
  size: AnimalSize = AnimalSize.Small;
  constructor(age: number, name: string, weight: number) {
    this.age = age;
    this.name = name;
    this.weight = weight;
  }
  voice: () => string = () => 'AaaAaaAaa';

  eat: () => void = () => {};
}

export default Macaque;
