class MySql {
    
    constructor(User, Password, Host, Port, Data_base) {
        this.user = User;
        this.password = Password;
        this.host = Host;
        this.port = Port;
        this.data_base = Data_base;

    }

    async ConectDB() {
        if (global.conexao && global.conexao.state != "disconected") {
            return global.conexao;
        }
        const mysql = require('mysql2/promise');
        /*
        const conn = await mysql.createConnection(`mysql://${this.user}:${this.password}@${this.host}:${this.port}/${this.data_base}`);
        `
            mysql://id18647630_root:9xu>ydcc~q+mT6js@127.0.0.1:3306/id18647630_cadastro
        `
        */
        const conn = await mysql.createConnection({
            host: this.host,
            port: this.port,
            password: this.password,
            user: this.user,
            database: this.data_base
        });
        
        global.conexao = conn;
        return conn;
        
        
    }

    async Select(select="") {
        if (select == "") {
            select = "SELECT * FROM cadastro ORDER BY id"
        }
        const conn = await this.ConectDB();
        const [rows] = await conn.query(select);
        return rows;
    }

    async Insert(name, email, password) {
        const conn = await this.ConectDB();
        await conn.query(
            `INSERT INTO cadastro(nome, email, senha) VALUES ('${name}', '${email}', '${password}');`
        );
    }

    async Update(query) {
        if (query) {
            const conn = await this.ConectDB();
            await conn.query(query);
        }
    }

    async Delete(id="") {
        if (id != null || id != "") {
            const conn = await this.ConectDB();
            await conn.query(`DELETE FROM cadastro WHERE id='${id}'`);
        }
    }
}

module.exports = MySql;