import webpack from 'webpack';
import path from 'path';

module.exports= {
    mode: 'development',
    
    devtool: "inline-source-map",
    
    entry:[
        path.resolve(__dirname, "src/index")
    ],
    target: "web",
    output:{
        path: path.resolve(__dirname, "src"),
        publicPath: "/",
        filename: "bundle.js",
    },
    watch: true,
    plugins: [],
    
    module:{
       rules: [
           {
               test: /\.css$/, 
               use:['style-loader','css-loader']},
            {
                test: /\.js$/,exclude: /node_modules/
            }
       ]
    }
    }

