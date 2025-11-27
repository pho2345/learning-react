import React from "react";

const NavbarItem = ({ icon, title }:  {title: string, icon: React.ReactNode }) => {
    return (
        <div className="navbar-item">
            {icon}
            <span>{title}</span>
        </div>
    );
}

export default NavbarItem;