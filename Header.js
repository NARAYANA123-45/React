import React, {Component} from 'react';
class Header extends Component {
    render() {
     return(
            <header className="App-header">
            <h1 className="App-title">{this.props.title}</h1>
            <div>{this.props.num}</div>
            </header>
        )
    }
}
export default Header