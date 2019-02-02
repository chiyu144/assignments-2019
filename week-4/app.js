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

class Show extends React.Component {
    constructor() {
        super()
        this.state = {
            display: "none",
            btnText: "Show more"
        }
    }
    trigger() {
        if(this.state.display === "none") {
            this.setState(
                {
                    btnText: "Show less",
                    display: "flex"
                }
            )
        } else {
            this.setState(
                {
                    btnText: "Show more",
                    display: "none"
                }
            )
        }
    }
    render() {
        return (
            <main>
                <h2>Latest</h2>
                <a className="addAsg" href="./schedAjax.html" target="_blank">Assignmet1 & Assignment2</a>
                <section className="atcWrap">
                        <article className="idxatc">
                            <header>
                                <h3>fullStack Feb / 2019 no. 01</h3>
                            </header>
                            <img src={"./img/fullstack.png"} alt="" />
                            <p>The first issue of fullStack magazine!</p>
                            <footer>
                                <p>Published: 16th January 2019</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>JELLYFISH BOOM</h3>
                            </header>
                            <img src={"./img/jellyfish.png"} alt="" />
                            <p>Jellyfish photograph.</p>
                            <footer>
                                <p>Published: 11th January 2019</p>
                            </footer>
                        </article> 

                        <article className="idxatc">
                            <header>
                                <h3>Breakfast after stay up all night</h3>
                            </header>
                            <img src={"./img/breakfast.png"} alt="" />
                            <p>Delicious.</p>
                            <footer>
                                <p>Published: 5th April 2018</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Putting that aside, cat is cute</h3>
                            </header>
                            <img src={"./img/cat.png"} alt="" />
                            <p>Cat is also liquid.</p>
                            <footer>
                                <p>Published: 14th March 2018</p>
                            </footer>
                        </article>

                    <div id="show" style={{display: this.state.display}}>
                        <article className="idxatc">
                            <header>
                                <h3>I want five quadrillion yen</h3>
                            </header>
                            <img src={"./img/yen.png"} alt="" />
                            <p>Kozuka Gothic EL font is very beautiful.</p>
                            <footer>
                                <p>Published: 22th October 2017</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Blossom</h3>
                            </header>
                            <img src={"./img/blossom.png"} alt="" />
                            <p>Flowers.</p>
                            <footer>
                                <p>Published: 2nd May 2017</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Sunlit Garden</h3>
                            </header>
                                <img src={"./img/sunlit.png"} alt="" />
                                <p>Light and shadow.</p>
                            <footer>
                                <p>Published: 9 July 2016</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Almighty Square</h3>
                            </header>
                                <img src={"./img/squar.png"} alt="" />
                                <p>Square is magic !</p>
                            <footer>
                                <p>Published: 17 February 2015</p>
                            </footer>
                        </article>
                    </div>
                </section>
                <div className="showBtn" onClick={() => this.trigger()} id="showBtn">{this.state.btnText}</div>
            </main>
        )
    }
}

function App() {
    return (
        <div className="App">
          <Navs />
          <WelMsg />
          <Show />
          <footer className="bigFooter">
              <p>&copy; Julie Liao 2019</p>
          </footer>
      </div>
      );
}

ReactDOM.render(<App />, document.getElementById('root'));