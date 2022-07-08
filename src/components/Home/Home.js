import './Home.css'
import Zepeto from './fina.png'
import { connect } from 'react-redux';
import { FaFile, FaGithub, FaGitlab, FaLinkedin} from "react-icons/fa";
const Home = () => {
    return (
        <div className="remindme-home-sect-2-bg">
            <div className="remindme-home-sect-2-container">
                <div className="remindme-home-sect-2-icon">
                    <img src={Zepeto} alt="Walkiddie Icon"></img>
                </div>
                <div className="remindme-home-sect-2-text">
                    <h1 className="remindme-home-small-headings">Hello, my name is</h1>
                    <h1 className="remindme-home-headings">Alfina Megasiwi</h1>
                    <a href='https://drive.google.com/file/d/1V7iQ4AytyBSwstl8MzuDBUJ2uqMR8fEF/view?usp=sharing' target="_blank" button type="button" class="btn portofolio cv"><FaFile style={{marginRight: "5px", marginTop: "-3px"}}/>Curriculum Vitae</a>
                    <a href='http://github.com/alfina-megasiwi'  target="_blank" button type="button" class="btn portofolio github"><FaGithub style={{marginRight: "5px", marginTop: "-3px"}}/>Github</a>
                    <a href='http://gitlab.cs.ui.ac.id/alfina.megasiwi'  target="_blank" button type="button" class="btn portofolio gitlab"><FaGitlab style={{marginRight: "5px", marginTop: "-3px"}}/>Gitlab</a>
                    <a href='http://linkedin.com/in/alfina-megasiwi'  target="_blank" button type="button" class="btn portofolio linkedin"><FaLinkedin style={{marginRight: "5px", marginTop: "-3px"}}/>LinkedIn</a>
                    <p className="remindme-home-p">A Computer Science student who has interest in <b>software engineering</b>, <b>web development</b>, and <b>UI/UX</b>. Currently focused on creating a good user experience website from all aspects (both backend and frontend).</p>
                </div>

            </div>
            <div className="wkd-home-sect-3-container">
                <div class="video-sect video">LATEST PROJECT</div>
                <div className="home-video-sect">
                    <iframe className="walkiddie-video" data-testid="walkiddie-video"
                        src="https://www.youtube.com/embed/6GJzg8iqvE0"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen="True">
                    </iframe>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})

export default connect(mapStateToProps)(Home);

