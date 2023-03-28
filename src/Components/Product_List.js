import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Product_List.css";

const Product_List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await fetch("http://localhost:4540/products");
    const data = await result.json();
    setProducts(data);
    console.log(data);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:4540/product/${id}`, {
      method: "DELETE",
    });
    let data = await result.json();
    if (data) {
      alert("Record is Deleted");
    }
    getProducts();
  };

  return (
    <div className="productListWrapper">
      <h1> Products List </h1>{" "}
      <table>
        <thead>
          <tr>
            <th> S.No </th> <th> Name </th> <th> Product Price </th>{" "}
            <th> Product Company </th> <th>Action</th>
          </tr>{" "}
        </thead>{" "}
        <tbody>
          {" "}
          {products.map((e, index) => {
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
          })}{" "}
        </tbody>{" "}
      </table>{" "}
    </div>
  );
};

export default Product_List;
