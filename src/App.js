import logo from "./logo.svg";
import "./App.css";

function App() {
  const products = [
    { name: "laptop", price: "20000tk" },
    { name: "Desktop", price: "15000tk" },
    { name: "Mobile", price: "1000tk" },
    { name: "Tv", price: "1900tk" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Details</h1>
        {
          // Create Dynamic

          products.map((proDynamic) => (
            <Product product={proDynamic}></Product>
          ))
        }

        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}
      </header>
    </div>
  );

  function Product(props) {
    const style = {
      border: "1px solid gray",
      borderRadius: "5px",
      backgroundColor: "gray",
      height: "230px",
      width: "300px",
      float: "left",
      margin: "5px",
    };

    const { name, price } = props.product;

    return (
      <div style={style}>
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button>Buy Now</button>
      </div>
    );
  }
}

export default App;
