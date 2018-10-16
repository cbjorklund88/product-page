import React from "react"
import Product from "./product.js"
const productsJson = require("./../products.json")

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>Produkter</h1>
        <div className="App">

          {productsJson.products.map((product) => {
            return <Product title= {product.name}
                            image={product.image}
                            type={product.type}
                            substance={product.substance}
                            size={product.size}
                            numberInPack={product.numberInPack}
                            price={product.price}
                            deliveryTime={product.deliveryTime}/>

          })}

        </div>
      </div>


    )
  }

}

export default App
