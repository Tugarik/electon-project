import { useState } from "react";
import { useNavigate } from "react-router-dom";

const adminMenu = [
    {
      name: "Хянах самбар",
      url: "/",
      imageUrl: "../img/ds_dashboard.svg",
    },
    {
      name: "Бүтээгдэхүүнүүд",
      url: "products",
      imageUrl: "../img/ds_monitor.svg",
    },
    { name: "Захиалгууд", url: "orders", imageUrl: "../../../img/ds_orders.svg" },
    { name: "Хэрэглэгчид", url: "users", imageUrl: "../../../img/ds_users.svg" },
    {
      name: "Модератор",
      url: "moderator",
      imageUrl: "../img/ds_moderator.svg",
    },
    {
      name: "Тохиргоо",
      url: "settings",
      imageUrl: "../img/ds_settings.svg",
    },
  ];
  

export default function Aside() {
    const [current, setCurrent] = useState(0);
    const navigate = useNavigate();
    let menus = [];
    const role = 'admin';
    
    const Layout = ({ role }) => {
        role === "admin" ? (menus = [...adminMenu]) : (menus = [...adminMenu.slice(0,4)]);
    
        return (
          <div className="Aside">
            {menus &&
              menus.map((menu, index) => {
                return(
                    <button
                        key={index}
                        className={`menuBtn menuBtn-${current===index&&'active'}`}
                        onClick={(e) => {
                        e.preventDefault();
                        setCurrent(index);
                        navigate(menu.url);
                        }}
                    >
                        <img src={menu.imageUrl} alt="menulogo" />
                        <span> {menu.name}</span>
                    </button>

                )

              })
            }
          </div>
        );
      };
    
      return (
        <div className="D">
          <h4 className="py-4">Welcome, {role}!</h4>
          <Layout role={role} />
        </div>
      );
  };
  