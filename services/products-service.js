
/**
 * All the logic will be here
 * 
 */
import {products} from '../data/products.js'
export const getProductService = async()=>{
    try{
       if(products.length > 0){
           // for production will quert like products.find() 
           return products
       }else{
           throw new Error("No Products available to show")
       }
    }catch(err){
        throw new Error(err)
    }
}

/**
 * 
 * @param {*} payload 
 * In payload , we will get a list of ids of selected Products
 * Case- We can restrict the user that not to choose any product if the creative cloud product chose
 *  from frontend as well 
 *   but here we have done in backend
 * 
 * ....... here we are  getting the selectec products ids from payload
 */
export const getPriceService = async(payload)=>{
   const {selectedProducts} = payload.selectedProducts;
   //Selected Products like [1,2,3]
   if(selectedProducts.length<0){
      throw new Error("No Product Selected") 
   }else{
       //check if person has chosen other products along with "creative all cloud product"
       if(selectedProducts.includes[1] && selectedProducts.length >1){
           throw new Error("You can't choose any other product along with Creative Cloud All Apps")
       }else{
           let totalPrice = 0;
           // get Price of all the products
           await selectedProducts.map((productId)=>{
              // get that selected productId from the data to get the price
                const productData = products.find((product)=>{
                   return product.id === productId
                })
                totalPrice = totalPrice + (productData.price*12) // for Annual subscription
           })
           return totalPrice
       }
   }
}