
import './Header.css'
export default function Header() {
    
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body"  data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand logo" href="#">Trust</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Our Vision</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Our Works
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Healthcare</a></li>
                                <li><a className="dropdown-item" href="#">Education</a></li>
                                <li><a className="dropdown-item" href="#">General</a></li>
                                <li><a className="dropdown-item" href="#">Covid care</a></li>
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                            
                        </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Gallery
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Healthcare</a></li>
                                <li><a className="dropdown-item" href="#">Education</a></li>
                                <li><a className="dropdown-item" href="#">General</a></li>
                                <li><a className="dropdown-item" href="#">Covid care</a></li>
                            </ul>
                            
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Years in picture
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">2022</a></li>
                                <li><a className="dropdown-item" href="#">2021</a></li>
                                <li><a className="dropdown-item" href="#">2020</a></li>
                                <li><a className="dropdown-item" href="#">2019</a></li>
                                <li><a className="dropdown-item" href="#">2018</a></li>
                            </ul>
                            
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>

                        
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
        </>
    )
}