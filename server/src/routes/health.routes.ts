import express, { NextFunction, Request, Response } from 'express';

const router = express.Router();

router.get('/ping', (req: Request, res: Response, next: NextFunction) => {
  res.send('API--V1-- Testing sucessful');
});

export default router;
