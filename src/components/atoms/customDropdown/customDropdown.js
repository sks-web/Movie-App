import { Dropdown, Button, Menu } from "antd";
const CustomDropdown = (props) => {
  const menuList = [...new Set(props.menu)];
  const menu = (
    <Menu onClick={props.onClickEvent}>
      <Menu.Item key="removeFilter">-Remove Filter-</Menu.Item>
      {menuList.map((language) => (
        <Menu.Item key={language.toLowerCase()}>{language}</Menu.Item>
      ))}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomCenter">
      <Button>Search By Language</Button>
    </Dropdown>
  );
};

export default CustomDropdown;
