import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const GetProducts = () => {
  axios.defaults.withCredentials = true;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = import.meta.env.VITE_API

  
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
  
    useEffect(() => {
      getAllProducts();
    }, []);

  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">All Products List</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/products/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src= {p.photoUrl}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GetProducts;