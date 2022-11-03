import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';

function App() {
    return (
        <div id={"container"}>
            <div id={"content"}>
                <div id={"header"}>
                    <h1 style={{ paddingTop:"4vh", fontSize:"50px" }}>Don't bro me..</h1>
                    <p style={{ fontSize: "20px" }}>just ask me right then and there</p>
                </div>
                <hr />
                <div id={"inside-content"}>
                    <p>Sometimes, I'll get a message that simply consists of the one word, "bro"</p>
                    <div className={"code_block"}>
                        <p>
                            Jim: bro
                            <br />
                            Dwight: ???
                            <br />
                            Jim is typing...
                        </p>
                    </div>
                    <p>I hate this. This is bad for so many reasons;</p>
                    <ul>
                        <li>Why would you start a sentence like that?</li>
                        <li>Not only that, but why would you END it like that?</li>
                        <li>Also, why won't you respond for lightyears after even if I respond immediately??</li>
                    </ul>
                    <p>Obviously, they're probably saying this;</p>
                    <div className={"code_block"}>
                        <p>
                            Jim: bro, i want to talk about something but I don't know if you're there so I'm gonna end this sentence at "bro" until you see it and i'm afk
                        </p>
                    </div>
                    <p>But this is not the right way to go about it. Instead, you should be saying;</p>
                    <div className={"code_block"}>
                        <p>
                            Jim: bro, so today she asked to see me...
                            <br />
                            Dwight: awww nice bro! what happened?
                        </p>
                    </div>
                    <p>See? Is it really that hard to type few more words to get your point across and start a conversation like a normal person?</p>
                    <p>So, to summarize;</p>
                    <ul>
                        <li>Don't start and end the beginning of a conversation with "bro"</li>
                        <li>If you do the above, at LEAST start typing what you were going to say after</li>
                        <li>Worst case scenario, you don't do the above 2 steps, at least respond in a timely manner</li>
                    </ul>
                </div>
                <hr />
                <div id={"footer"}>
                    <p>donotbro.me by <a href={"https://thatalex.dev"} target={"_blank"} rel={"noreferrer"}>Alex</a><br />
                    Design & content pretty stolen from <a href={"https://dontasktoask.com"} target={"_blank"} rel={"noreferrer"}>dontasktoask.com</a></p>
                    <div className={"footeritems"}>
                        <a href={"https://twitter.com/zstreamss"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa fa-twitter-square" aria-hidden="true"></i>
                        </a>
                        <a href={"https://github.com/azpha"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa fa-github-square" aria-hidden="true"></i>
                        </a>
                        <a href={"mailto:hi@thatalex.dev"} target={"_blank"} rel={"noreferrer"}>
                            <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(App())