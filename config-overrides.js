module.exports = (config, env) => {
    if(env==="production"){
        config.output.publicPath="/projects/branding/"
    }
    return config;
};