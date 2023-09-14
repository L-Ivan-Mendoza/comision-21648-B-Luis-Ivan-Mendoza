const { PosteoModel } = require("../model/Posteo");

const getPosteos = async (req, res) => {
    const posteos = await PosteoModel.findAll();

    res.render("index", {posteos});
};

const FormCreatePosteo = async(req, res) => {
    res.render("new");
};

const createPosteo = async(req, res) => {

    const {title, content, img_url} = req.body;

    await PosteoModel.create({title, content, img_url});

    res.redirect("/posteos");
}

module.exports = {getPosteos, FormCreatePosteo, createPosteo};
