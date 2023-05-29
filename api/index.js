const express = require('express');
const routerApi = require('./routes/indexRouter');
const { errorHandler , boomErrorHandler} = require('./middlewares/errorHandler');
const cors = require('cors');
const config = require('./schemas/config');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const whitelist = config.ALLOW_ORIGINS;
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  }
}

app.use(cors(options));
routerApi(app);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/api', (req, res) => {
    res.send('Backend is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});