export default function NetflixHeader(){
    return(
        <>
            <div className="d-flex justify-content-between p-3 m-3">
                <div>
                <h2 className="text-danger">NETFLIX</h2>
                </div>
                <div className="input-group w-25">
                    <select className="form-select">
                        <option>Language</option>
                        <option>Language</option>
                        <option>Language</option>
                    </select>
                    <button className="btn btn-danger ms-2">Signin</button>
                </div>
            </div>
        </>
    )
}