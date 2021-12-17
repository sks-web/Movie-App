import { Input } from "antd";
const CustomInput = ({
  onInputChangeHandler,
  value,
  placeholder,
  ...restProps
}) => {
  return (
    <Input
      onChange={onInputChangeHandler}
      value={value}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

export default CustomInput;
