 const products = {
    name: 'products',
    type: 'document',
    title: 'Products',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Decription'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
    ]
}
export default products