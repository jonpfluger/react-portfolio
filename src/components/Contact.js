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

    // if/when a back end is built, this commented code should work
    const handleSubmit = event => {
        // event.preventDefault()
        console.log(formState)
        // fetch("/api/submit", {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formState)
        // })
    }

    return (
        <form className="container" onClick={handleSubmit}>
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
                <input name="message" onChange={handleChange} value={formState.message} type="text" className="form-control" id="messageInput" placeholder="Send a message" required />
            </div>

            <button id="submitBtn" className="btn btn-lg">Submit</button>
        </form>
    )
}

export default Contact