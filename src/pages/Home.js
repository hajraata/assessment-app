import React from "react";
import ProductsList from "../components/ProductsList";
import Categories from "../components/Categories";
import Search from "../components/Search";

export default function Home() {
  return (
    <>
      <Categories />
      <Search />
      <ProductsList />
    </>
  );
}
