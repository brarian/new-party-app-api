const UserRoutes = require("./userRoutes");
const PartyRoutes = require("./partyRoutes");
const LoginRoutes = require("./loginRoutes");
class IndexRoutes {
    static Index(app){
        app.all('/*', (req, res) => {
            res.status(200).send("Welcome to new party API")
        })

    }

    static User(app){
        app.use('/api/users', UserRoutes);
    }

    static Party(app){
        app.use('/api/party', PartyRoutes);
    }

    static About(app){
        app.use('/api/about', (req, res) => {
            res.status(200).send("welcome to the about page")
        })
    }

    static Login(app){
        app.use('/api/login', LoginRoutes);
    }

}

module.exports = IndexRoutes;