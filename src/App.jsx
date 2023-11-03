import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        nom: '',
        texte1: '',
        texte2: '',
        texte3: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/data', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
        }
    };

    return (
        <div>
            <h1>Formulaire Simple</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nom"
                    value={formData.nom}
                    onChange={handleChange}
                    placeholder="Nom"
                    required
                />
                <input
                    type="text"
                    name="texte1"
                    value={formData.texte1}
                    onChange={handleChange}
                    placeholder="Texte 1"
                    required
                />
                <input
                    type="text"
                    name="texte2"
                    value={formData.texte2}
                    onChange={handleChange}
                    placeholder="Texte 2"
                    required
                />
                <input
                    type="text"
                    name="texte3"
                    value={formData.texte3}
                    onChange={handleChange}
                    placeholder="Texte 3"
                    required
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default App;

