import AnimalSize from '../AnimalSize.enum';
import ISnake from './ISnake';

class Cobra implements ISnake {
  age: number;
  name: string;
  weight: number;
  readonly isPredator: boolean = true;
  readonly isVenomous: boolean = true;
  size: AnimalSize = AnimalSize.Small;

  constructor(age: number, name: string, weight: number) {
    this.age = age;
    this.name = name;
    this.weight = weight;
  }
  voice: () => string = () => 'SssSss';

  eat: () => void = () => {};
}

export default Cobra;
