const mainController = {};

mainController.home = async (req, res) => {
    return res.render("home.ejs");
};

module.exports = mainController;