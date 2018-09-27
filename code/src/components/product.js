import React from "react"

class Product extends React.Component {

  render() {
    return (

       <div className="product">

        <h2>{this.props.title}</h2>
        <img className="productImage" src={this.props.image}/>
        <p>&#9733; {this.props.type}</p>
        <p>&#9733; {this.props.substance}</p>
        <p>&#9733; {this.props.size}</p>
        <p>&#9733; {this.props.numberInPack} st i förpackningen</p>

        <div className="priceAndBuyButton">
          <h2>{this.props.price} kr</h2>
          <button>Köp</button>
        </div>

        <div className="deliveryTime">
          <p>Leveranstid: {this.props.deliveryTime}</p>
        </div>

      </div>

    )
  }

}

export default Product
