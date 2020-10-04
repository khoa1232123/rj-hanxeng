import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <SubMenu key="movie" title={<Link to="/movie">Movie App</Link>}>
        <Menu.Item key="setting:1">
          <Link to="/favorite">Favorite</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="youtube" title={<Link to="/youtube">Youtube</Link>}>
        <Menu.Item key="youtube:1">
          <Link to="/uploadvideo">Upload Video</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

export default LeftMenu;
