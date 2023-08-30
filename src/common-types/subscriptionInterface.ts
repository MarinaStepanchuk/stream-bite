import { IUser } from './userInterface';

interface ISubscriber {
  id: number;
  subscriber: IUser;
}

interface ISubscriptionData {
  subscriptions: ISubscriber[];
  count: number;
}

export { ISubscriber, ISubscriptionData };
