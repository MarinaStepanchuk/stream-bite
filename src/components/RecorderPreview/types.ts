interface IRecorderPreview {
  video: Blob;
  saveVideo: (video: Blob) => Promise<void>;
  removeVideo: () => void;
}

export { IRecorderPreview };
