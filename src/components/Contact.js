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
        console.log(formState)
        window.alert("Form does not send data yet. Check console.")
        setFormState({
            name: '',
            email: '',
            message: '',
        })

    // when a back end is built, the fetch might look like this
        // fetch("/api/submit", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formState)
        // })
    }

    return (
        <>
            <div id="email-phone-container" className="container mx-auto">
                <div className="email-phone mx-2">
                    <i className="bi bi-envelope-at-fill"></i>
                    <p className="m-2">jonpfluger718@gmail.com</p>
                </div>
                <div className="email-phone mx-2">
                    <i class="bi bi-phone"></i>
                    <p className="m-2">262-309-4464</p>
                </div>
            </div>
            <form id="form-container" className="container my-3" onSubmit={handleSubmit}>
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

                <button id="submitBtn" className="btn btn-lg">Submit</button>
            </form>
        </>
    )
}

export default Contact