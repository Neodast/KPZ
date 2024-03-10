import { IMeat } from './IMeat';
import MeatQuality from './MeatQuality.enum';
import MeatType from './MeatType.enum';

class Meat implements IMeat {
  meatType: MeatType;
  meatQuality: MeatQuality;
  count: number;
  nutritionalValue: number;

  constructor(
    meatType: MeatType,
    meatQuality: MeatQuality,
    count: number,
    nutritionalValue: number
  ) {
    this.meatType = meatType;
    this.meatQuality = meatQuality;
    this.count = count;
    this.nutritionalValue = nutritionalValue;
  }
}

export default Meat;
