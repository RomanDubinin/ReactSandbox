import React from 'react'
import './Layout.css'
import MenuToggle from "../../UI/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../UI/Navigation/Drawer/Drawer"


class Layout extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            toggleIsOpen: false
        }
    }

    toggleHandler(){
        this.setState({
            toggleIsOpen: !this.state.toggleIsOpen
        })
    }

    onBlackdropClick(){
        this.setState({
            toggleIsOpen: false
        })
    }

    render() {
        return <div className={'Layout'}>
            <MenuToggle
                onToggle={this.toggleHandler.bind(this)}
                isOpen={this.state.toggleIsOpen}
            />
            <Drawer
                toggleIsOpen={this.state.toggleIsOpen}
                onClose={this.onBlackdropClick.bind(this)}
            />

            <main>
                {this.props.children}
            </main>
        </div>
    }
}

export default Layout