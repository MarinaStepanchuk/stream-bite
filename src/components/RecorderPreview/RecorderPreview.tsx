import Button from '../Button/Button';
import styles from './RecorderPreview.module.scss';
import { IRecorderPreview } from './types';

const RecorderPreview = ({ video, saveVideo, removeVideo }: IRecorderPreview): JSX.Element => {
  return (
    <div className={styles.previewVideo}>
      <video
        playsInline
        autoPlay
        muted
        controls
        src={URL.createObjectURL(video)}
        className={styles.previewVIdeo}
      ></video>
      <div className={styles.actions}>
        <Button content="SAVE" cb={saveVideo} />
        <Button content="CANCEL" cb={removeVideo} />
      </div>
    </div>
  );
};

export { RecorderPreview };
