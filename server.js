const express = require('express');
const cors = require('cors');
const app = express();
require('./config/mongoose.config'); // Configuración de mongoose

// Configuración de CORS para permitir solicitudes 
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json()); // Para analizar JSON
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formularios

// Importa y usa las rutas
const projectRoutes = require('./routes/project.routes'); 
app.use('/api', projectRoutes);

app.listen(8000, () => {
    console.log("Listening at Port 8000");
});
