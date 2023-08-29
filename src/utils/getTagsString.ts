import { ITag } from '../common-types/tagInterface';

const getTagsString = (tags: ITag[]) => {
  return tags.map((tag) => `#${tag.text}`).join(' ');
};

export { getTagsString };
