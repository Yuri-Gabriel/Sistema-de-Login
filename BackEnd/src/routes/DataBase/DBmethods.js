const MySql = require('./DB');

const DB_User = process.env.DB_User;
const DB_Password = process.env.DB_Password;
const DB_Host = process.env.DB_Host;
const DB_Port = process.env.DB_Port;
const DB_Table = process.env.DB_Table;

const db = new MySql(
    DB_User,
    DB_Password,
    DB_Host,
    DB_Port,
    DB_Table
);

const NameCapitalizer = (name) => {
    let namecapitalized = "";
    for(let c = 0; c < name.length; c++) {
        if (c == 0) {
            namecapitalized = name[0].toUpperCase();
        } else {
            namecapitalized += name[c];
        }
    }
    return namecapitalized;
}

module.exports = {
    GetAllUsers: async () => {
        return await db.Select();
    },
    
    SaveData: async (name, email, password) => {
        await db.Insert(
            NameCapitalizer(name),
            email,
            password
        );
    },
    
    GetUser: async (email) => {
        let user = {};
        let query = "";
        if (email != "") {
            query = `SELECT * FROM cadastro WHERE email = "${email}"`;
            [ user ] = await db.Select(query);
        }
        return user;
    },
    
    UpdateUser: async (Id, NewInfo) => {
        if (NewInfo.name && NewInfo.name != "") {
            await db.Update(`UPDATE cadastro 
                             SET nome = '${NewInfo.name}' 
                             WHERE id = '${Id}'`);
        }
        if (NewInfo.email && NewInfo.email != "" ) {
            await db.Update(`UPDATE cadastro 
                             SET email = '${NewInfo.email}' 
                             WHERE id = '${Id}'`);
        }
        if (NewInfo.password && NewInfo.password != "") {
            await db.Update(`UPDATE cadastro 
                             SET senha = '${NewInfo.password}' 
                             WHERE id = '${Id}'`);
        }
    },
    
    DeleteUser: async (Id) => {
        await db.Delete(Id);
    },

    CheckIfTheUserExists: async (username, email, password) => {
        const querry = `SELECT * FROM cadastro WHERE (nome = '${username}' or email = '${email}' or senha = '${password}');`
        const result = await db.Select(querry);
        return result.length != 0 ? false : true;
    },

    InformationReceived: (username, email, password) => {
        if ((username && email && password) &&
            (username != "" && email != "" && password != "")) {
            return true;
        } else {
            return false;
        }
    }
}