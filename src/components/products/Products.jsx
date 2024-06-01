"use client";

import React from "react";
import "./Products.scss";
import Image from "next/image";
import Link from "next/link";

const Products = ({ data }) => {
  let productsItems = data?.map((el) => (
    <div className="products__main" key={el.id}>
      <Link href={`/product/${el.id}`}>
        <Image
          className="products__image"
          width={100}
          height={100}
          src={el.image}
        />
      </Link>
      <h3 className="products__title">{el.title}</h3>
      <p className="products__category">{el.category}</p>
      {/* <p>{el.rate}</p> */}
      <div className="product__spc">
        <span className="product__dollar">$299,43</span>
        <span className="product__price">$534,33</span>
        <span className="product__discount-price">24% Off</span>
      </div>
    </div>
  ));

  return <div className="products-menu">{productsItems}</div>;
};

export default Products;
