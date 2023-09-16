import './Products.css'
import { p1, p2, p3 , p4 ,p5, p6 } from "../../Assets/index";
const productData = [
  {
    title: 'Pink Flower Crockery set.',
    imgUrl: p1,
  },
  {
    title: 'Cyan Flower Crockery set.',
    imgUrl: p2,
  },
  {
    title: 'Aqua Flower Crockery set.',
    imgUrl: p3,
  },
  {
    title: 'Dark and White Crockery set.',
    imgUrl: p4,
  },
  {
    title: 'Golden strip Crockery set.',
    imgUrl: p5,
  },
  {
    title: 'Golden Premium Crockery set.',
    imgUrl: p6,
  }
];

function ProductsList() {
  return (
    <div className='products-page flex space-evenly align-center flex-wrap gap-5xl'>
    {
        productData.map((product, index) => (
            <div key={index} className='each-product-card flex column gap-xl'>
                <img src={product.imgUrl} alt="Product" />
                <main className='flex column justify-center align-center'>
                    <h3>{product.title}</h3>
                </main>
            </div>
        ))
    }
    </div>
  )
}

export default ProductsList