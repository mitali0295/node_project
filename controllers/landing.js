var get_landing = function(req, res, next) {
  res.render('landing', { title: 'Express' });
};
var submit_lead = function(req,res,next) {
	console.log("lead email:",req.body.lead_email);
	res.redirect('/');
};

exports.get_landing = get_landing;
exports.submit_lead = submit_lead;