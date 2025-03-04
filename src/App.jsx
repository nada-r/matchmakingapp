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

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = 'https://sheet.best/api/sheets/ef039492-c2bf-4937-b8ee-bcd8fe4105e2';
        try {
            const response = await axios.post(endpoint, [formData]);
            console.log(response.data);
            alert('Data submitted successfully!');
            setIsSubmitted(true);
        } catch (error) {
            console.error('There was an error submitting your data:', error);
            alert('There was an error submitting your data.');
        }
    };

    return (
        <div className="container">
            {isSubmitted ? (
                <div>
                    <p>Great, you'll soon receive an email with your matches 🤗</p>
                </div>
            ) : (
                    <form onSubmit={handleSubmit}>
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
                                <legend>Summarize your background and expertise</legend>
                                <label htmlFor="ExpertiseTweet">Explain what you do in a tweet</label>
                                <textarea
                                    name="ExpertiseTweet"
                                    id="tweetInput"
                                    placeholder="Driving change with #SustainableBusiness, #SupplyChainOptimization, and #RenewableEnergy. Making business eco-friendly!"
                                    value={formData.ExpertiseTweet}
                                    onChange={handleInputChange}
                                    rows="4"
                                    className="tweetInput"
                                />
                            </fieldset>
                            <fieldset className="input-group">
                                <legend>What are the top three challenges you currently face</legend>
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
                        <button className="button" type="submit">Meet founders</button>
                    </form>
                )}
        </div>
    );
}

export default App;
