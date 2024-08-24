// server.js
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import bagRoutes from './routes/bagRoutes.js';

const app = express();
const port = 3000;

// Configure CORS options
const corsOptions = {
  origin: 'http://localhost:3001', // Allow requests from this origin (React app)
  optionsSuccessStatus: 200 // For legacy browser support
};

// Enable CORS with the specified options
//app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use('/api/auth', authRoutes);
app.use('/api', bagRoutes); // Use the bag routes

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}

export default app;
