const config_file = require('./config.json');

login = (req ,res ) => {
    // console.log("test login control file");
    
    // return res.send("test page")

    return res.status(200).json({
        success:true,
        message:"login page",
        school_name:config_file.school_name
    });
};

logout = (req ,res ) => {

}

// module.exports = {
//     login_page,
//     logout
// }

module.exports = {
    login,
    logout
};