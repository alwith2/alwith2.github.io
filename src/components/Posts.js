import React from 'react';

class Posts extends React.Component {
    render() {
        return (

            <div className="accordion" id="accordionExample">
                <div className="card">
                    <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                            <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Blog Posts
                            </button>
                        </h2>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <div>
                                <h3>Week 9</h3>
                                <p>This week we made a todo list in React. We also made a restaurant menu and continued working on the blog.</p>
                                <h6>October 22, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 8</h3>
                                <p>This was the first week where I used React.</p>
                                <h6>October 15, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 7</h3>
                                <p>This week I made a tic tac toe game using javascript. I feel like I'm getting better at pseudocoding
                                and getting better at turning that into a functional program. I still feel like I have a lot to learn about javascript.</p>
                                <h6>October 8, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 6</h3>
                                <p>Another challenging week! Javascript is hard to grasp but I am getting the hang of it. We worked on
                                making a weather app that uses an API to call weather data.</p>
                                <h6>October 1, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 5</h3>
                                <p>This week was the first week on in-person class. Being in a classroom setting helps me feel more
                                    focused than if I were at home. We learned about the atomic principles of design, as well as some elements of
                                    Bootstrap and Javascript.</p>
                                <h6>September 25, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 4</h3>
                                <p>This week was a bit more challenging. The clock and timer projects took a lot of time and I am still
                                    having some issues with MAMP and also pushing to Github.</p>
                                <h6>September 18, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 3</h3>
                                <p>This week we read more about HTML and CSS and dove into javascript. Justin helped me with some push/pull/merge
                                    sequences on the command line. I was able to add a nav bar to my blog with links.</p>
                                <h6>September 11, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 2</h3>
                                <p>Week 2 consisted of learning some html, css, and pseudocode. I felt pretty comfortable doing all of
                                the assignments for that since I first learned about them in the intro course. I am still having issues while moving
                                files from the local source to remote but I am confident that I will figure it out before this class is over. The pseudocode was a little
                                frustating because I felt like there are a lot of different ways it can be done.</p>
                                <h6>September 3, 2020</h6>
                            </div>
                            <div>
                                <h3>Week 1</h3>
                                <p>During the first week, we learned mostly about how to use Github. I am confused about pretty much
                                all of it. Also, I hate blogs. Listening to Slayer and Pantera has been helpful.</p>
                                <h6>August 28, 2020</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}


export default Posts;