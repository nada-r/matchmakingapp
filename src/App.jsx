import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        Name: '',
        ExpertiseTweet: '',
        Question1: '',
        Question2: '',
        Question3: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = 'https://sheet.best/api/sheets/365c5ca5-a63e-4a5c-80cd-787072830fa7'; // Your actual endpoint
        try {
            const response = await axios.post(endpoint, [formData]);
            console.log(response.data);
            alert('Data submitted successfully!');
            // Optionally reset the form
            setFormData({
                Name: '',
                ExpertiseTweet: '',
                Question1: '',
                Question2: '',
                Question3: '',
            });
        } catch (error) {
            console.error('There was an error submitting your data:', error);
            alert('There was an error submitting your data.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}> {/* Add this line */}
                <div className="input-group">
                    <label htmlFor="Name">Name</label>
                    <input
                        name="Name"
                        id="Name"
                        className="input-name"
                        placeholder="Enter Name"
                        value={formData.Name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="form-row">
                    <fieldset className="input-group">
                        <legend>Present your expertise in a Tweet</legend>
                        <label htmlFor="ExpertiseTweet">Explain what you do in 240 characters</label>
                        <input
                            name="ExpertiseTweet"
                            id="ExpertiseTweet"
                            placeholder="Driving change with #SustainableBusiness, #SupplyChainOptimization, and #RenewableEnergy. Making business eco-friendly!"
                            value={formData.ExpertiseTweet}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                    <fieldset className="input-group">
                        <legend>Questions for Founders</legend>
                        <label htmlFor="Question1">Question 1</label>
                        <input
                            type="text"
                            name="Question1"
                            id="Question1"
                            placeholder="I would like to discuss about"
                            value={formData.Question1}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="Question2">Question 2</label>
                        <input
                            type="text"
                            name="Question2"
                            id="Question2"
                            placeholder="Also I'm looking for"
                            value={formData.Question2}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="Question3">Question 3</label>
                        <input
                            type="text"
                            name="Question3"
                            id="Question3"
                            placeholder="And finally I am curious about"
                            value={formData.Question3}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                </div>
                <button className="button" type="submit">Send</button>
            </form> {/* Close the form tag */}
        </div>
    );
}

export default App;
