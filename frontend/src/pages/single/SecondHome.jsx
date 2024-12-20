import React from "react";
import '../single/SecondHome.css'

function SecondHome(){
    return(
        <div className="features-intro">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="intro-box">
                            <div className="intro-meta">
                                11.11.18/ in <a href="">Games</a>
                            </div>
                            <h3>The best online game is out now!</h3>
                            <p>Embark on an epic journey through immersive worlds, where every decision you make shapes your destiny and influences the lives of your characters</p>
                            <a href="#" className="read-more">Read more </a>

                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="intro-box">
                            <div className="intro-meta">
                                11.11.18/ in <a href="">Playstation</a>
                            </div>
                            <h3>Top 5 best games in november</h3>
                            <p>Unleash your inner champion as you engage in thrilling battles that test your strategy and skills against formidable foes.</p>
                            <a href="#" className="read-more">Read more </a>

                        </div>

                    </div>
                    <div className="col-md-4">
                        <div className="intro-box">
                            <div className="intro-meta">
                                11.11.18/ in <a href="">Reviews</a>
                            </div>
                            <h3>Get this game at a promo price</h3>
                            <p>Join a vibrant community of players, forge alliances, and compete in the ultimate showdown to prove you are the one true gaming legend!</p>
                            <a href="#" className="read-more">Read more </a>

                        </div>

                    </div>
                </div>
            </div>


        </div>

    )
}
export default SecondHome