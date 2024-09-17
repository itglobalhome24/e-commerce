import React, { useEffect } from 'react'

const ProductDetail = (props) => {
    console.log(props.category, props.productID, "from ProductDetails")


    async function handleAddToCart(category, product) {
        const updatedCart = [...props.cart, { category: category, productID: product }]
        console.log(updatedCart, "Updated cart from product details")
        props.setCart(updatedCart)
        console.log(props.cart, "cart from product details")
    }

    let sampleCatalog = [
        [
            {
                id: 0,
                product_name: "Cordless Drill",
                price: 150,
                image_url: "../construction1.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 1,
                product_name: "Grinder",
                price: 200,
                image_url: "../construction2.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 2,
                product_name: "Leaf Blower",
                price: 180,
                image_url: "../construction3.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 3,
                product_name: "Vacuum",
                price: 220,
                image_url: "../construction4.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            }
        ],
        [
            {
                id: 0,
                product_name: "Shovel",
                price: 150,
                image_url: "../gardening1.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 1,
                product_name: "Rake",
                price: 200,
                image_url: "../gardening2.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 2,
                product_name: "Watering Can",
                price: 180,
                image_url: "../gardening3.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 3,
                product_name: "Pail",
                price: 220,
                image_url: "../gardening4.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            }
        ],
        [
            {
                id: 0,
                product_name: "Fertilizer",
                price: 150,
                image_url: "../farming1.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 1,
                product_name: "Wheelbarrow",
                price: 200,
                image_url: "../farming2.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 2,
                product_name: "Mower",
                price: 180,
                image_url: "../farming3.jpg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 3,
                product_name: "Pickaxe",
                price: 220,
                image_url: "../farming4.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            }
        ],
        [
            {
                id: 0,
                product_name: "Welding Machine",
                price: 150,
                image_url: "../automotive1.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 1,
                product_name: "Polisher",
                price: 200,
                image_url: "../automotive2.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 2,
                product_name: "Adjustable Wrench",
                price: 180,
                image_url: "../automotive3.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            },
            {
                id: 3,
                product_name: "Lubricant",
                price: 220,
                image_url: "../automotive4.jpeg",
                description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quisquam nostrum repellat impedit natus ipsam nisi veritatis commodi tenetur ipsum."
            }
        ]
    ]

    return (
        <div>
            <div className='inline-block w-1/2'>
                <img src={sampleCatalog[props.category][props.productID].image_url} className='w-3/5 h-auto my-12 mx-auto' />
            </div>
            <div className='inline-block box-border w-1/2 align-top p-36'>
                <h2 className='font-bold text-5xl mb-7'>{sampleCatalog[props.category][props.productID].product_name}</h2>
                <p className='inline-block text-3xl mb-11'>$ {sampleCatalog[props.category][props.productID].price}</p>
                <p className='inline-block text-2xl mb-7'>{sampleCatalog[props.category][props.productID].description}</p>
                <button onClick={() => handleAddToCart(props.category, props.productID)} className='w-20 h-9 bg-green-400'>Add</button>
            </div>
        </div>
    )
}

export default ProductDetail
