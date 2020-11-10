const express = require('express');
const path = require('path');
const bodyParser= require('body-parser')

/*
to deploy:

'npm run build' in /client
COMMIT/PUSH TO MASTER
'cd ..'
('heroku login')
('heroku git:remote -a sharing-stories')
'git push heroku master'

*/

const app = express();


// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items


// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);