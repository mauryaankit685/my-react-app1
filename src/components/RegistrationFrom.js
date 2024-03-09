import { useState } from "react";

export default function RegistrationFrom(){

    const [getData, setData]=useState({'Name':'Ankit','Email':'testing@gamil.com'});
    const [getDataNew, setDataNew]=useState({'Name':'','Email':''});

    function FetchName(e){
        setData({
            Name:e.target.value,
            Email:getData.Email
        });
        // setData.Name=e.getData.Name;
    }

    function FetchEmail(e){
        setData({
            Name:getData.Name,
            Email:e.target.value
        })
    }

    function ClickFetch(){
        setDataNew(getData)
    }

    return(
        <div className="row">
           
            <div className="col-4">
                <h2>Form</h2>
                <dd>Name</dd>
                <dt><input onChange={(FetchName)} type='text' /></dt>

                <dd>Email</dd>
                <dt><input onChange={(FetchEmail)} type='email' /></dt>

                <dd>Password</dd>
                <dt><input type='password' /></dt>

                <dt><div onClick={ClickFetch} className="btn btn-danger">Submit</div></dt>
            </div>
            

            <div className="col-4">
                <dd className="center">
                    From Data Fetch
                </dd>
                <dd>Name</dd>
                <dt>{getData.Name} </dt>

                <dd>Email Address</dd>
                <dt> {getData.Email}</dt>

            </div>

            <div className="col-4">
                <dd className="center">
                    From Data Fetch on click
                </dd>
                <dd>Name</dd>
                <dt>{getDataNew.Name} </dt>

                <dd>Email Address</dd>
                <dt> {getDataNew.Email}</dt>

            </div>
        </div>
    )

}
