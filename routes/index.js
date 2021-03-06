const express = require('express');
const router = express.Router();

// Subrouters;
const playersRouter = require('./players');

// Mount our subrouters to assemble our apiRouter;
router.use('/players', playersRouter);

// Error handling middleware;
router.use((req, res, next) => {
    const error = new Error("Not Found, Please Check URL!");
    error.status = 404;
    next(error);
});