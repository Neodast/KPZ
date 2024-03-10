import AnimalSize from '../AnimalSize.enum';
import IDog from './IDog';

class Fox implements IDog {
  readonly isPredator: boolean = true;
  age: number;
  name: string;
  weight: number;
  furColor: string;
  size: AnimalSize = AnimalSize.Medium;
  constructor(age: number, name: string, weight: number, furColor: string) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.furColor = furColor;
  }
  voice: () => string = () => 'Eeeieeei';

  eat: () => void = () => {};
}

export default Fox;
