import './Products.css'
import { product1, product2 } from "../../Assets/index";
const productData = [
    {
      title: 'Real value premium golden print dinner set 72 pcs',
      imgUrl: product2,
    },
    {
      title: 'Real value golden line dinner set 72 pcs',
      imgUrl: product2,
    },
    {
      title: 'Real value premium golden printed tea souccer set 27 pcs',
      imgUrl: product2,
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