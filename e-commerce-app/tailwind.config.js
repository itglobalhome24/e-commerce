/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/App.jsx",
        "./src/pages/home/index.jsx",
        "./src/pages/categories/index.jsx",
        "./src/pages/products/index.jsx",
        "./src/pages/product_detail/index.jsx",
        "./src/pages/login/index.jsx",
        "./src/pages/cart/index.jsx",
        "./src/pages/order_history/index.jsx",
        "./src/pages/register/index.jsx",
        "./src/pages/profile/index.jsx",
        "./src/pages/edit_profile/index.jsx",
        "./src/components/Navbar.jsx",
        "./src/components/Header.jsx",
        "./src/components/Footer.jsx",
        "./src/components/ProductCard.jsx",
        "./src/components/CategoryCard.jsx"
    ],
    theme: {
        screen: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                nanum: ["Nanum Myeongjo", "serif"]
            },
            colors: {
                primary: "#fd3d57",
            },
        }
    },
    plugins: [],
}
