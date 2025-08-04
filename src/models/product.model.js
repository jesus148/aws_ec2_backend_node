
import mongoose from 'mongoose';



// para crear la instancia
const productSchema =new mongoose.Schema({
    // atributos para la clase
    name:{
        // tipo de dato
        type:String,
        // requerido
        required:true
    },
    price:{
        type:Number, 
        required:true
    },
    image:{
        type:String , 
        required:true
    }
}, {
    // aparece la fecha de registro y actualizacion
    timestamps:true
});



// creacion de los metodos para la bd
// 'Product' en mongodb en la bd saldra como products
const Product= mongoose.model('Product' , productSchema);


// exporta
export default Product;