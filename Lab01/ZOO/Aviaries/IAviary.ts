import IAnimal from '../Animals/IAnimal';
import AviarySize from './AviarySize.enum';

interface IAviary<T extends IAnimal> {
  animals: T[];
  size: AviarySize;
  capacity: number;
  add: (animal: T) => string | void;
  remove: (animal: T) => string | void;
}

export default IAviary;
