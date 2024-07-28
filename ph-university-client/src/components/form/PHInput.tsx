import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
};

const PHInput = ({ type, name, label }: TInputProps) => {
  return (
    <>
      <Controller // controller use for connection between antd and React_hook_form
        name={name}
        render={(
          { field } // here is field we can onChange, onBlur etc here
        ) => (
          <Form.Item label={label}>
            <Input {...field} type={type} name={name} />
          </Form.Item>
        )}
      />
    </>
  );
};

export default PHInput;
