/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/Home.jsx",
    "./src/Categories.jsx",
    "./src/Products.jsx",
    "./src/ProductDetail.jsx",
    "./src/Login.jsx",
    "./src/Cart.jsx",
    "./src/OrderHistory.jsx",
    "./src/Register.jsx",
    "./src/Profile.jsx",
    "./src/EditProfile.jsx",
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
