import React from "react"
import Product from "./product.js"
// const productsJson = require("./../products.json")
const productApi = "http://localhost:8080/products"

class App extends React.Component {
  state = {
      products: []
    }

  componentDidMount() {
    fetch(productApi)
      .then(response => {
        return response.json()
    })
    .then(json => {
      this.setState({
        products: json
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Produkter</h1>
        <h2>Lägg till produkt</h2>
        <section>
        <form method ="post" action="http://localhost:8080/products">
        <lable>Namn:<input type ="text" name="name" placeholder="Namn" required /></lable>
        <lable>Typ:<input type ="text" name="type" placeholder="Typ" required /></lable>
        <lable>Substans:<input type ="text" name="substance" placeholder="Substans" required /></lable>
        <lable>Storlek:<input type ="text" name="size" placeholder="Storlek(i mg)" required /></lable>
        <lable>Antal i förpackning:<input type ="text"name="numberInPack" placeholder="Antal" required /></lable>
        <lable>Pris:<input type ="number" name="price" placeholder="Pris" required /></lable>
        <lable>Leveranstid:<input type ="text"name="deliveryTime" placeholder="Leveranstid" required /></lable>
        <lable>Bild:<input type ="url" name="image" placeholder="Klistra in din bild url" /></lable>
        <input type="submit" />
        </form>
        </section>
        <div className="App">
          {this.state.products.map((product) => {
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
