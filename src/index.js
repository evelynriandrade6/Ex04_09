const express = require('express')

class AppController{

    constructor(){
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.json());
    }
    routes(){
       const apiRoutes = require('./routes/apiRoutes');
       this.express.use('/project-senai/api/v1/',apiRoutes);
        this.express.get('/health/', (req, res) => {res.send({Status: "OK"});
    });
    }
}
module.exports = new AppController().express;