const UserRoutes = require("./userRoutes");
const PartyRoutes = require("./partyRoutes");

class IndexRoutes {
    static Index(app){
        app.all('/api/*', (req, res) => {
            res.status(200).send("Welcome to new party API")
        })

    }
    static User(app){
        app.use('/api/users/', UserRoutes);
    }

    static Party(app){
        app.use('/api/party/', PartyRoutes);
    }
}

module.exports = IndexRoutes;