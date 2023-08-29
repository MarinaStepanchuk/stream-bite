/* eslint-disable react-hooks/exhaustive-deps */
import Button from '../../Button/Button';
import styles from './PostActions.module.scss';
import { PostTagSection } from '../PostTagSection/PostTagSection';
import { useEffect, useState } from 'react';
import { ICreatePostData, ICustomError } from '../../../common-types';
import { useCreatePostMutation } from '../../../redux/services/postsApi';

const PostActions = ({
  video,
  removeVideo,
  setOpen,
}: {
  video: Blob;
  removeVideo: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [tags, setTags] = useState<string[]>([]);

  const savePost = async ({ video, tags }: ICreatePostData) => {
    await createPost({ video, tags });
  };

  const handleAddTag = (text: string) => {
    if (!tags.includes(text)) {
      setTags([...tags, text]);
    }
  };

  const handleRemoveTag = (text: string) => {
    setTags(tags.filter((tag) => tag !== text));
  };

  const [createPost, { error: createPostError, data: createPostData }] = useCreatePostMutation();

  useEffect(() => {
    if (createPostError) {
      alert((createPostError as ICustomError).data.message);
    }

    if (createPostData) {
      setOpen(false);
    }
  }, [createPostError, createPostData]);

  return (
    <>
      <PostTagSection handleAddTag={handleAddTag} tags={tags} handleRemoveTag={handleRemoveTag} />
      <div className={styles.actions}>
        <Button content="SAVE" cb={async () => await savePost({ video, tags })} />
        <Button content="CANCEL" cb={removeVideo} />
      </div>
    </>
  );
};

export { PostActions };
