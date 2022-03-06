import 'dotenv/config';
import e from 'express';
import cors from 'cors';

const app = e();
app.use(cors());
app.use(e.json());

export { app };
