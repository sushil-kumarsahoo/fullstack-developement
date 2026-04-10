import { z } from 'zod';
import express from 'express';
import { signupInput } from '@sushill7847/common';
const router = express.Router();
router.post('/signup', async (req, res) => {
    const parsedInput = signupInput.safeParse(req.body);
    if (!parsedInput.success) {
        return res.status(403).json({
            msg: "Error"
        });
    }
});
export default router;
//# sourceMappingURL=auth.js.map