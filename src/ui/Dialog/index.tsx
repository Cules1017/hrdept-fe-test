import { Cross1Icon } from "@radix-ui/react-icons";
import { Dialog, Flex } from "@radix-ui/themes";
import React from "react";

type DialogCustomProps = {
  title: string;
  desc: string;
  open?: boolean;
  setOpen?: () => void;
  onSave?: () => void;
  style?: React.CSSProperties;
  minWidth?: string;
  buttonTrigger?: React.ReactNode;
  content?: React.ReactNode;
  btnOk?: React.ReactNode;
  btnCancel?: React.ReactNode;
};

const DialogCustom = ({
  title,
  minWidth,
  buttonTrigger,
  content,
  open,
  setOpen,
}: DialogCustomProps) => {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        {/* <Button>{title}</Button> */}
        {buttonTrigger}
      </Dialog.Trigger>
      <Dialog.Content
        className="shadow data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms]"
        minWidth={minWidth || "640px"}
      >
        {/* <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          {desc}
        </Dialog.Description> */}
        <div className="flex items-center justify-between">
          <Dialog.Title className="text-xl">{title}</Dialog.Title>
          <Dialog.Close className="text-gray-400 hover:text-gray-500 cursor-pointer">
            <Cross1Icon />
          </Dialog.Close>
        </div>
        {content}
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default DialogCustom;
