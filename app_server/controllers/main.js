/* GET Home Page */
module.exports.index = function(req, res) {
    res.render('index', {
        title: 'Nowmapr - What\'s out there?'
    });
};

//nowEvents GET method
//nowEvents.find
//res.render('index', {nowEvents: nowEvents});