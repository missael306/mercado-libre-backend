const express = require('express');
const routerApi = require('./routes/indexRouter');
const { errorHandler , boomErrorHandler} = require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});