interface IRecorderPreview {
  video: Blob;
  saveVideo: () => void;
  removeVideo: () => void;
}

export { IRecorderPreview };
