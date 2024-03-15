import { ProductMaterial } from 'model/productMaterial'

export const productColors = (colorsProduct: string[], colors: ProductMaterial[]) => {
    const dataColors = [] as ProductMaterial[]

    colorsProduct.forEach(id => {
        const findColor = colors.find(color => color.id === id) as ProductMaterial

        return dataColors.push(findColor)
    })

    return dataColors
}
