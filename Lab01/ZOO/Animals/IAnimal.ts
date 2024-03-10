import AnimalSize from './AnimalSize.enum';

interface IAnimal {
  age: number;
  name: string;
  weight: number;
  size: AnimalSize;
  readonly isPredator: boolean;
  voice: () => string;
  eat: () => void;
}

export default IAnimal;