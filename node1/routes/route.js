const userRoutes = require('./customer');
const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('This is response');
    });
    userRoutes(app, fs);
};
module.exports = appRouter;