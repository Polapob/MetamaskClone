import {memo} from "react";

interface Props {
  text: string;
  title: string;
}

const DisabledTextField = ({ text, title }: Props) => {
  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="font-bold text-[18px] select-none">{title}</div>
      <input
        disabled
        className="border-2 focus:outline-none border-black p-2 w-full bg-gray-400"
        value={text}
        style={{ caretColor: "rgba(0,0,0,0)" }}
      />
    </div>
  );
};
export default memo(DisabledTextField);
