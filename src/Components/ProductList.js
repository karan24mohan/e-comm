import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Product_List.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await fetch("http://localhost:4900/products");
    const data = await result.json();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:4900/product/${id}`, {
      method: "DELETE",
    });
    let data = await result.json();
    if (data) {
      alert("Record is Deleted");
    }
    getProducts();
  };

  const handleSearch = async (event) => {
    let key = event.target.value;
    if (key) {
      let result = await fetch(`http://localhost:4900/search/${key}`);
      let data = await result.json();
      if (result) {
        setProducts(data);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="productListWrapper">
      <h1> Products List </h1>{" "}
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search Product"
        onChange={handleSearch}
        autoComplete="off"
      />{" "}
      <table>
        <thead>
          <tr>
            <th> S.No </th> <th> Name </th> <th> Product Price </th>{" "}
            <th> Product Company </th> <th>Action</th>
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {products.length > 0 ? (
            products.map((e, index) => {
              return (
                <>
                  <tr key={index}>
                    <td> {index + 1} </td> <td> {e.name} </td>{" "}
                    <td> {e.price} </td> <td> {e.company} </td>{" "}
                    <td>
                      {" "}
                      <button
                        onClick={() => {
                          deleteProduct(e._id);
                        }}
                      >
                        Delete{" "}
                      </button>{" "}
                      <Link to={`/update/${e._id}`}>
                        {" "}
                        <button> Update </button>{" "}
                      </Link>{" "}
                    </td>{" "}
                  </tr>{" "}
                </>
              );
            })
          ) : (
            <h1 className="noProductFound"> No Product Found </h1>
          )}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default ProductList;
