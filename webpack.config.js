 module.exports = {
           entry: './src/index.js',     //<--src = directory for your .js project files
           output: {                    //   index will be your top/first/entry .js in the bundle     
               path: './dist',
               filename: 'bundle.js'    //<--always output to dist/bundle.js
           },
           module: {
               loaders: [
                   {
                       test: /\.js$/, //<--operate on files that end in .js
                       loader:'babel' ,     //<--The loader is babel
                       query: {              //<--we are going to query the es2015 preset
                           presets:    ['es2015']
                       }
                   }
               ]
           }
       };