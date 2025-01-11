import { useModal } from "../../../../hooks/use-modal.ts";
import { ValidatableInput } from "../../../../components/inputs/validatable-input/validatable-input.tsx";
import { useForm } from "@tanstack/react-form";
import { Button } from "../../../../components/buttons";
import styles from './add-automaker-modal.module.scss'
import classNames from "classnames/bind";

interface AddTitleModalProps {
  onSubmit: ({
    automakerName,
    description,
  }: {
    automakerName: string;
    description: string;
  }) => void;
}

enum AddTitleFields {
  AUTOMAKER_NAME = "automakerName",
  DESCRIPTION = "description",
}

export interface AutomakerFieldsType {
  [AddTitleFields.AUTOMAKER_NAME]: string;
  [AddTitleFields.DESCRIPTION]: string;
}

const cn = classNames.bind(styles)

export const AddAutomakerModal = ({ onSubmit }: AddTitleModalProps) => {
  const { closeModal } = useModal();

  const form = useForm<AutomakerFieldsType>({
    onSubmit: async ({value}) => {
      onSubmit(value);
      closeModal();
    },
    defaultValues: {
      automakerName: "",
      description: "",
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Subscribe>
        <form.Field
          name={AddTitleFields.AUTOMAKER_NAME}
          validators={{
            onChange: ({ value }) =>
              !value ? "Поле обязательно для заполнения" : undefined,
          }}
          children={(field) => {
            return (
              <ValidatableInput
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                title="Автопроизводитель"
                errorMessage={field.state.meta.errors.join(", ") as string}
              />
            );
          }}
        />
        <form.Field
          name={AddTitleFields.DESCRIPTION}
          validators={{
            onChange: ({ value }) =>
              !value ? "Поле обязательно для заполнения" : undefined,
          }}
          children={(field) => {
            return (
              <ValidatableInput
                name={field.name}
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                title="Краткое описание"
                errorMessage={field.state.meta.errors[0] as string}
              />
            );
          }}
        />
      </form.Subscribe>
      <div className={cn('add-automaker-modal__footer')}>
        <Button label="Создать" primary />
      </div>
    </form>
  );
};
