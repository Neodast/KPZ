import IAnimal from './Animals/IAnimal';
import IAviary from './Aviaries/IAviary';
import IWorker from './Workers/IWorker';

class ZOO {
  public aviaries: Array<IAviary<any>>; // Em... You shouldn`t seen this...It`s a small mistake...
  public workers: IWorker[];
  public food: IFood[];

  constructor() {
    this.aviaries = [];
    this.workers = [];
    this.food = [];
  }

  addAviary<T extends IAnimal>(aviary: IAviary<T>): void {
    if (!aviary) {
      throw new Error('Aviry is not found!');
    }
    this.aviaries.push(aviary);
  }

  addWorker(worker: IWorker): void {
    this.workers.push(worker);
  }

  addFood(food: IFood) {
    this.food.push(food);
  }

  removeAviary(aviary: IAviary<IAnimal>) {
    this.aviaries = this.aviaries.filter((elem) => elem !== aviary);
  }

  removeWorker(worker: IWorker) {
    this.workers = this.workers.filter((elem) => elem !== worker);
  }

  removeFood(food: IFood) {
    this.food = this.food.filter((elem) => elem !== food);
  }
}

export default ZOO;
