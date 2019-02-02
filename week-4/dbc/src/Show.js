import React from 'react';

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
                <section className="atcWrap">
                        <article className="idxatc">
                            <header>
                                <h3>fullStack Feb / 2019 no. 01</h3>
                            </header>
                            <img src={require("./img/fullstack.png")} alt="" />
                            <p>The first issue of fullStack magazine!</p>
                            <footer>
                                <p>Published: 16th January 2019</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>JELLYFISH BOOM</h3>
                            </header>
                            <img src={require("./img/jellyfish.png")} alt="" />
                            <p>Jellyfish photograph.</p>
                            <footer>
                                <p>Published: 11th January 2019</p>
                            </footer>
                        </article> 

                        <article className="idxatc">
                            <header>
                                <h3>Breakfast after stay up all night</h3>
                            </header>
                            <img src={require("./img/breakfast.png")} alt="" />
                            <p>Delicious.</p>
                            <footer>
                                <p>Published: 5th April 2018</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Putting that aside, cat is cute</h3>
                            </header>
                            <img src={require("./img/cat.png")} alt="" />
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
                            <img src={require("./img/yen.png")} alt="" />
                            <p>Kozuka Gothic EL font is very beautiful.</p>
                            <footer>
                                <p>Published: 22th October 2017</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Blossom</h3>
                            </header>
                            <img src={require("./img/blossom.png")} alt="" />
                            <p>Flowers.</p>
                            <footer>
                                <p>Published: 2nd May 2017</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Sunlit Garden</h3>
                            </header>
                                <img src={require("./img/sunlit.png")} alt="" />
                                <p>Light and shadow.</p>
                            <footer>
                                <p>Published: 9 July 2016</p>
                            </footer>
                        </article>

                        <article className="idxatc">
                            <header>
                                <h3>Almighty Square</h3>
                            </header>
                                <img src={require("./img/squar.png")} alt="" />
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

export default Show;