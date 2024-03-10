// import netflix from '../../public/netflix.png';
export default function ChildComponent(props){
    return(
        <div className="row">
            <div className="col-sm-4">
                <div className="card">
                    <img className="card-img-top" src='/netflix.png' alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">Add to card </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}