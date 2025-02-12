require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const driverController = require('./controllers/DriverController');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sync database
sequelize.sync({ alter: true })
  .then(() => console.log('Database synchronized'))
  .catch(err => console.error('Error syncing database:', err));

// Routes
app.use('/api/drivers', driverController);

// Start server
// Update your app.js listening code
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});