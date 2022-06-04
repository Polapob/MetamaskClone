import { MouseEventHandler } from "react";

interface Props {
  closeModal: MouseEventHandler;
}

const CloseIcon = ({ closeModal }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 absolute top-3 right-3"
      onClick={closeModal}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
export default CloseIcon;
