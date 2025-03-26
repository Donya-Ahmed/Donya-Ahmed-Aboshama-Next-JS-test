import ProductInterface from "@/Types/Interfaces/ProductInterface";

export default function TotalPrice(products: ProductInterface[]) {
    let totalPrice=0
    for (let i = 0; i < products.length; i++) {
        totalPrice+=products[i].quantity!*products[i].price
        
    }
    return totalPrice
}
