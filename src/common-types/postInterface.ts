import { ITag } from './tagInterface';

interface ICreatePostData {
  video: Blob;
  tags: string[];
}

interface IPost {
  id: number;
  name: string;
  createDate: Date;
  userName: string;
  userId: number;
  tags: ITag[];
}

export { IPost, ICreatePostData };
