import AnimalSize from '../AnimalSize.enum';
import ICat from './ICat';

class Tiger implements ICat {
  readonly isPredator: boolean = true;
  age: number;
  name: string;
  weight: number;
  furColor: string;
  size: AnimalSize = AnimalSize.Large;
  constructor(age: number, name: string, weight: number, furColor: string) {
    this.age = age;
    this.name = name;
    this.weight = weight;
    this.furColor = furColor;
  }
  voice: () => string = () => 'Raaf';

  eat: () => void = () => {};
}

export default Tiger;
