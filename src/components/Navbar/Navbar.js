import './Navbar.css'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout as handleLogout } from '../../actions/auth';

const Navbar = () => {
    return (
        <div className="remindme-navbar-container">
            <nav className="remindme-navbar d-flex">
                <div class="item p-2 flex-fill">Website Projects</div>
                <div class="item p-2 flex-fill">Blog</div>
                <div class="item p-2 flex-fill">Other Projects</div>
                <div class="item p-2 flex-fill">Certificate</div>
            </nav>
        </div>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
})


export default connect(mapStateToProps, {logout: handleLogout})(Navbar);