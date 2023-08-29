interface IRecorderPreview {
  video: Blob;
  removeVideo: () => void;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export { IRecorderPreview };
