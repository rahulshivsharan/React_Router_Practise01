module.exports = {
	"entry" : "./index.js",
	"output" : {
		"filename" : "bundle.js",
		"publicPath" : ""
	},
	"devServer": {
    	"historyApiFallback": true
  	},
	"module" : {
		"rules" : [{
			"test" : /\.js$/,
			"exclude" : /node_modules/,
			"loader" : "babel-loader",
			"query": {
	      		"presets": ['@babel/react', '@babel/preset-env'],
	      		"plugins": ['@babel/proposal-class-properties']
    		}
		},{
    		"test" : /\.css$/,
    		"use" : ['style-loader', 'css-loader']    		
		},{ 
      		"test": /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, 
      		"loader" : 'file-loader' 
      	}]
	}
}