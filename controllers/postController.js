import database from '../config/database.js';

import Post from '../database/models/post.js';

const findAll = async (req, res, next) => {
  const data = await Post.find();
  // req.data = data;
  return res.status(200).send(data);
};

const create = async (req, res, next) => {
  // console.log(req.body);
  const post = await new Post({
    title: req.body.title,
    category: req.body.category,
    nick: req.body.nick,
    contentPost: req.body.contentPost,
  }).save();
  return res.status(201).send({ data: post });
};

export default { create, findAll };
