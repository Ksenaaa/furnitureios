import { ProductMaterial } from 'model/productMaterial'

export const productColors = (colorsProduct: string[], materials: ProductMaterial[]) => {
    const newSet = new Set(colorsProduct)

    return materials.filter(material => newSet.has(material.id))
}
