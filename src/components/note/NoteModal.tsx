import { useForm } from "react-hook-form";
import Button from "../elements/Button";
import Modal from "../elements/Modal";
import Input from "../form/Input";
import Note from "./Note";
import { zodResolver } from "@hookform/resolvers/zod";
import { NoteSchema } from "../../schemas/NoteSchema";
import type { z } from "zod";
import ColorPicker from "../form/ColorPicker";
import { noteColors, type Color } from "../../constants/colors";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const NoteModal = ({ isOpen, setIsOpen }: Props) => {
  const { register, formState, handleSubmit, watch, setValue } = useForm({
    resolver: zodResolver(NoteSchema),
    defaultValues: { color: "green" },
  });

  const backgroundColor = noteColors[watch("color") ?? "green"];
  const onSubmit = (data: z.infer<typeof NoteSchema>) => console.log(data);
  const handleColorChange = (color: Color) => setValue("color", color);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Note heading="New note" hideOptions backgroundColor={backgroundColor}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3">
            <Input {...register("heading")} error={formState.errors.heading?.message} id="heading" label="Heading" />
            <Input {...register("content")} id="content" type="textarea" label="Content" />
            <ColorPicker selectedColor={watch("color")} onColorChange={handleColorChange} error={formState.errors.color?.message} />
            <Button type="submit" label="Save" />
          </div>
        </form>
      </Note>
    </Modal>
  );
};

export default NoteModal;
