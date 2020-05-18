var get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};
exports.get_landing = get_landing;
