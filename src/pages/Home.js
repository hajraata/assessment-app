import React from "react";
import ProductsList from "../components/ProductsList";
import Categories from "../components/Categories";
import Search from "../components/Search";
import Logo from "../components/Logo";

export default function Home() {
  return (
    <>
      <Logo />
      <Categories />
      <Search />
      <ProductsList />
    </>
  );
}
