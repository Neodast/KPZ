import AnimalSize from '../AnimalSize.enum';
import ISnake from './ISnake';

class Boa implements ISnake {
  age: number;
  name: string;
  weight: number;
  readonly isPredator: boolean = true;
  readonly isVenomous: boolean = false;
  size: AnimalSize = AnimalSize.Small;

  constructor(age: number, name: string, weight: number) {
    this.age = age;
    this.name = name;
    this.weight = weight;
  }
  voice: () => string = () => 'SssSss';

  eat: () => void = () => {};
}

export default Boa;
