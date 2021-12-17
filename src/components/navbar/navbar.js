import { Menu } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleActiveTab = (e) => {
    dispatch({ type: "CHANGE_TAB", tab: e.key });
  };
  return (
    <Menu
      onClick={handleActiveTab}
      selectedKeys={[useSelector((state) => state.navTab.currentTab)]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="/bookmark">
        <Link to="/bookmark">Bookmark</Link>
      </Menu.Item>
      <Menu.Item key="/watchLater">
        <Link to="/watchLater">Watch Later</Link>
      </Menu.Item>
      <Menu.Item key="/addMovie">
        <Link to="/addMovie">Add Movie</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
