//file isn't transpiled so must use ES5 or common JS

//register to transpile before tests run
require('@babel/register')();

//disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function(){};
