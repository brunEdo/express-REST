exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{
      title: "First Post",
      content: "this is the first post!"
    }]
  });
}

exports.postPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // 201 = success resource created
  res.status(201).json({
    message: "Post crreated successfully!",
    post: {
      id: new Date().toISOString(),
      title: title, 
      content: content
    }
  })
}