import express, { Request, Response, NextFunction } from 'express';
import config from './config/keys';

const app = express();

app.get('/status', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'OK',
        bot: 'operational',
    });
});

app.use('*', (req: Request, res: Response, next: NextFunction) => {
    res.redirect('/status');
});

app.listen(config.server.port, () => {
    console.log(`[Server] Listening on ${config.server.port}`);
    require('./bot');
});
