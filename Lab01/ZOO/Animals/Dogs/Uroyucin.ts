import AnimalSize from '../AnimalSize.enum';
import IDog from './IDog';

class Uroyucin implements IDog {
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
  voice: () => string = () => 'Frrfrr';

  eat: () => void = () => {};
}

export default Uroyucin;
