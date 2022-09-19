import express from 'express';
import mainRoutes from './src/routes/index.js';
import cors from 'cors';
import auth from './src/middlewares/auth.js';
import { checkLogin} from './src/controllers/Employee/index.js';

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// set up route
app.use('/api/checklogin', checkLogin);
app.use('/api/', auth, mainRoutes);

app.listen(3001, () => console.log('Assignment app listening on port 3001!'));