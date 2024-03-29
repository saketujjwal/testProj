import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
    noInfo:true,
    publicPath:config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*',(req,res) => res.sendFile(path.join(__dirname, '../src/index.html')));

app.listen(port, (err) => {
    if(err) {
        console.log(err)
    } else {
        open(`http://localhost:${port}`)
    }
})