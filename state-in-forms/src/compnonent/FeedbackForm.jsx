import { useState } from 'react';

function FeedbackForm () {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    });

    const handleDataChange = (domEvent) => {
        const {name, value} = domEvent.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }
    ))};


    return (
    <div>

        <form className='feedback-form'>
            <h2>Feedback Form</h2>

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required={true} value={formData.name} onChange={handleDataChange} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required={true} value={formData.email} onChange={handleDataChange} />

            <label htmlFor="feedback">Feedback</label>
            <textarea type="feedback" id="feedback" name="feedback" placeholder= "insert feedback here" rows="5" maxLength="200" required={true} value={formData.feedback} onChange={handleDataChange} />
            <button type="submit">Submit</button> 

        </form>
        <div className="real-time-feedback">
            <h3>Real-Time Feedback Preview</h3>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Feedback: {formData.feedback}</p>
        </div>
    </div>
    )
}

export default FeedbackForm;