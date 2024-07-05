const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function Shoppinglist() {
  const itemss = products.map((product, i)=>
  <li key={i}  style={{color: product.isFruit ? "red": "green"}}>{product.title}</li>
)
  return (<ul>{itemss}</ul>)
}