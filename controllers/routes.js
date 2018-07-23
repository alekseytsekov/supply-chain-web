const adminController = require('./adminController');

module.exports = app => {
    
    

    app.get('/administration/createWorker', adminController.createWorker);
    app.post('/administration/createWorker', adminController.createWorkerPost);

    //home
    app.get('/', (request, response) => {
        response.render('partials/index', { title : 'Navigation' });
    });

    // handle all path that missing!
    app.all('*', (req,res) => {
        res.status(404);
        res.send('404 Not Found!');
        res.end();
    });
    
};