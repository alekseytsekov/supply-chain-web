const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');

const config = require('./config/config');
const routes = require('./controllers/routes');

// handlebar
config.handlebarInit(app);

// mongo db
//config.mongoDbInit(config.mongoDbOptions);
//config.mongoDbSeed();

//middleware
// app.use((request, response, next) => {
	
// 	next();
// });

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

//app.enable('trust proxy');
//app.use(rateLimiterMiddleware);

app.use(function (req, res, next) {
  
    let contractInfo = {
        owner : config.contractInfo.owner,
        workerManagerAddress : config.contractInfo.workerManagerAddress,
        itemManagerAddress : config.contractInfo.itemManagerAddress,
        //marketAbi : config.development.marketAbi,
    };
  
    res.locals.contractInfo = contractInfo;
  
    next();
  })

routes(app);

app.listen(config.server.port, (err) => {
	if (err) {
		return console.log('===> ERROR: Something bad happened <==', err);
	}

	console.log(`Server is listening on ${config.server.port}`);
});