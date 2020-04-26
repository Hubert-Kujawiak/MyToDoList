import React,{Component, useState,useEffect} from 'react';

export default function AddRequest(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('open')
    const [operations, setOperations] = useState('')
    const [timeSpend, setTimeSpend] = useState('')
    const [hours, setHours] = useState('0')
    const [minutes, setMinutes] = useState('0')

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }
    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    // Dodawanie zadanie do listy zadan na serwerze ---------------------

    const handleSubmit = (event) => {
        event.preventDefault()
        const tasks = {
            id: '',
            title: title,
            description: description,
            status: status,
        };

        const API = "http://localhost:3000";
        fetch(`${API}/tasks`, {
            method: "POST",
            body: JSON.stringify(tasks),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => props.fetchAllRequest())
    }

    // Aktualna godzina ----------------------------------------

    const Timer = () => {
        const actualHours = new Date().getHours();
        const actualMinutes = new Date().getMinutes();
        setHours(actualHours)
        setMinutes(actualMinutes)
    }
    useEffect(() => {
        Timer()
    })

    return (
        <div className="jumbotron">

            <h1 className="display-4">Add new task</h1>
            <h2>Time: {hours} : {minutes}</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" placeholder="Title" onChange={handleTitle}/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" name="description" placeholder="Description" onChange={handleDescription}/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary"/>
            </form>
        </div>
    )
}