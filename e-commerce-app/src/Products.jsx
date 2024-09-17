import React from 'react'
import ProductCard from './components/ProductCard'

const Products = (props) => {
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
        <div className='w-full h-full box-border'>
            {sampleCatalog[props.category].map(function (data, index) {
                return (
                    <ProductCard key={index} product_id={data.id} name={data.product_name} price={data.price} image_url={data.image_url} setProductID={props.setProductID} />
                )
            })}
        </div>
    )
}

export default Products
