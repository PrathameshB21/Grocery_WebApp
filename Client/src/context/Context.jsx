import { Children, createContext, use, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { dummyProducts } from '../assets/greencart_assets/assets.js'
import { toast } from "react-toastify";
export const AppContext = createContext();


export const AppContextProvider = ({ children }) => {
    // const currency =import.meta.VITE_Currency;
    const currency = import.meta.env.VITE_CURRENCY;

    const navigate = useNavigate()
    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(null)
    const [isUserloggedIn, setIsUserLoggedIn] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false)
    const [products, setProducts] = useState([]);
    // const [cartData, setCartData] = useState(0)
    const [cartItems, SetCartItems] = useState({})

    // //accesing products
    // const[firstProduct]=dummyProducts;


    //Fetch products
    const fetchProducts = async () => {
        console.log(`fetched products`)
        await setProducts(dummyProducts)
    }


    //Cart Data handling 

    //AddToCart Function

    const addToCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        console.log(`intial cartData`, cartData)
        if (cartData[itemId]) {
            console.log(`cartdata in already availble items loop`, cartData[itemId], cartData)
            cartData[itemId] += 1;
            console.log(`changed qunatity`, cartData[itemId], cartData)
        } else {
            cartData[itemId] = 1;
            console.log(`new product added in cart`, cartData[itemId], [cartData])
            toast.success("Added to Cart");
        }
        SetCartItems(cartData);
    }

    // //testing add to card function manually
    // const product = products[0];
    // const productId = product?._id;



    //update cart
    const updateCart = (itemId, quantity) => {
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        SetCartItems(cartData);
        toast.success('cart updated')
    }

    //remove from cart
    const removeFromCart = (itemId) => {
        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
            cartData[itemId] -= 1
            if (cartData[itemId] === 0) {
                delete cartData[itemId]
                toast.success('removed from cart')
            }
        }

        SetCartItems(cartData)
    }

    useEffect(() => {
        fetchProducts();
        console.log(`showUserLoggin`,showUserLogin)
    }, [products ,showUserLogin])


    const Value = {
        navigate, user, setUser, isSeller, setIsSeller, isUserloggedIn, setIsUserLoggedIn, products, currency,
        addToCart, updateCart, removeFromCart, cartItems,showUserLogin,setShowUserLogin
    }
    return <AppContext.Provider value={Value}>
        {children}
    </AppContext.Provider>


}

export const useAppContext = () => {
    return useContext(AppContext)
}


