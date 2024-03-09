export default function NetflixRegister(){
    return(
        <div >
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="input-group input-group-lg">
                <input type="email" className="form-control"/>
                <button className="btn btn-danger">
                    Get Started
                    <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
    );
}
