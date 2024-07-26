import React, {useState, useEffect} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast';
import Layout from '../components/Layout/Layout';
import { useCart } from '../context/Cart';
import { useAuth } from '../context/Auth';

const Store = () => {
  axios.defaults.withCredentials = true;


  const apiUrl = import.meta.env.VITE_API


    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useCart()
    const[auth, setAuth] = useAuth()
  
    // Get all products
    const getAllProducts = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/v1/products/get-products`);
        const productsWithPhotos = await Promise.all(
          data.products.map(async (product) => {
            try {
              const photoRes = await axios.get(`${apiUrl}/api/v1/products/product-photo/${product._id}`);
              return { ...product, photoUrl: photoRes.data.photoUrl };
            } catch (error) {
              console.error(`Error fetching photo for product ${product._id}`, error);
              return { ...product, photoUrl: "" };
            }
          })
        );
        setProducts(productsWithPhotos);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error("Something Went Wrong");
        setLoading(false);
      }
    };
  2
    useEffect(() => {
      getAllProducts();
    }, []);

  return (
    <Layout>
        <div className="text-4xl sm:text-5xl md:text-6xl bg-neutral-800 text-white h-screen">
            <div className="flex justify-center align-center items-center pt-[20%] sm:pt-[15%] md:pt-[10%]">Our Store</div>
        </div>
        <div className="bg-neutral-800 mt-[-25%] sm:mt-[-20%] md:mt-[-35%] lg:mt-[-35%] ">
            <div className=" hidden lg:block bg-red-700 h-2 w-3/4 sm:w-2/3 md:w-full rounded-xl mx-auto "></div>
        </div>
        <div className="flex min-h-screen items-center justify-center bg-neutral-800 px-4 sm:px-6 lg:px-8 pt-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                <div key={product._id} className="group relative cursor-pointer items-center justify-center overflow-hidden
                    transition-shadow hover:shadow-2xl hover:shadow-black">
                    <div className="h-64 sm:h-72 md:h-80 w-full sm:w-64 md:w-72">
                        <img src={product.photoUrl} alt={product.name} className="w-full h-full object-cover"></img>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black
                        group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70">
                    </div>
                    <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-start px-4 sm:px-6 md:px-9
                        text-center transition-all duration-500 group-hover:translate-y-[10%]">
                        <h1 className="text-2xl sm:text-3xl font-bold text-white">{product.name}</h1>
                        
                        <button className="bg-blue-500 rounded-2xl w-28 sm:w-32 mt-4 sm:mt-6 md:mt-8 h-9 sm:h-10 text-base sm:text-lg font-bold text-white 
                        transform hover:scale-110 duration-300 hover:bg-slate-600
                        " onClick={() => {
                            if(auth.user)
                                {setCart([...cart, product]);
                            localStorage.setItem(
                              "cart",
                              JSON.stringify([...cart, product])
                            );
                            toast.success("Item Added to cart");}
                            else
                                toast.error("Please Login to Add to Cart")
                          }}>
                            Add To Cart
                        </button>
                        <p className="mb-3 text-base sm:text-lg italic text-white opacity-100 transition-opacity duration-300
                            group-hover:opacity-100 mt-4 sm:mt-6 md:mt-9">{product.description}
                        </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Store