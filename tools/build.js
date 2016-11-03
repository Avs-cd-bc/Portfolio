import webpack from "webpack";
import webpackConfig from "../webpack.config.prod";

process.env.NODE_ENV = "production";//this assures Bable dev config (for hot reloading) doesnt apply.

console.log("Generating minified bundle for production via Webpack.  This will take a moment...");

webpack(webpackConfig).run((err, stats) => {
  if(err){//so a fatal error occured.  Stop here.
    console.log(err);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    console.log("Webpack generated the following warning: ");
    jsonStats.warnings.map(warning => console.log(warning));
  }

  if(jsonStats.hasWarnings){
    console.log("Webpack generated the following warning: ");
    jsonStats.warnings.map(warning => console.log(warning));
  }

  console.log(`webpack stats: ${stats}`);

  //if we got this far, the build succeeded.

  console.log("Your app has been compiled in production mode and written to /dist. It's ready to roll!");
  return 0;
});
