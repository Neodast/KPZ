import FeedType from './FeedType.enum';

interface IOrganicFeed extends IFood {
  feedType: FeedType;
}

export default IOrganicFeed;