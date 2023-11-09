import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [formData, setFormData] = useState({
        nom: '',
        texte1: '',
        texte2: '',
        texte3: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Remplacez 'http://localhost:5000/data' par l'URL de votre serveur
            const response = await axios.post('http://localhost:5000/data', formData);
            console.log(response.data);
            alert('Données envoyées avec succès !');
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données', error);
            alert('Erreur lors de l\'envoi des données.');
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nom"
                    placeholder="Nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="texte1"
                    placeholder="Texte 1"
                    value={formData.texte1}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="texte2"
                    placeholder="Texte 2"
                    value={formData.texte2}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="text"
                    name="texte3"
                    placeholder="Texte 3"
                    value={formData.texte3}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default App;
