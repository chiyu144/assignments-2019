import React from 'react';

class Navs extends React.Component {
    constructor() {
        super()
        this.state = {
            opacity: "0",
            width: "0"
        }
    }
    onOff() {
        if(this.state.opacity === "0") {
            this.setState(
                {
                    width: "35%",
                    opacity: "0.6"
                }
            )
        } else {
            this.setState(
                {
                    width: "0",
                    opacity: "0"
                }
            )
        }
    }
    render() {
        return (
            <nav> 
                <a className="logo"></a>
                <input className="navicon" id="navicon" type="checkbox" />
                <label className="meet" htmlFor="navicon">
                    <div className="hamburger" onClick={() => this.onOff()}>
                        <span></span><span></span><span></span>
                    </div>
                </label>
                <ul className="mainavs">
                    <li><a>About</a></li>
                    <li><a>Notice</a></li>
                    <li><a>Credit</a></li>
                    <li><a>Hashtag</a></li>     
                </ul>
                <div id="sidenavs" className="sidenavs" style={{opacity:[this.state.opacity], width:[this.state.width]}}>
                    <a>About</a>
                    <a>Notice</a>
                    <a>Credit</a>
                    <a>Hashtag</a>
                </div>
            </nav>
        )
    }
}

export default Navs;