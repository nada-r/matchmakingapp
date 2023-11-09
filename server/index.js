import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'votre_utilisateur',
    password: 'votre_mot_de_passe',
    database: 'votre_base_de_données'
});

db.connect(error => {
    if (error) throw error;
    console.log("Connecté à la base de données MySQL!");
});

app.post('/data', (req, res) => {
    const { nom, texte1, texte2, texte3 } = req.body;
    const query = "INSERT INTO nom_de_votre_table (nom, texte1, texte2, texte3) VALUES (?, ?, ?, ?)";

    db.execute(query, [nom, texte1, texte2, texte3], (error, results, fields) => {
        if (error) {
            res.status(500).send('Erreur lors de l\'insertion des données');
            return;
        }
        res.status(200).send('Données insérées avec succès');
    });
});

app.listen(PORT, () => {
    console.log(`Serveur Express en écoute sur le port ${PORT}`);
});
