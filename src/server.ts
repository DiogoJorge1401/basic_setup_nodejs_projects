import { app } from '@/app';

const port = process.env.PORT;

app.listen(port, () => console.log(`server is running at the port ${port}`));
