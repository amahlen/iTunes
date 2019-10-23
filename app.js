const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const fetch = require('node-fetch');

const app = express();

// Middlewear

app.use(cors());
app.use(helmet());

// route

app.get('/',(req, res) =>{
    res.json({msg: "Welcome "})
} )


// itune search 

app.get('/search/:name/:type', (req, res) =>{
    const name = req.params.name;
    const type = req.params.type;
    fetch(`https://itunes.apple.com/search?term=${name}&limit=12&entity=${type}`)
    .then(res => res.json())
     .then(data =>res.send(data))
     .catch(err=> console.warn(err));
})



// Establishing PORT
const PORT = process.env.PORT || 5051;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});