import React, { useState, useEffect } from 'react';

const Contact = (props) => {
    document.title = "Contact Me - iCoder"

    const [contact, setContact] = useState({ name: "", email: "", phone: "", message: "" });

    const handleOnChange = (e) => {
        setContact(contact => ({...contact, [e.target.name]: `${e.target.value}`}))
    }

    const handleSubmit = async () => {
        const response = await fetch('/api/contact', {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(contact)
        })
        let data = await response.json()
        props.showAlert(`${data.message}`, `${data.msg_category}`)
        document.getElementById("contact-form").reset();
    }

    return (
        <div className="container my-3">
            <h2>Contact Me</h2>
            <form id="contact-form">
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Enter your full name" onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email address" onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone">Phone number (with country code)</label>
                    <input type="text" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" onChange={handleOnChange}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" className="form-control" id="message" name="message" rows="3" placeholder="Describe your concern here" onChange={handleOnChange}/>
                </div>
                <button disabled={contact.name.length<5 || contact.email.length<7 || contact.phone.length<10 || contact.message.length<10 || !contact.email.match(/^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/)} className="btn btn-danger" type="button" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default Contact;
