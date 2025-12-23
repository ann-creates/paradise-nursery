import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "#2f855a",
        color: "white",
      }}
    >
      <h3>Paradise Nursery</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/plants" style={{ color: "white", textDecoration: "none" }}>
          Plants
        </Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>
          Cart ({totalQuantity})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
