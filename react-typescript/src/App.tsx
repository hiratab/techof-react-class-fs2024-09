import { useState } from 'react'
import './App.css'
import Product from './components/Product'
import TechProduct from './components/TechProduct';

function App() {
  return (
    <div>
      <Product
        title='title'
        description='description'
        price={10.0}
        stock={10}
        outOfStock={false}
      />
      <Product
        title='title'
        description='description'
        price={10.0}
        stock={10}
      />
      <TechProduct 
        title='Tech'
        description='tech description'
        price={100.8354389}
        stock={1}
        techSpecs={['spec', 'spec1']}
      />
    </div>
  )
}

export default App
