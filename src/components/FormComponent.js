import { useState } from "react";

export function FormComponent(){
    const [getEmail, setEmail]=useState("");
    const [getPassword, setPassword]=useState("");


    
    function getEmailData(e){
        
        console.log('sdfs');
        setEmail(e.target.value);
    }
    function getPasswordData (e){
        setPassword(e.target.value);
    }

    function DataPrint(){
        console.log(getEmail, getPassword);
    }

    return(
         <div className='container-fluid mt-5'>
            <div className="row g-3">
                <div className="col-auto" >
                    
                    <label for="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" readonly id='staticEmail2'  onChange={getEmailData} placeholder="Email" className="form-control" />
                </div>
                <div className="col-auto"  >
                    <label for="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" className="form-control" onChange={getPasswordData} id="inputPassword2" placeholder="Password"/>
                </div>
                    <div className="col-auto">
                    <button onClick={(DataPrint)} className="btn btn-primary mb-3">Confirm identity</button>
                </div>
            </div>
            <div className="col-3">
                <dt>email</dt>
                <dd>{getEmail}</dd>
            </div>

            <div className="col-3">
                <dt>password</dt>
                <dd>{getPassword}</dd>
            </div>
        </div>
        
    )
}