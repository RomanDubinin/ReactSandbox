import React from "react";
import {NavLink} from 'react-router-dom'
import Blackdrop from "../../Blackdrop/Blackdrop";
import './Drawer.css'

const links = [
    {to: '/', title:'List', exact: true},
    {to: '/auth', title:'Authorization', exact: false},
    {to: '/quiz-creator', title:'Create quiz', exact: false}
];

class Drawer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        const cls = ['Drawer'];
        if (!this.props.toggleIsOpen){
            cls.push('close')
        }
        return (
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {links.map((x, i) =>{
                            return(
                                <li key={i}>
                                    <NavLink
                                        to={x.to}
                                        exact={x.exact}
                                        activeClassName={'active'}
                                        onClick={this.props.onClose}
                                    >{x.title}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.toggleIsOpen ? <Blackdrop onClick={this.props.onClose}/> : null}
            </React.Fragment>
        );
    }
}

export default Drawer