import { NavLinkModel } from "../ts/model";
import { NavLink } from "react-router-dom";

interface NavProps {
    navItems: NavLinkModel[];
}

const NavMenu = ({ navItems }: NavProps) => {
    return (
        <ul className="flex gap-[20px] text-[20px]">
            {navItems.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "nav-active" : "text-dark"
                        }
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavMenu;