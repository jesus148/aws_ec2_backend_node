
import mongoose from 'mongoose';
import Product from '../models/product.model.js';



// OBTIENE TODO PRODUCTOS
export const getProducts = async (req , res)=>{
    // ok
    try {
        // obtien todo
        const product = await Product.find({});
        // devuelve al cliente
        res.status(200).json({
            succes:true, 
            data : product
        })
    // error    
    } catch (error) {

        // printer dev
        console.log("error in fetch products : " , error.message );

        // retorno al cliente
        res.status(500).json({
            succes:false,
            message:"server error"
        })
    }
}



// METODO CREA 1 PRODUCTO
export const createProduct = async(req , res)=>{
    // get all request cliente
    const product = req.body;

    // verifica si esta vacio
    if(!product.name || !product.price || !product.image){
        return res.status(400).json({succes : false , message: "please provide all fields"})
    }

    // crea el producto con la instancia del modelo
    const newProduct = new Product(product);

    // todo ok
    try {
        // ejecuta el create 
        await newProduct.save();
        // envia un objeto al cliente
        // data : newProduct : envia todo el objeto registrado
        res.status(201).json({succes:true , data : newProduct});
    // error    
    } catch (error) {
        console.error("error al crear el producto : ", error.message );
        res.status(500).json({
            succes:false, 
            message:"server error"
        })
    }
}






// METODO ACTUALIZA 1 PRODUCTO
export const updateProduct = async(req , res)=>{
    // obtiene parametro de la url
    const { id }= req.params;

    // obtiene el cuerpo de la peticion
    const product =req.body;
    
    // verifica si es un id de mongodb valido
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            succes:false,
            message:"invalid id mongodb"
        })
    }

    // todo ok
    try {
        // atualiza el producto y devuelve el objeto nuevo actualizado
        const updateProduct = await Product.findByIdAndUpdate(id , product , {new:true});
        
        // retorno al cliente
        res.status(200).json({
            succes : true ,
            data: updateProduct
        })
    // si hay error    
    } catch (error) {
        // retorno al cliente
        res.status(500).json({
            succes:false,
            message:"SERVER ERROR"
        })
    }
}




// METODO ELIMINA 1 PRODUCTO
export const deleteProduct =  async (req, res)=>{
    
    // get parametro url
    const {id} = req.params;

        
    // verifica si es un id de mongodb valido
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            succes:false,
            message:"invalid id mongodb"
        })
    }

    // todo ok
    try {
        // elimina el producto
        await Product.findByIdAndDelete(id);

        // devulve cliente
        res.status(200).json({
            succes:true, 
            message:"product delet"
        })
    // error    
    } catch (error) {
        // printer dev
        console.error("error al crear el producto : ", error.message );
        // deveulve al cliente
        res.status(404).json({
            succes:false, 
            message:"product not found"
        })
    }
}