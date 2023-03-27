import React, { useState } from "react";
import "../Product.css";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }

    const userId = JSON.parse(localStorage.getItem("user"))._id;
    let result = await fetch("http://localhost:4540/addProduct", {
      method: "POST",
      body: JSON.stringify({
        name,
        price,
        category,
        userId,
        company,
      }),
      headers: { "Content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
  };

  return (
    <>
      <h2> Add Product Details </h2>{" "}
      <div className="addProductWrapper">
        <form>
          <div className="productNameWrapper">
            <label htmlFor="productName"> Product Name </label>{" "}
            <input
              type="text"
              name="productName"
              id="productName"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />{" "}
            {error && !name && (
              <span className="invalid-error"> Enter valid name </span>
            )}{" "}
          </div>{" "}
          <div className="priceWrapper">
            <label htmlFor="productPrice"> Product Price </label>{" "}
            <input
              type="text"
              name="productPrice"
              id="productPrice"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />{" "}
            {error && !price && (
              <span className="invalid-error"> Enter valid price </span>
            )}{" "}
          </div>{" "}
          <div className="categoryWrapper">
            <label htmlFor="productWrapper"> Product Category </label>{" "}
            <input
              type="text"
              name="productWrapper"
              id="productWrapper"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />{" "}
            {error && !category && (
              <span className="invalid-error"> Enter valid category </span>
            )}{" "}
          </div>{" "}
          <div className="companyWrapper">
            <label htmlFor="companyWrapper"> Product Company </label>{" "}
            <input
              type="text"
              name="compnayWrapper"
              id="companyWrapper"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            />{" "}
            {error && !company && (
              <span className="invalid-error"> Enter valid company </span>
            )}{" "}
          </div>{" "}
          <div className="addProductButton">
            <button type="button" onClick={addProduct}>
              {" "}
              Add Product{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
};

export default Product;
