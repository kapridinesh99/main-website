import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ProductsList from '../Components/Products/ProductsList';

function Products() {
  return (
    <div>
        <Header />
        <main>
            <h1>Products</h1>
            <br /> <br /> 
            <ProductsList />
        </main>
        <Footer />
    </div>
  )
}

export default Products