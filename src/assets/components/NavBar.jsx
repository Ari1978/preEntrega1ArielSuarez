import React from "react";
import { Menu } from "antd";
import { AndroidFilled, AppleFilled, OpenAIFilled } from "@ant-design/icons";
import "./NavBar.css";

const NavBar = () => {
  const items = [
    {
      key: "and",
      label: "Android",
      icon: <AndroidFilled />,
      children: [
        { key: "1", label: "Motorola" },
        { key: "2", label: "Redmi" },
        { key: "3", label: "Xiaomi" },
        { key: "4", label: "Samsung" },
      ]
    },
    {
      key: "ipho",
      label: "Iphone",
      icon: <AppleFilled />,
      children: [
        { key: "1", label: "Iphone 16" },
        { key: "2", label: "Iphone 15" },
        { key: "3", label: "Iphone 14" },
        { key: "4", label: "Iphone 13" },
      ]
    },
    {
      key: "acces",
      label: "Accesorios",
      icon: <OpenAIFilled />,
      children: [
        { key: "1", label: "Fundas" },
        { key: "2", label: "Cargadores" },
      ]
    },
  ];

  return (
    <div className="navbar">
      <h1 className="navbar-titulo">Ecommerce Cell Store</h1>
      <Menu mode="horizontal" className="menu" items={items} />
    </div>
  );
};

export default NavBar;
