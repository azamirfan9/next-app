const Schedule = require('../../model/meeting/Schedule');
exports.AddNew = (req, res) => {
    Schedule.create(req.body.postdata)
    .then((result) => {
        return res.json({
            status: true,
          	message: "New SChedule was created successfully!",
        });
    })
    .catch((error) => {
        console.log(error);
        return res.json({
            status: false,
          	message: "Unable to create a schedule"
        });
    });
}