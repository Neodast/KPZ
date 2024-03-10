import IOrganicFeed from './IOrganicFeed';
import FeedType from './FeedType.enum';

class OrganicFeed implements IOrganicFeed {
  count: number;
  feedType: FeedType;
  nutritionalValue: number;
  constructor(count: number, feedType: FeedType, nutritionalValue: number) {
    this.count = count;
    this.feedType = feedType;
    this.nutritionalValue = nutritionalValue;
  }
}

export default OrganicFeed;
