const createError = require('http-errors');
const express = require('express');
const path = require('path');
const app = express();
const ordersRouter = require('./routes/orders');
app.use(express.json());

app.use(express.urlencoded());
const port = process.env.PORT || 8000;
app.all("/*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


app.use(express.static( '../client/dist/client/'));

app.use('/api/order', ordersRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
});

module.exports = app;
