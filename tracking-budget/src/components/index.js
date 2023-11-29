import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Home
                    </NavLink>
                    <NavLink to="/review" activeStyle>
                        Review Information
                    </NavLink>
                    <NavLink to="/addTransaction" activeStyle>
                        Add Transaction
                    </NavLink>
                </NavMenu>
                <div id="navToggle"></div>
            </Nav>
            
        </>
    );
};
 //this is what i want
export default Navbar;