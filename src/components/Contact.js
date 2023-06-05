import React, { useState } from 'react';

function Contact() {

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = event => {
        const { name, value } = event.target
        const updatedFormState = {
            ...formState,
            [name]: value,
        }
        setFormState(updatedFormState)
    }

    const handleSubmit = event => {
        event.preventDefault()
        const { name, value } = event.target
        const updatedFormState = {
            ...formState,
            [name]: value,
        }
        fetch("https://formsubmit.co/ajax/jonpfluger718@gmail.com", { 
            method: "POST", 
            headers: { 
                "Content-Type": "application/json", 
                Accept: "application/json", 
            }, 
            body: JSON.stringify(updatedFormState), 
        }) 
            .then((response) => response.json()) 
            .then((data) => console.log(data)) 
            .catch((error) => console.log(error)); 

        setFormState({
            name: '',
            email: '',
            message: '',
        })

        alert("Your message was sent!")
    }

    return (
        <>
            <div id="email-phone-container" className="container my-2">
                <i className="bi bi-envelope-at-fill"></i>
                <p className="m-2">jonpfluger718@gmail.com</p>
                <i className="bi bi-phone"></i>
                <p className="m-2">262-309-4464</p>
            </div>
            <form id="form-container" className="container my-3" onSubmit={handleSubmit} action="https://formsubmit.co/jonpfluger718@gmail.com" method="POST">
                <div className="form-group my-3">
                    <label htmlFor="nameInput">Name</label>
                    <input name="name" onChange={handleChange} value={formState.name} type="text" className="form-control" id="nameInput" placeholder="Enter name" required />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="emailInput">Email address</label>
                    <input name="email" onChange={handleChange} value={formState.email} type="email" className="form-control" id="emailInput" placeholder="Enter email" required />
                </div>

                <div className="form-group my-3">
                    <label htmlFor="messageInput">Message</label>
                    <textarea rows="5" name="message" onChange={handleChange} value={formState.message} className="form-control" id="messageInput" placeholder="Send a message" required />
                </div>

                <div id="submit-button-container">
                    <button id="submitBtn" className="btn btn-lg">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Contact