import React,{Component, useState,useEffect} from 'react';
import InvisibleOption from "./InvisibleOption";
import AddRequest from "./AddRequest";

export default function Request() {
    const [request, setRequest] = useState([])
    const [secondDescription, setSecondDescription] = useState('')
    const [isVisible, setIsVisible] = useState('none')
    const [itemId, setItemId] = useState('')


    // Pobieranie danych z serwera -------------------------------

    const fetchAllRequest = () => {
        const API = "http://localhost:3000";
        fetch(`${API}/tasks/`)
            .then(response => response.json())
            .then(data => setRequest(data))
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchAllRequest()
    },[])

    //Usuwanie zadan z listy ----------------------------------

    const handleFinish = (props) => {
        const API = "http://localhost:3000";
        fetch(`${API}/tasks/${props}`, {
            method: "DELETE"
        })
            .then(fetchAllRequest())
    }

    //Dodawanie description to task ------------------------

    const handleInput = (event) => {
        setSecondDescription(event.target.value)
    }

    const handleId = (event, props) => {
        event.preventDefault()
        setItemId(props)
        setIsVisible('block')
    }

    const handleSubmitOperation = (event) => {
        event.preventDefault()
        setIsVisible('none')
        const API = "http://localhost:3000";
        const data = {
            operation: {
                description: secondDescription
            }
        }
        fetch(`${API}/tasks/${itemId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => fetchAllRequest())

    };

    const styleForm = {
        display: isVisible
    }


    return (
        <>
            <AddRequest fetchAllRequest={fetchAllRequest}/>
            <section className="card">
                <div className="card-body">
                    {
                        request.map( item => (
                                <ul>
                                    <li key={item.id}>
                                        <h5 className="card-title">{item.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{item.description}</h6>
                                        <a className="card-link" href="#" onClick={(event) => handleId(event,item.id)}>Add operation</a>
                                        <a className="card-link" href="#" onClick={() => handleFinish(item.id)}>Finish</a>
                                    </li>
                                </ul>
                        ))
                    }
                    <form className="mt-3" style={styleForm}  onSubmit={handleSubmitOperation}>
                        <div className="form-group">
                            <input className="form-control" name="description" placeholder="Operation description" type="text" onChange={handleInput}/>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Add operation to task"/>
                    </form>
                    <InvisibleOption/>
                </div>
            </section>
        </>
    )
}