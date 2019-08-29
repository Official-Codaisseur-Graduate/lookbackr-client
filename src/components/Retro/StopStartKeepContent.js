import React from 'react'
import stop from "../../assets/stop-circle-solid.svg";
import start from "../../assets/play-circle-solid.svg";
import keep from "../../assets/check-circle-solid.svg";
export default function StopStartKeepContent() {
    return (
        <div className='feelings-area'>
            <div className='feelings'>
                <img src={stop} alt='stop' className='icon-stop'/>
                <strong>Stop</strong> List ideas that are not delivering results or might be driving people a little crazy.
            </div>
            <div className='feelings'>
                <img src={start} alt='start' className='icon-start'/>
                <strong>Start</strong> List ideas that you should be doing but are not doing, innovative ideas worth discussing to address current problems.
            </div>
            <div className='feelings'>
                <img src={keep} alt='keep' className='icon-keep'/>
                <strong>Keep</strong> List ideas that are creating value or should not be dismissed yet because the outcome is not yet known.
            </div>
        </div>
    )}