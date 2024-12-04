//COMO Y EL DONDE SE GUARDAN LOS DATOS
import{schema, model} from "mongose";

const Eschemas = new Schema({
    carro:{
        type:String
    },
    Kilometraje:{
        type:Number
    }
})
export const Modelo = new model("Tabla de carros", Eschema)