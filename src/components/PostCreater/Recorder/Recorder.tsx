/* eslint-disable react-hooks/exhaustive-deps */
import { RecorderPreview } from '../RecorderPreview/RecorderPreview';
import { CircleProgress } from '../../CircleProgress/CircleProgress';
import styles from './Recorder.module.scss';
import { useEffect, useRef, useState } from 'react';

const Recorder = ({
  setOpen,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [error, setError] = useState<null | string>(null);
  const [pause, setPause] = useState(true);
  const [video, setVideo] = useState<Blob | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [openPreview, setOpenPreview] = useState(false);
  const [startRecord, setStartRecord] = useState(false);
  const [recorder, setRecorder] = useState<MediaRecorder>();
  const [progress, setProgress] = useState(0);

  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: true,
      })
      .then((stream) => {
        videoRef!.current!.srcObject = stream;
        videoRef!.current!.onloadedmetadata = () => videoRef!.current!.play();
        const mediaRecorder = new MediaRecorder(stream);
        setRecorder(mediaRecorder);
        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks([event.data]);
          }
        };
      })
      .catch((e) => {
        setError(e);
      });
  };

  useEffect(() => {
    if (!openPreview) {
      startStream();
    }
  }, [openPreview]);

  useEffect(() => {
    if (recordedChunks.length > 0) {
      setOpenPreview(true);
      const blob = new Blob(recordedChunks, { type: 'video/mp4' });
      setVideo(blob);
    }
  }, [recordedChunks]);

  const handleStart = () => {
    if (recorder) {
      setVideo(null);
      recorder?.start();
      setStartRecord(true);
    }
  };

  const handleStop = () => {
    if (recorder) {
      recorder?.stop();
      setStartRecord(false);
    }
  };

  useEffect(() => {
    if (startRecord) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev === 100) {
            handleStop();
            setPause(true);
            clearInterval(interval);
            return 0;
          }
          return prev + 1;
        });
      }, 300);
      return () => {
        clearInterval(interval);
      };
    }
  }, [startRecord]);

  const handleChangeVideoState = () => {
    if (pause) {
      handleStart();
    } else {
      handleStop();
      setProgress(0);
    }
    setPause(!pause);
  };

  const removeVideo = () => {
    setOpenPreview(false);
  };

  return (
    <div className={styles.recorderContainer}>
      {!openPreview ? (
        <div className={styles.recorder}>
          <video className={styles.recorderVideo} playsInline muted autoPlay ref={videoRef}></video>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <div className={styles.controlButton}>
            <CircleProgress progress={progress} />
            <div className={styles.recordButton} onClick={handleChangeVideoState}>
              <div className={pause ? styles.startButton : styles.stopButton}></div>
            </div>
          </div>
        </div>
      ) : (
        <RecorderPreview video={video as Blob} setOpen={setOpen} removeVideo={removeVideo} />
      )}
    </div>
  );
};

export { Recorder };
