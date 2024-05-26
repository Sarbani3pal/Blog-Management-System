const BlogSetting = require("../models/blogSettingModel");

const isBlog = async(req,res,next)=>{
    try{

        const blogSetting = await  BlogSetting.find({});
        blogSetting.length = 1;
        if(blogSetting.length == 0 && req.originalURL != "/blog-setup"){
            res.redirect('/blog-setup');
        }
        else{
            next();
        }
    } catch(error){
        console.log(error.message);

    }
}

module.exports = {
    isBlog
}