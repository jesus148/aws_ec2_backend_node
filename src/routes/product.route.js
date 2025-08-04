
import express from 'express';

import { getProducts , createProduct , updateProduct , deleteProduct}  from "../controllers/product.controller.js";


const router = express.Router();



// http://3.83.46.40:5000/api/products
// body > raw
// {
//     "succes": true,
//     "data": {
//         "name": "jesus",
//         "price": 23,
//         "image": "https://images.squarespace-cdn.com/content/v1/5558266de4b0c2b7c9e3f783/1466456585848-Q6FNDSL47BP71EJB4OHW/Denise+2.jpg?format=500w",
//         "_id": "6890569d58e31db0e769fe0e",
//         "createdAt": "2025-08-04T06:43:41.050Z",
//         "updatedAt": "2025-08-04T06:43:41.050Z",
//         "__v": 0
//     }
// }
router.post("/",createProduct);


// http://3.83.46.40:5000/api/products/6890569d58e31db0e769fe0e
router.delete("/:id",deleteProduct);


// http://3.83.46.40:5000/api/products
router.get("/",getProducts );



// http://3.83.46.40:5000/api/products/6890569d58e31db0e769fe0e
// {
//     "name":"actric", 
//     "price":232,
//     "image":"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/performer%20images/200262/denisefaye-petadoptionfestival-15.jpg"
// }
router.put("/:id", updateProduct);



export default router;