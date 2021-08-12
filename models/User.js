const { init } = require('../db/init');

class User{
    constructor(name, email, password){
        this.email = email;
        this.name = name;
        this.password = password;
    }

    static create(name, email, password){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                await db.collection('users').insertOne({name, email, password});
                let newUser = new User(name, email, password);
                resolve(newUser);
            } catch (error){
                reject(error);
            }
        })
    }

    static findByEmail(userEmail){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                let userData = await db.collection('users').find({ email:userEmail }).toArray();
                userData = userData[0];
                console.log(userData);
                let foundUser = new User(userData.name, userData.email, userData.password);
                resolve(foundUser);
            } catch (error){
                reject(error);
            }
        })
    }
}

module.exports = { User };