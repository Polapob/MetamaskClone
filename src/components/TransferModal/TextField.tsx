import {
  memo,
} from "react";
import useCreateTextField from "../../hooks/TransferModal/useCreateTextField";

interface Props {
  title: string;
  handleDataChange: (title: string, data: string) => void;
  dataTitle: string;
  isPress: boolean;
}

const TextField = ({ title, handleDataChange, dataTitle, isPress }: Props) => {
  const [handleTextChange, text] = useCreateTextField(
    handleDataChange,
    dataTitle,
    isPress
  );
  return (
    <div className="w-full flex flex-col gap-y-2">
      <div className="font-bold text-[18px] select-none">{title}</div>
      <input
        className="border-2 focus:outline-none border-black p-2 w-full"
        onChange={handleTextChange}
        value={text}
      />
    </div>
  );
};
export default memo(TextField);
