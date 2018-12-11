// import mongoose, {Schema} from 'mongoose'

const mongoose = require('mongoose');
const moment = require('moment');
// moment().tz
mongoose.connect('mongodb://localhost/test');

const OpinionSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    texto: {
        type: String
    }
})

const Opinion = new mongoose.model('Opinion', OpinionSchema);

const PersonaSchema = new mongoose.Schema({
    // nombre: String
    nombre: {
        type: String,
        uppercase: true,
        required: true,
        triem: true
    },
    fechaNacimiento: {
        type: Date
    },
    aficiones: [{
        type: String,
        lowercase: true
    }],
    opiniones: [{
        type: OpinionSchema
    }]
});

const Persona = new mongoose.model('Persona', PersonaSchema);

let opinion1 =  new Opinion();
opinion1.texto = 'No entiendo que haya gente que no le gusten las albondigas con patatas';

let lucia = new Persona();

lucia.nombre = 'lucia';
lucia.fechaNacimiento = moment('24/05/2018', 'DD/MM/YYYY');
// lucia.aficiones.push('comer');
// lucia.aficiones.push('dormir');
lucia.aficiones = ['comer', 'dormir'];

lucia.opiniones = opinion1;

lucia.save().then((data) => console.log(data));