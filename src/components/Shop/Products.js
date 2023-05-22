import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMY_DATA = [
    {
      id: "p1",
      title: "my frist book",
      price: 5,
      description: "very fine material",
    },
    {
      id: "p2",
      title: "mysecond frist book",
      price: 7,
      description: "very bore material",
    },
    {
      id: "p3",
      title: "my third book",
      price: 6,
      description: "very insightful material",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          ></ProductItem>
        ))}
      </ul>
    </section>
  );
};

export default Products;
