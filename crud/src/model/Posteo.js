const { sequelize } = require('../../database');
const {DataTypes} = require('sequelize');

const PosteoModel = sequelize.define('posteo', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    img_url: DataTypes.STRING
});

module.exports = { PosteoModel };