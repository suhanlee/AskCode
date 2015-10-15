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
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.post('/', function(req, res, next) {
  
  new Article({
    title: 'test',
    writer: 'writer',
    contents: 'contents'
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