import MeatQuality from './MeatQuality.enum';
import MeatType from './MeatType.enum';

export interface IMeat extends IFood {
  meatType: MeatType;
  meatQuality: MeatQuality;
}
