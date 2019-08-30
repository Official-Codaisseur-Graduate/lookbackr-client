import React from 'react'
import stop from "../../assets/stop-circle-solid.svg";
import start from "../../assets/play-circle-solid.svg";
import keep from "../../assets/check-circle-solid.svg";
export default function StopStartKeepContent() {
    return (
        <div className='feelings-area'>
            <div className='feelings'>
                <img src={stop} alt='stop' className='icon-stop'/>
                <strong>Stop</strong> - Write down your ideas or habbits that are not delivering results or might be driving people a little bit crazy.
            </div>
            <div className='feelings'>
                <img src={start} alt='start' className='icon-start'/>
                <strong>Start</strong> - List your ideas or habbits that you should be doing but are not doing or should do more often.
            </div>
            <div className='feelings'>
                <img src={keep} alt='keep' className='icon-keep'/>
                <strong>Keep</strong> - Name up your ideas or habbits that you like doing/having during the project or are creating value to you and your team.
            </div>
        </div>
    )}