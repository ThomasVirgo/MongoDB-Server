const { init } = require('../db/init');

class User{
    constructor(name, email){
        this.email = email;
        this.name = name;
    }

    static create(name, email){
        return new Promise (async (resolve,reject) => {
            try {
                const db = await init();
                let userData = await db.collection('users').insertOne({name, email});
                let newUser = new User(name, email);
                resolve(newUser);
            } catch (error){
                reject(error);
            }
        })
    }
}

module.exports = { User };