const express = require('express');
const app = express();
const PORT = 3000;

console.log("Iniciando servidor...");

app.use(express.json()); // Para manejar JSON

// Ruta de prueba
app.get('/', (req, res) => {
  console.log("Ruta / ha sido visitada");
  res.send('API funcionando');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
