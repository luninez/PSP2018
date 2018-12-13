// import mongoose, {Schema} from 'mongoose'

const mongoose = require('mongoose');
const moment = require('moment');
// moment().tz
mongoose.connect('mongodb://localhost/test');

const PersonaSchema = new mongoose.Schema({
    // nombre: String
    nombre: {
        type: String,
        uppercase: true,
        required: true,
        trim: true
    },
    fechaNacimiento: {
        type: Date
    },
    aficiones: [{
        type: String,
        lowercase: true
    }]
});

const Persona = new mongoose.model('Persona', PersonaSchema);

const OpinionSchema = new mongoose.Schema({
    fecha: {
        type: Date,
        default: Date.now
    },
    texto: {
        type: String
    },
    usuario_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Persona'
    }
});

const Opinion = new mongoose.model('Opinion', OpinionSchema);

const PublicacionSchema = new mongoose.Schema({
    titulo: {
        type: String
    },
    autor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Persona'
    },
    opinones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Opinion'
    }]
});
const Publicacion = new mongoose.model('Publicacion', PublicacionSchema);


let lucia = new Persona();

lucia.nombre = 'lucia';
lucia.fechaNacimiento = moment('24/05/2018', 'DD/MM/YYYY');
// lucia.aficiones.push('comer');
// lucia.aficiones.push('dormir');
lucia.aficiones = ['comer', 'dormir'];

// let opinion1 =  new Opinion();
// opinion1.texto = 'No entiendo que haya gente que no le gusten las albondigas con patatas';

lucia.save().then((data) => {
    // console.log(data)
    // opinion1.usuario_id = data._id
    // opinion1.save().then((data) => {
    //         Opinion.find().populate('usuario_id').exec().then((data) => console.log(data))
    //     }).catch((error) => console.log(error));
});

let publicacion =  new Publicacion();
publicacion.titulo = 'Que ganas tengo de comer';
publicacion.autor = data._id;

publicacion.save().then((data2) => {
    let opinion1 = new Opinion();
    opinion1.texto = 'No entiendo que haya gente que no le gusten las albondigas con patatas';
    opinion1.autor = data_id;

    opinion1.save().then((data3) => {
        data2.opinones.push(opinion1);
        data2.save().then(() => {
            Publicacion.find().exec().then((data3) => {
                console.log(data3)
            })
        })
    })
});