const { PosteoModel } = require("../model/Posteo");

const getPosteos = async (req, res) => {
    const posteos = await PosteoModel.findAll();

    res.render("index", { posteos });
};

const formCreatePosteo = async (req, res) => {
    res.render("new_posteo");
};

const formEditPosteo = async (req, res) => {
    const idPost = req.params.id;
    const post = await PosteoModel.findByPk(idPost);

    if (!post) {
        return res.redirect('/posteos')
    }

    res.render("edit_posteo", { post });
};

const createPosteo = async (req, res) => {

    const { title, content, img_url } = req.body;

    await PosteoModel.create({ title, content, img_url });

    res.redirect("/posteos");
}

const editPosteo = async (req, res) => {

    const { id, title, content, img_url } = req.body;

    const post = await PosteoModel.findByPk(id);

    await post.update({ title, content, img_url });

    res.redirect("/posteos");
}

const deletePosteo = async (req, res) => {

    const idPost = req.params.id;

    const post = await PosteoModel.findByPk(idPost);

    post.destroy();

    res.redirect("/posteos");
}

module.exports = { getPosteos, formCreatePosteo, createPosteo, formEditPosteo, editPosteo, deletePosteo };
