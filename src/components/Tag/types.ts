type TagSize = 'S' | 'L';

interface ITagProps {
  text: string;
  size?: TagSize;
  handleRemoveTag: (text: string) => void;
}

export { ITagProps };
