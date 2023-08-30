type AvatarSize = 'S' | 'M' | 'L';

interface IAvatarProps {
  userId: number;
  avatarUrl?: string;
  size?: AvatarSize;
}

export { IAvatarProps };
