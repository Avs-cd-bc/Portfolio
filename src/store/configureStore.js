if(process.env.NODE_ENV === "production"){
  module.exports = require("./configureStore.prod");
}

else{
  module.exports = require("./configureStore.dev");
}

//dynamic imports are not supposed by ES6, so we are going to use require instead of import
