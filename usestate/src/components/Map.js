import React from 'react'
import { useState, useEffect} from 'react'

function Map() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((data) => {
            setProducts(data)
            console.log(data)
        })
        .catch((error) => {console.log(error)})
    }, [])
  return (
    <div>
      <div className='product-container'>
        {products.map((product) => {
          return (
            <div key={product.id} className='product'>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <h4>{product.category}</h4>
              <button>${product.price}</button>
              <img src={product.image} alt={product.title} className='product-img'/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Map