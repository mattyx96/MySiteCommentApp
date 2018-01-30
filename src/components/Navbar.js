import React from "react";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from "reactstrap";
import {EventEmitter} from "fbemitter";


class NavBar extends React.Component {

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
            sortby: "date"
        };
        //this.emitter = new EventEmitter();
    }

    // changeSortBy() {
    //     if (this.state.sortby == "date") {
    //         this.setState({
    //             sortby: "likes"
    //         });
    //         //this.emitter.emit("sort-by-date");
    //     }
    //     else{
    //         this.setState({
    //             sortby: "date"
    //         });
    //     }
    // }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (

            <div>
                <Navbar color="faded" light>
                    <NavbarBrand href="/" className="mr-auto">Comments</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
                    <NavItem>
                        {/*<NavLink href="#">sortby</NavLink>*/}
                    </NavItem>
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;
