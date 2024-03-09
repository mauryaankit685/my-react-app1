import './NetflixIndex.css';
import {useState, useEffect} from "react";
import NetflixMain from './NetflixMain';
import NetflixHeader from './NetflixHeader';
import NetflixRegister from './NetflixRegister';


export function NetflixIndex(){
    
    return(
        <div className="container-fluid p-0">
            <div className='box'>
                <header>
                    <NetflixHeader></NetflixHeader>
                </header>
                <section className='d-flex justify-content-center align-items-center'>
                    <main>
                        <NetflixMain/>
                        <NetflixRegister/>
                    </main>
                </section>
            </div>
        </div>

        
       
    )
    
}