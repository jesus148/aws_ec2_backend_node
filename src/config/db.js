
import mongoose from 'mongoose';


// conexion a la bd

export const connectDB = async () =>{
    // todo ok
    try {

        
        // conectando pasa el .env
        const conn = await mongoose.connect(process.env.MONGO_URI);

        // Es el objeto que Mongoose crea para representar la conexión activa a la base de datos.
        // Contiene información útil sobre la conexión, como el nombre del host, el puerto y el estado de la conexión.
        // conn.connection.host : Representa el host al que la aplicación está conectada.
        console.log(`MongoDB connectd : ${conn.connection.host}`);
    // si hay error    
    } catch (error) {
        console.error(`error :${error.message}`);

        // process.exit :Es una función de Node.js que termina el proceso de ejecución del programa.
        // 0: Indica que el programa terminó sin errores.
        // 1: Indica que el programa terminó debido a un error.
        process.exit(1);
    }
}