import {useState, useEffect, React} from 'react';
import './DigitalClock.css';
export default function DigitalClock(){
    const [getdate, setDate]=useState(new Date())
    
    
    useEffect(()=>{
        const timer =setInterval(() => {
            setDate(new Date);
        },1000);
        return ()=>{
            console.log('clear');
            clearInterval(timer);
        }
    },[])
    

    return(
        <>
            <div className="container-fluid">
                <div className="digital-watch">
                    <span>
                        {getdate.getHours()>9 ? getdate.getHours() : '0'+getdate.getHours()} : {getdate.getMinutes()<10 ? '0'+getdate.getMinutes() : getdate.getMinutes()} : {getdate.getSeconds()>10? getdate.getSeconds(): '0'+getdate.getSeconds()} {getdate.getHours()>12 ? 'PM' : 'AM'}
                    </span>
                </div>
            </div>
        </>
    )
} 