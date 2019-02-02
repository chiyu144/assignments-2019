import React from 'react';

class WelMsg extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Book Cover is like that",
            desc: "Photos like if they were a book cover."
        };
    }
    changeText() {
        this.setState({
            name: "Have a Good Time!",
            desc: "ლ(╹◡╹ლ)"
        })
    }
    render() {
        return (
            <header className="bigHeader" onClick={() => this.changeText()} id="bigHeader">
                <h1>{this.state.name}</h1>
                <p>{this.state.desc}</p>
            </header>
        )
    }
}

export default WelMsg;