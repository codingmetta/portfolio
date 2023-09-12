import GithubBtn from "./projectcard/GithubBtn.jsx";
import DemoBtn from "./projectcard/DemoBtn.jsx";

export default function ProjectCard(props) {
    return (
        <article className="project-card-layout">
            <figure className="project-pic-layout">
                <img className="project-pic" src={props.img} alt="Example Picture of Project" />
            </figure>

            <section className="project-info">
                <div className="project-info-layout">
                    <h2 className="project-title" >{props.title}</h2>
                    <p className="project-details">
                        {props.desc}
                    </p>

                    <p className="badge-section-layout">
                        {
                            props.react && <span className="badge badge-purple">React</span>
                        }

                        {
                            props.css && <span className="badge badge-yellow">CSS</span>

                        }
                        {
                            props.firebase && <span className="badge badge-red">Firebase</span>

                        }

                        {
                            props.tailwind && <span className="badge badge-pink">TailwindCSS</span>

                        }
                        {
                            props.mongodb && <span className="badge badge-gray">mongoDB</span>

                        }
                        {
                            props.express && <span className="badge badge-teal">Express</span>

                        }
                        {
                            props.js && <span className="badge badge-orange">JavaScript</span>

                        }
                        {
                            props.cplusplus && <span className="badge badge-blue">C++</span>

                        }
                        {
                            props.qt && <span className="badge badge-lime">Qt 5</span>

                        }
                        {
                            props.hyper && <span className="badge badge-gray">HTML5</span>

                        }
                        {
                            props.php && <span className="badge badge-fuchsia">PHP</span>

                        }
                        {
                            props.sql && <span className="badge badge-green">SQL</span>

                        }
                        {
                            props.bootstrap && <span className="badge badge-teal">Bootstrap</span>

                        }
                        {
                            props.wordpress && <span className="badge badge-amber">Wordpress</span>

                        }
                    </p>
                </div>
                <div className="btn-section-layout">
                    <div>
                        {props.githubExists &&
                            <GithubBtn
                                link={props.githubLink}
                            />
                        }
                    </div>

                    <div>
                        {props.applinkExists &&
                            <DemoBtn
                                link={props.appLink}
                            />
                        }
                    </div>

                </div>
            </section>

        </article>
    );
}