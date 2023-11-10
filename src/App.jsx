import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [formData, setFormData] = useState({
        Name: '',
        Expertise1: '',
        Expertise2: '',
        Expertise3: '',
        Know1: '',
        Know2: '',
        Know3: '',
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
                Expertise1: '',
                Expertise2: '',
                Expertise3: '',
                Know1: '',
                Know2: '',
                Know3: '',
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
                        placeholder="Enter Name"
                        value={formData.Name}
                        onChange={handleInputChange}
                    />
                </div>
                <fieldset className="input-group">
                    <legend>Your expertise</legend>
                    <label htmlFor="Expertise1">Expertise 1</label>
                    <input
                        name="Expertise1"
                        id="Expertise1"
                        placeholder="Enter Expertise 1"
                        value={formData.Expertise1}
                        onChange={handleInputChange}
                    />
                    <div className="flex-1 ml-2">
                        <label htmlFor="Know1">Years of Experience</label>
                        <input
                            type="text"
                            name="Know1"
                            id="Know1"
                            placeholder="I would like to discuss about"
                            value={formData.Experience1}
                            onChange={handleInputChange}
                        />
                    </div>
                    <label htmlFor="Expertise2">Expertise 2</label>
                    <input
                        name="Expertise2"
                        id="Expertise2"
                        placeholder="Enter Expertise 2"
                        value={formData.Expertise2}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="Expertise3">Expertise 3</label>
                    <input
                        name="Expertise3"
                        id="Expertise3"
                        placeholder="Enter Expertise 3"
                        value={formData.Expertise3}
                        onChange={handleInputChange}
                    />
                </fieldset>
                <fieldset className="input-group">
                    <legend>Questions for Founders</legend>
                    <label htmlFor="Question1">Question 1</label>
                    <input
                        type="text"
                        name="Know1"
                        id="Know1"
                        placeholder="I would like to discuss about"
                        value={formData.Question1}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="Question2">Question 2</label>
                    <input
                        type="text"
                        name="Know2"
                        id="Know2"
                        placeholder="Also I'm looking for"
                        value={formData.Question2}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="Question3">Question 3</label>
                    <input
                        type="text"
                        name="Know3"
                        id="Know3"
                        placeholder="And finally I am curious about"
                        value={formData.Question3}
                        onChange={handleInputChange}
                    />
                </fieldset>
                <button className="button" type="submit">Send</button>
            </form> {/* Close the form tag */}
        </div>
    );
}

export default App;
