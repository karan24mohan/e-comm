import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "../Product.css";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:4540/product/${params.id}`);
    let data = await result.json();
    setName(data.name);
    setPrice(data.price);
    setCompany(data.company);
    setCategory(data.category);
  };

  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:4540/product/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({ name, price, company, category }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await result.json();
    console.log(data);
    navigate("/");
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
          </div>{" "}
          <div className="addProductButton">
            <button type="button" onClick={updateProduct}>
              {" "}
              Update Product{" "}
            </button>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </>
  );
};

export default UpdateProduct;
