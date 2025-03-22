import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
const cart = useSelector(store => store.cart.items)
  return (
    <nav className="bg-gray-700 text-white p-4">
      <div className="flex flex-col md:flex-row md:justify-around">
        <Link to="/" className="p-2 md:px-4 text-center hover:bg-gray-600">Home</Link>
        <Link to="/about" className="p-2 md:px-4 text-center hover:bg-gray-600">About</Link>
        <Link to="/contact" className="p-2 md:px-4 text-center hover:bg-gray-600">Contact</Link>
        <Link to="/grocery" className="p-2 md:px-4 text-center hover:bg-gray-600">Grocery</Link>
        <Link to="/cart" className="p-2 min-w-28 md:px-4 text-center hover:bg-gray-600">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Header;