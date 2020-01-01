import React from 'react'
import './Layout.css'
import MenuToggle from "../../UI/Navigation/MenuToggle/MenuToggle";


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

    render() {
        return <div className={'Layout'}>
            <MenuToggle
                onToggle={this.toggleHandler.bind(this)}
                isOpen={this.state.toggleIsOpen}
            />

            <main>
                {this.props.children}
            </main>
        </div>
    }
}

export default Layout