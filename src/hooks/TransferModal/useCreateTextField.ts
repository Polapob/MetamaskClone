import { useState, ChangeEventHandler, ChangeEvent, useEffect } from "react";

const useCreateTextField = (
  handleDataChange: (title: string, data: string) => void,
  dataTitle: string,
  isPress: boolean
) => {
  const [text, setText] = useState<string>("");
  const handleTextChange: ChangeEventHandler = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
  };
  useEffect(() => {
    const timer = setTimeout(async () => {
      handleDataChange(dataTitle, text);
    }, 250);
    return () => {
      clearTimeout(timer);
    };
  }, [text, handleDataChange, dataTitle]);

  useEffect(() => {
    setText("");
  }, [isPress]);

  return [handleTextChange, text] as const;
};
export default useCreateTextField;
