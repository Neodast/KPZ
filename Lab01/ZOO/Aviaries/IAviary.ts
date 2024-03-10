import IAnimal from '../Animals/IAnimal';
import AviarySize from './AviarySize.enum';

interface IAviary<IAnimal> {
  animals: IAnimal[];
  size: AviarySize;
  capacity: number;
  add: (animal: IAnimal) => string | void;
  remove: (animal: IAnimal) => string | void;
}

export default IAviary;
