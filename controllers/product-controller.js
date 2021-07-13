
import { getProductService,getPriceService } from '../services/products-service.js'

export const getProducts = async(req,res)=>{
    try{
     const result =  await getProductService()
     return {
         status:200,
         poroducts : result
     }
    }catch(err){
        throw new Error(err)
    }
}

/**
 * 
 * @param {*} payload 
 * In payload , we will get a list of ids of selected Products
 */
export const getPrice = async(req,res)=>{
    try{
        const price =  await getPriceService(req.body)
        return {
            status:200,
            price
        }
       }catch(err){
           throw new Error(err)
       }
   
}