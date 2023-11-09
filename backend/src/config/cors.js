import cors from 'cors';

const corsOptions = {
    origin: 'http://127.0.0.1:5173',
};

export default cors(corsOptions);