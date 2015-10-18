var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/articles', router);
};

router.get('/', function (req, res, next) {
//  res.render('index', { title: 'Express Test'})
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('articles/index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/:title', function (req, res, next) {
  var param_title = req.params.title;
  console.log("param_title: " + param_title);
  Article.find({ title: param_title }, function (err, article) {
    if (err) return next(err);
    console.log(article.length);
    res.render('articles/show', {
      count: article.length,
      title: 'Article-Show',
      article: article
    });
  });
});

router.post('/', function(req, res, next) {
  console.log("router.post");
  new Article({
    title: req.params.title,
    writer: req.params.writer,
    contents: req.params.contents
  }).save();
  
  res.redirect(303, '/articles');
  
//  Article.update(
//    { title:'test' }, 
//    { writer: 'writer' }, 
//    { contents: 'contensts'}, 
//    function (err) {
//      if (err) {
//        console.error(err.stack);
//      }   
//      return res.redirect(303, '/');
//  });
})