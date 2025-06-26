import { Product } from "./Product";
import Counter from "./Counter";
import { useState } from "react";

const ProductLists = () => {
  // const products = [
  //   "product1",
  //   "product2",
  //   "product3",
  //   "product4",
  //   "product5",
  //   "product6",
  // ];

  // const products = [
  //   { name: "product1", id: 1, availability: true },
  //   { name: "product2", id: 2, availability: true },
  //   { name: "product3", id: 3, availability: false },
  //   { name: "product4", id: 4, availability: true },
  //   { name: "product5", id: 5, availability: false },
  //   { name: "product6", id: 6, availability: true },
  // ];
  // function handleProductAdd(e) {
  //   console.log(e.target.value);
  //   if (e.key === "Enter") {
  //     const newProduct = {
  //       name: e.target.value,
  //       id: Math.random(),
  //       availability: true,
  //     };
  //     products.push(newProduct);
  //     console.log(products);
  //     e.target.value = "";
  //   }
  // }

  //Why we convert into state while adding the product, it should auto re-render

  // const [products, setProducts] = useState([
  //   { name: "product1", id: 1, availability: true },
  //   { name: "product2", id: 2, availability: true },
  //   { name: "product3", id: 3, availability: false },
  //   { name: "product4", id: 4, availability: true },
  //   { name: "product5", id: 5, availability: false },
  //   { name: "product6", id: 6, availability: true },
  // ]);

  // const handleProductAdd = (e) => {
  //   console.log(e.key);

  //   if (e.key === "Enter") {
  //     console.log(e.target);
  //     console.log(e.target.value);
  //     const newProduct = {
  //       name: e.target.value,
  //       id: Math.random(),
  //       availability: true,
  //     };
  //     setProducts([newProduct, ...products]);
  //   }
  // };

  // 6th
  const [products, setProducts] = useState([
    { name: "product1", id: 1, availability: true, quantity: 1 },
    { name: "product2", id: 2, availability: true, quantity: 3 },
    { name: "product3", id: 3, availability: false, quantity: 5 },
    { name: "product4", id: 4, availability: true, quantity: 8 },
    { name: "product5", id: 5, availability: false, quantity: 1 },
    { name: "product6", id: 6, availability: true, quantity: 12 },
  ]);

  const handleProductAdd = (e) => {
    console.log(e.key);

    if (e.key === "Enter") {
      console.log(e.target.value);
      const newProduct = {
        name: e.target.value,
        id: Math.random(),
        availability: true,
        quantity: 1,
      };
      setProducts([...products, newProduct]);
    }
  };

  return (
    <ul>
      {/* 1st */}
      {/* <li>Product 1</li>
      <li>Product 2</li>
      <li>Product 3</li>
      <li>Product 4</li>
      <li>Product 5</li>
      <li>Product 6</li> */}

      {/* 2nd */}
      {/* <Product name="Product 1" />
      <Product name="Product 2" />
      <Product name="Product 3" />
      <Product name="Product 4" />
      <Product name="Product 5" />
      <Product name="Product 6" /> */}

      {/* 3rd */}
      {/* {products.forEach((product) => {
        return <Product name={product} />;
      })}

      {console.log("hello")} */}

      {/* 3rd Continuation */}
      {/* {products.map((product) => {
        return <Product name={product} />;
      })} */}

      {/* 4th  */}
      {/* {products.map((product) => {
        return <Product name={product.name} />;
      })} */}

      {/* 5th */}
      {/* Conditional Rendering */}

      {/* <Counter /> */}
      {/* {products.map((product) => {
        return product.availability ? <Product name={product.name} /> : null;
      })} */}

      {/* For adding list */}
      <input
        type="text"
        placeholder="Add Product"
        onKeyDown={handleProductAdd}
      />
      {products.map((product) => {
        return product.availability ? (
          <Product
            key={product.id}
            name={product.name}
            quantity={product.quantity}
          />
        ) : null;
      })}
    </ul>
  );
};

export default ProductLists;
