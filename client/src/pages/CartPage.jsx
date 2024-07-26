import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/Cart";
import { useAuth } from "../context/Auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const apiUrl = import.meta.env.VITE_API


  // Calculate total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.forEach((item) => {
        total += item.price;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Remove item from cart
  const removeCartItem = (pid) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== pid);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {!auth?.user
                ? "Hello Guest"
                : `Hello ${auth?.user?.name}`}
            </h1>
            <p className="mt-2 text-gray-600">
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout!"
                  }`
                : "Your cart is empty"}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              {cart?.map((product) => (
                <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-md mb-4" key={product._id}>
                  <div className="md:w-1/3 p-4">
                    <img
                      src={product.photoUrl}
                      alt={product.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                  <div className="md:w-2/3 p-4 flex flex-col justify-between">
                    <p className="text-xl font-semibold text-gray-800">{product.name}</p>
                    <p className="text-gray-600">{product.description.substring(0, 30)}...</p>
                    <p className="text-lg font-bold text-gray-900">Price: {product.price}</p>
                    <button
                      className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                      onClick={() => removeCartItem(product._id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Cart Summary</h2>
              <p className="text-gray-600">Pesa Hi Pesa Hoga!!</p>
              <hr className="my-4" />
              <h4 className="text-lg font-bold text-gray-900 mb-4">Total: {totalPrice()}</h4>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-gray-800">Current Address</h4>
                  <h5 className="text-gray-600">{auth?.user?.address}</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default CartPage;
