import Card from "../UI/Card";
import ItemsAmount from "./ItemsAmount";

const foodItems = [
  {
    name: "Sushi bowl",
    description: "Finest fish and veggies",
    price: 12.99,
  },
  {
    name: "Veggie burger",
    description: "Lentils, spices and flavor",
    price: 15.99,
  },
  {
    name: "Bibimbap",
    description: "Spicy korean rice, veggies and eggs",
    price: 22.99,
  },
  {
    name: "Quinoa cookies",
    description: "Vegan chocolate cookies",
    price: 5.99,
  },
];
const Items = () => {
  return (
    <div>
      {foodItems.map((items) => (
        <Card className="flex justify-between p-2" key={items.name}>
          <div>
            <h3 className="text-sm font-semibold">{items.name}</h3>
            <p className="text-xs italic font-light">{items.description}</p>
            <p className="text-sm font-light">${items.price}</p>
          </div>
          <ItemsAmount></ItemsAmount>
        </Card>
      ))}
    </div>
  );
};

export default Items;
