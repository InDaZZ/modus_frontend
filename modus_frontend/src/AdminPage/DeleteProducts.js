import Products from '../Products/Products.js';

function DeleteProducts({ products, deleteProduct,changeProduct }) {
    return (
        <>  
            <section className='pizzzas'>
                <Products products={products} deleteProduct={deleteProduct} changeProduct={changeProduct}></Products>
            </section>
        </>
    )
}
export default DeleteProducts;