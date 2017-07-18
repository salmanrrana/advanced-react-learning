module.exports = function(app) {
  //on app get call a function called get
  //first argument is the route that we are trying
  //to handle and then perform this certain function
  app.get('/', function(req, res, next){
    res.send(['waterbottle', 'phone', 'paper'])
  });
}
