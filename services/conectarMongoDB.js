import mongoose from "mongoose";

export const conectarMongoDB = {} 

if(mongoose.connections[0].readyState) {
    return handler(req, res);
}

const {DB_CONEXAO_STRING} = process.env;

mongoose.connection.on('connected', () => console.log('Banco de dados conectado'));
mongoose.connection.on('error', error => console.log(`Ocorreu erro ao conectar no banco: ${error}`));
mongoose.connection(DB_CONEXAO_STRING);

return handler(req, res);