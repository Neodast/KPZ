import IAnimal from '../Animals/IAnimal';
import IAviary from '../Aviaries/IAviary';
import ZOO from '../ZOO';

class Inventory {
  public static getAviriesCount(zoo: ZOO) {
    return zoo.aviaries.length;
  }

  public static getWorkersCount(zoo: ZOO) {
    return zoo.workers.length;
  }

  public static getAnimalsCount<IAnimal>(aviary: IAviary<IAnimal>) {
    return aviary.animals.length;
  }

  public static getAnimals<T extends IAnimal>(aviary: IAviary<T>) {
    if (!aviary) {
      throw new Error('Aviary is not found!');
    }
    const animals = aviary.animals;
    const animalsWithoutFunctions: Array<Omit<IAnimal, "voice" | "eat">> = [];
    animals.forEach((animal) => {
      const { voice, eat, ...rest } = animal;
      animalsWithoutFunctions.push(rest);
    });
    return animalsWithoutFunctions;
  }

  public static getAviaries(zoo: ZOO) {
    if(!zoo.aviaries){
      throw new Error('Aviaries is not found!');
    }
    return zoo.aviaries;
  }

  public static getWorkers(zoo: ZOO){
    if(!zoo.workers){
      throw new Error('Workers is not found!');
    }
    return zoo.workers;
  }

  public static getFood(zoo: ZOO) {
    return zoo.food;
  }
}

export default Inventory;
