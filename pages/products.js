// posts will be populated at build time by getStaticProps()

import NavBar from "./components/navber";
import SingleProducts from "./components/singleProducts";
function products({ products }) {

    return (<>
    <NavBar/>
    <div className="mt-5 container-md">
    <ul className="grid lg:grid-cols-5 md:grid-flow-cols-3 grid-cols-2 gap-2 ">
        {products.slice(1,10).map((product) => (
            
          <SingleProducts product={product} key={product}/>
        ))}
      </ul>
    </div>
      </>
    )
  }
  
  export async function getStaticProps() {
    const res = await fetch("https://serabuy.herokuapp.com/api/products");
    const products = await res.json();
    return {
      props: {
        products,
      },
      revalidate: 30,
    };
  }
  
  export default products