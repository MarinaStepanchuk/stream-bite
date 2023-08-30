import { PostActions } from '../PostActions/PostActions';
import styles from './RecorderPreview.module.scss';
import { IRecorderPreview } from './types';

const RecorderPreview = ({ video, removeVideo, setOpen }: IRecorderPreview): JSX.Element => {
  return (
    <div className={styles.previewVideo}>
      <video playsInline autoPlay muted controls src={URL.createObjectURL(video)}></video>
      <PostActions video={video} removeVideo={removeVideo} setOpen={setOpen} />
    </div>
  );
};

export { RecorderPreview };
