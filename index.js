import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/dbConfig.js';

import intitudeRoute from './routes/intitudeRoute.js';
import boardRoute from './routes/boardRoute.js';
import studentRoute from './routes/studentRoute.js';
import hierarchyRoute from './routes/hierarchyRoute.js';
import subjectRoute from './routes/subjectRoute.js';
import classRoute from './routes/classRoute.js';


import morgan from 'morgan';
dotenv.config();
connectDB();
const app = express();
app.use(cors());    
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
   res.send('Welcome to the Intitude API');
});

app.use('/api/intitude', intitudeRoute);
app.use('/api/board', boardRoute);
app.use('/api/student', studentRoute);
app.use('/api/hierarchy', hierarchyRoute);
app.use('/api/subject', subjectRoute);
app.use('/api/class', classRoute);

app.listen(process.env.PORT, ()=> {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
})
