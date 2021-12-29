const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/routes'));

app.listen(port, () => {
    console.log("The server it runnint on the port: "+port);
})