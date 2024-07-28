import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: { value: string; label: string; disable?: boolean }[];
};

const PHSelect = ({ label, name, options }: TPHSelectProps) => (
  <Controller
    name={name}
    render={({ field, fieldState: { error } }) => (
      <Form.Item label={label}>
        <Select style={{ width: "100%" }} {...field} options={options} />
        {error && <p className="text-red-400 font-bold">{error?.message}</p>}
      </Form.Item>
    )}
  />
);

export default PHSelect;
