import React, { useState } from "react";
import { navLinks } from "../../helpers/constants/constant";
import NavMenu from "../../helpers/components/NavMenu";
import { NavLink } from "react-router-dom";
import NavbarSearchMenu from "../../helpers/components/NavbarSearchMenu";
import Container from "../../../app/modules/ui/Container";
import { Menu, X } from "lucide-react";
import { NavLinkModel } from "../../helpers/ts/model";


interface MobileNavMenuProps {
    navItems: NavLinkModel[];
    onItemClick: () => void;
}

interface MobileNavbarSearchMenuProps {
    onItemClick: () => void;
}

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    const toggleMobileMenu = (): void => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="w-full shadow-sm">
            <Container>
                <nav className="h-[60px] flex items-center">
                    <div className="w-full flex justify-between items-center">
                        <NavLink to={`/home`} className="text-[24px] font-semibold">Company Name</NavLink>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center">
                            <ul className="flex items-center gap-10">
                                <NavMenu navItems={navLinks} />
                                <NavbarSearchMenu />
                            </ul>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="block md:hidden text-dark"
                            onClick={toggleMobileMenu}
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden w-full bg-white py-4 border-t">
                        <div className="flex flex-col gap-6">
                            <MobileNavMenu
                                navItems={navLinks}
                                onItemClick={() => setMobileMenuOpen(false)}
                            />
                            <div className="px-4">
                                <MobileNavbarSearchMenu
                                    onItemClick={() => setMobileMenuOpen(false)}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </div>
    );
};

// Mobile
const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ navItems, onItemClick }) => {
    return (
        <ul className="flex flex-col gap-4 px-4">
            {navItems.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={item.path}
                        className={({ isActive }) =>
                            isActive ? "text-primary font-medium" : "text-dark"
                        }
                        onClick={onItemClick}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

// Mobile
const MobileNavbarSearchMenu: React.FC<MobileNavbarSearchMenuProps> = ({ onItemClick }) => {
    return (
        <div className="w-full">
            <NavbarSearchMenu />
        </div>
    );
};

export default Navbar;