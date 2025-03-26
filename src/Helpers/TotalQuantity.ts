import ProductInterface from "@/Types/Interfaces/ProductInterface";

export default function TotalQuantity(products: ProductInterface[]) {
    let totalQuantity=0
    for (let i = 0; i < products.length; i++) {
        totalQuantity+=products[i].quantity!
        
    }
    return totalQuantity
}
