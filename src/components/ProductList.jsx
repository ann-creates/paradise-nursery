import { useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    image: "https://via.placeholder.com/150",
    category: "Medicinal",
  },
  {
    id: 2,
    name: "Basil",
    price: 8,
    image: "https://via.placeholder.com/150",
    category: "Aromatic",
  },
  {
    id: 3,
    name: "Lavender",
    price: 12,
    image: "https://via.placeholder.com/150",
    category: "Aromatic",
  },
  {
    id: 4,
    name: "Snake Plant",
    price: 15,
    image: "https://via.placeholder.com/150",
    category: "Decorative",
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 18,
    image: "https://via.placeholder.com/150",
    category: "Decorative",
  },
  {
    id: 6,
    name: "Mint",
    price: 7,
    image: "https://via.placeholder.com/150",
    category: "Medicinal",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Our Plants</h2>
      {["Medicinal", "Aromatic", "Decorative"].map((category) => (
        <div key={category}>
          <h3>{category} Plants</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
                  <img src={plant.image} alt={plant.name} />
                  <h4>{plant.name}</h4>
                  <p>${plant.price}</p>
                  <button onClick={() => dispatch(addToCart(plant))}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
