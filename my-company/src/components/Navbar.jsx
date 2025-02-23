import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ background: "#333", padding: "10px" }}>
      <Link to="/" style={{ color: "#fff", margin: "10px" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", margin: "10px" }}>About</Link>
      <Link to="/services" style={{ color: "#fff", margin: "10px" }}>Services</Link>
      <Link to="/contact" style={{ color: "#fff", margin: "10px" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;