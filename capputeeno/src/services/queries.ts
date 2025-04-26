export const GET_INITIAL_PRODUCTS = `
    query {
        allProducts {
            image_url
            name
            price_in_cents
            id
        }
    }
`