import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
    nomes: {type : String}
});

const usuarioModel = mongoose.models.usuario ||
    mongoose.model('usuario', usuarioSchema)

export default usuarioModel