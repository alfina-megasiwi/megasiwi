import './Navbar.css'
import { connect } from 'react-redux';
import { logout as handleLogout } from '../../actions/auth';

const Navbar = () => {
    return (
        <div className="remindme-navbar-container">
            <nav className="remindme-navbar d-flex">
                {/* <a href="/" button type="button" class="btn item p-2 flex-fill">Home</a> */}
                <a href="#projects" button type="button" class="btn item p-2 flex-fill">Website Projects</a>
                {/* <a href='/blog' type="button" class="btn item p-2 flex-fill">Blog</a>
                <a href='/other-projects' type="button" class="btn item p-2 flex-fill">Other Projects</a>
                <a href='/certificate' type="button" class="btn item p-2 flex-fill">Certificate</a> */}
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})


export default connect(mapStateToProps, {logout: handleLogout})(Navbar);