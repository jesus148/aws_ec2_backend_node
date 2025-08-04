import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from "./config/db.js";
import mongoose from 'mongoose';
import  productRouter  from './routes/product.route.js';


// solo si usamos el front y el back junstos en el folder
import path from "path";


// CREAR EL SERVIDOR DE BACKEND



// pa usar las varibales de enterno osea el .env en todo el proyecto
dotenv.config();


// crea el server
const app = express();


// variable entorno port
const PORT=process.env.PORT || 5000;

// C:\Users\jesus\Desktop\JESUS\REACT JS\PORTAFOLIO\mern_crud_reatc_2_back
const __dirname = path.resolve();


// para recibir datos del cliente en formato json y nosotros enviar
app.use(express.json());



// router principal
app.use("/api/products", productRouter);





// back y front juntos en produccion
// mern_crud_reatc_2_back : carpeta principal borra todos los node_modules

// Esta línea verifica si la aplicación está corriendo en modo producción.
if(process.env.NODE_ENV === "production"){

    // junta las rutas
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    // cualquier endpint devuelve 
    app.get("*", (req , res)=>{
        res.sendFile(path.resolve(__dirname, "frontend" , "dist" , "index.html" ));
    })
}







// printer la url .env
// console.log(process.env.MONGO_URI);



// asigna puerto
app.listen(PORT , ()=>{
    connectDB();
    console.log("server started at http://localhost: " + PORT);
})








// app.use : 

// Montar Middleware: Usas app.use() para registrar funciones middleware que se ejecutarán en cada solicitud entrante (o en solicitudes que coincidan con un patrón específico de URL).
// En Express, app.use() es un método que se utiliza para montar middleware en tu aplicación. Un middleware es una función que tiene acceso al objeto de solicitud (req), al objeto de respuesta (res) y a la siguiente función en el ciclo de vida de la solicitud (next). Los middleware se ejecutan en el orden en que se definen, y se pueden usar para realizar tareas como la validación, el análisis de datos, la autenticación, el manejo de errores, entre otras.
// Algunas razones para usar app.use:
// Modularización y Reutilización: Puedes crear middleware que se pueda aplicar a múltiples rutas sin repetir el código.
// Preprocesamiento de Solicitudes: Puedes hacer validaciones o transformaciones antes de que la solicitud llegue a las rutas de tu API.
// Manejo de Errores: Puedes definir middleware para manejar errores de manera centralizada.
// Autenticación y Autorización: Puedes usar app.use para verificar si un usuario está autenticado antes de procesar cualquier ruta.
// ¡Exactamente! El método app.use en Express no solo se utiliza para definir middleware, sino que también se puede utilizar para montar un router en la aplicación principal. De esta forma, asocias un router a una ruta base y todas las rutas definidas dentro del router serán accesibles a través de esa base.
// Sí, app.use no solo sirve para aplicar middleware, sino que también es la forma en que unimos routers con un prefijo de ruta en nuestra aplicación Express. Esto permite estructurar y organizar las rutas de manera eficiente y escalable.