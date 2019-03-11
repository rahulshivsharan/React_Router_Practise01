module.exports = {
	"entry" : "./index.js",
	"output" : {
		"filename" : "bundle.js",
		"publicPath" : ""
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
		}]
	}
}