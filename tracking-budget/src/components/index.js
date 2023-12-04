import React, {useReducer} from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import DarkModeToggle from './toggle'

function reducer(state, action) {
    if (action.type === 'incremented_clicks') {
        return {
            clicks: state.clicks + 1
        };
    }
    throw Error('dude idek');
}
//gross use of this or whatever, i just needed something rip
const Navbar = () => {
    const [state, dispatch] = useReducer(reducer, {clicks: 0})

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
                <DarkModeToggle />
                <div>
                    <div id="incrementer" onClick={() => {
                        dispatch({type: 'incremented_clicks'})
                    }}>Click me!</div>
                    <div>Your clicks: {state.clicks}</div>
                </div>
                <div></div>
                

            </Nav>
            
        </>
    );
};
 //this is what i want
export default Navbar;