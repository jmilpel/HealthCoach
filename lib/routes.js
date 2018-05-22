Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/home', function () {
  this.render('home');
});
Router.route('/blog', function () {
  this.render('blog');
});



