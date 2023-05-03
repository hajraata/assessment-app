import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { storeProducts } from "../redux/actions.js";

import "../styles/productslist.css";

export default function ProductsList() {
  const products = useSelector((state) => state.products.products);
  const wishlist = useSelector((state) => state.products.wishList);
  const selectedcategory = useSelector(
    (state) => state.products.selectedcategory
  );
  const [newProdsArr, setNewProdsArr] = useState(products);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      let res;
      if (selectedcategory === "all") {
        res = await fetch("https://fakestoreapi.com/products");
      } else {
        res = await fetch(
          `https://fakestoreapi.com/products/category/${selectedcategory}`
        );
      }
      const results = await res.json();
      dispatch(storeProducts(results));
    };

    getProducts();
  }, [dispatch, selectedcategory]);

  useEffect(() => {
    let arr = products.map((product) => {
      return { ...product, inwishlist: "false" };
    });
    setNewProdsArr(arr);

    if (products.length > 0 && wishlist.length > 0) {
      arr.map((obj) => {
        wishlist.filter((obj2) => {
          if (obj.id === obj2.id) {
            return (obj["inwishlist"] = "true");
          }
          return obj;
        });

        return setNewProdsArr(arr);
      });
    }
  }, [products, wishlist]);

  return (
    <div className="products-container">
      {newProdsArr.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
