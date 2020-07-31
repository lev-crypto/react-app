import React, { Component } from 'react';
import '../css/aboutMe.css'

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutMe">
                <span className="homeGreen"> Software </span><span className="bold">Developer</span><br /><br />
                <p>
                    {/* <pre className="line-numbers" >
                        <code className="language-javascript">
                            let a = 5;
                            let response = await model.findById(id);
                        </code>
                    </pre> */}
                    If you are just curious about my story or just want to grab my resume. BINGO, you are on the right spot. You can dowload my resume from
                    the left menu bar. <br />
                    <span className="purple">You can describe me as a person who is a good sketch artist and sometimes can fill empty stomach's too. Also a person who enjoys turning complex
                    problems statement into code.</span><br />
                </p>
            </div>
        );
    }
}

export default AboutMe;