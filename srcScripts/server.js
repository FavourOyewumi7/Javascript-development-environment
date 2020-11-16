import express from 'express';
import { join } from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev'
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath
}));

app.get('/', (req, res) =>{
    res.sendFile(join(__dirname, '../src/index.html'));

})

app.get('/users', (req, res)=>{
res.json([
    {'id': 1, 'firstName': 'Favour', 'LastName':'Oyewumi', 'age':20},
    {'id': 2, 'firstName': 'Damilola', 'LastName':'Oyewumi', 'age':18},
    {'id': 3, 'firstName': 'Michael', 'LastName':'Oyewumi', 'age': 40},
    {'id': 4, 'firstName': 'Grace', 'LastName':'Oyewumi', 'age': 40},
]);
});

app.listen(port, (err) =>{
    if(err){
        console.log(err);

    }
    else{
        open(`http://localhost:${port}`)
    }
})
