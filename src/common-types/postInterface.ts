import { ITag } from './tagInterface';

interface ICreatePostData {
  video: Blob;
  tags: string[];
}

interface IPost {
  id: number;
  name: string;
  createdAt: Date;
  user: {
    id: number;
    name: string;
    email: string;
  };
  tags: ITag[];
}

export { IPost, ICreatePostData };
