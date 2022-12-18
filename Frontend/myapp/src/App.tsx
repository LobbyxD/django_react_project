import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductModel from "./Models/ProductModel";

function App() {
  const MY_SERVER = "http://127.0.0.1:8000/products";

  const [prods, setProds] = useState<[ProductModel]>();
  useEffect(() => {
    axios.get(MY_SERVER).then((res) => setProds(res.data));
  }, []);

  return (
    <div>
      {prods?.map((p, i) => (
        <div key={i}>
          {" "}
          Name: {p.desc} | Price: {p.price}
        </div>
      ))}
    </div>
  );
}

export default App;
