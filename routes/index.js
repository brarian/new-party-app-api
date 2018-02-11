const UserRoutes = require("./userRoutes");
const PartyRoutes = require("./partyRoutes");
const LoginRoutes = require("./loginRoutes");
const StatusUpdate = require("./statusUpdateRoute")

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

    static Profile(app){
        app.use('/api/profile', (req, res) => {
            res.status(200).send("this is the profile page")
        })
    }

    static Login(app){
        app.use('/api/login', LoginRoutes);
    }

    // static StatusUpdate(app){
    //     app.use('/api/status', (req, res) => {
    //         res.status(200).send('status route function');
    //     })
    // }   

}

module.exports = IndexRoutes;