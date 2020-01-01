import React from "react";
import './Drawer.css'

const links = [
    'Link1', "Link2", "Link3"
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
            <nav className={cls.join(' ')}>
                <ul>
                    {links.map((x, i) =>{
                        return(
                            <li
                                key={i}
                            >
                                <a>{x}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Drawer