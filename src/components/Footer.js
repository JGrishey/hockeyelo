import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row justify-content-center p-4 text-light">
                    <div className="col-12 col-lg-3 mb-4">
                        <img src="http://farm5.staticflickr.com/4591/24369868557_5a59ef4ab5_b.jpg" className="rounded mb-2 w-50"/>
                        <h2>About Me</h2>
                        <p>
                            My name is Jacob Grishey. I am a passionate NHL fan and
                            aspiring software engineer. I am not affiliated in any way
                            with the National Hockey League. I am 20 years old and I am
                            currently pursuing a Bachelor's Degree in Computer Science.
                        </p>
                    </div>
                    <div className="col-12 col-lg-3 mb-4">
                        <div className="row">
                            <div className="col-4 align-self-center text-center">
                                <a href="https://github.com/JGrishey">
                                    <img className="w-50" src="https://cdn.svgporn.com/logos/github-icon.svg" />
                                </a>
                            </div>
                            <div className="col-4 align-self-center text-center">
                                <a href="https://twitter.com/JGrishey">
                                    <img className="w-50" src="https://cdn.svgporn.com/logos/twitter.svg" />
                                </a>
                            </div>
                            <div className="col-4 align-self-center text-center">
                                <a href="https://linkedin.com/in/jacob-grishey">
                                    <img className="w-50" src="https://cdn.svgporn.com/logos/linkedin.svg" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;