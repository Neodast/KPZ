import IAnimal from '../Animals/IAnimal';
import IWaterAnimal from '../Animals/WaterAnimals/IWaterAnimal';
import AviarySize from './AviarySize.enum';
import IAviary from './IAviary';

class LakeAviary<T extends IWaterAnimal> implements IAviary<T> {
  readonly size: AviarySize = AviarySize.Normal;
  capacity: number = this.size;
  animals: T[];

  constructor(){
    this.animals = [];
  }

  add(animal: T): string | void {
    if (this.capacity < animal.size) {
      return 'Aviary is full!';
    }
    this.animals.push(animal);
    this.capacity -= animal.size;
  }

  remove(animal: T): string | void {
    const index = this.animals.indexOf(animal);
    if (index === -1) {
      return 'Animal is not found!';
    }
    this.animals.splice(index, 1);
    this.capacity += animal.size;
  }

}

export default LakeAviary;
