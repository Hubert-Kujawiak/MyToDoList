import React,{Component, useState,useEffect} from 'react';

export default function InvisibleOption() {

    const [addTime, setAddTime] = useState(0)
    const [timeTask, setTimeTask] = useState(0)
    const [manualStyle, setManualStyle] = useState('none')
    const [timerStyle, setTimerStyle] = useState('none')


    const handleChange = (event) => {
        setAddTime(event.target.value)
    }

    const handleSaveTime = (event) => {
        event.preventDefault()
        setTimeTask(addTime)
        setManualStyle('none')
    }

    const handleManualTimer = () => {
        setManualStyle('block')
    }
    const handleStartTimer = () => {
        setTimerStyle('block')
        setIsActive(!isActive);
    }
    const handleStopTimer = () => {
        setTimerStyle('none')
        setSeconds(0);
        setIsActive(false);
        setTimeTask(seconds)
    }

    const styleTimer = {
        display: timerStyle
    }
    const styleManTimer = {
        display: manualStyle
    }

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);


    return (
        <>

        <ul className="list-group list-group-flush">

            <li className="list-group-item d-flex justify-content-between align-items-center">
                Podstawowy widok operacji
                <div>
                    <button className="btn btn-primary" onClick={handleManualTimer}>Add time manually</button>
                    <button className={`btn btn-primary ml-3 ${isActive ? 'active' : 'inactive'}`} onClick={handleStartTimer}>Start timer</button>
                </div>
            </li>
        </ul>
        <ul style={styleTimer} className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                Start Timer
                <div>
                    <span className="btn btn-warning">Czas: {seconds} sek</span>
                    <button className="btn btn-primary ml-3" onClick={handleStopTimer}>Stop timer</button>
                </div>
            </li>
        </ul>
            <ul style={styleManTimer} className="list-group list-group-flush">
            <li className="list-group-item task-operation d-flex justify-content-between align-items-center">
                Dodaj ręcznie czas :
                <form className="d-flex" onSubmit={handleSaveTime}>
                    <input className="form-control" onChange={handleChange} name="time" placeholder="Type in spend time" type="text"/>
                    <button type="submit" className="btn btn-primary ml-3">Save</button>
                </form>
            </li>
            </ul>
            <ul className="list-group list-group-flush">
            <li className="list-group-item">
                <span className="badge badge-primary badge-pill">Czas: {timeTask} sec</span>
            </li>
        </ul>
        </>
    )
}