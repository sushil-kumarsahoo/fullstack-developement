import express from 'express';
import authRouter from '././routes/auth.js';
const app = express();
app.use(express.json());
// mount router
app.use('/api/v1', authRouter);
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=index.js.map