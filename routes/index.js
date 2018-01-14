const UserRoutes = require("./userRoutes");

class IndexRoutes {
    static Index(app){
        app.all('/api/*', (req, res) => {
            res.status(200).send("Welcome to new party API")
        })

    }
    static User(app){
        app.use('/api/users/', UserRoutes);
    }
}

module.exports = IndexRoutes;