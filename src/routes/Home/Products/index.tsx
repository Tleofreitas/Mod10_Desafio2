import { NavLink, Outlet } from "react-router-dom";
import './styles.css';
import { getProducts } from "../../data";
import { Link } from "react-router-dom";

export default function Products() {
    let products = getProducts();

    return (
        <main>
            <section>
                <div className="container">
                    <div className="mt20">
                        <nav className= "navbarProd">
                            {products.map((product) => (
                                <Link className="menu-itemP"
                                    to={`/products/${product.number}`}
                                    key={product.title1}
                                    >
                                    {product.name}
                                </Link>
                            ))}
                        </nav>
                        <Outlet />
                </div>
            </div>
        </section>
        </main >
    );
}