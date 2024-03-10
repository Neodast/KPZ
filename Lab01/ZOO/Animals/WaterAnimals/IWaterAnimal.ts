import IAnimal from '../IAnimal';

interface IWaterAnimal extends IAnimal {
  isCanSwim: boolean;
}

export default IWaterAnimal;