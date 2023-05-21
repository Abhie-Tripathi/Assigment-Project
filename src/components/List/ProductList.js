const ProductList = (props) => {
  const listitems = (
    <ul>
      {props.list.map((listitem) => (
      <li>
        {`Candy Name : ${listitem.Name} Description : ${listitem.Description} Price : ${listitem.Price}`}
        <button onClick={() => props.onBuy1(listitem)}>Buy 1</button>
        <button onClick={() => props.onBuy2(listitem)}>Buy 2</button>
        <button onClick={() => props.onBuy3(listitem)}>Buy 3</button>
      </li>
      ))}
    </ul>
  );
  return (
    <>
      {[listitems]}
    </>
  );
};

export default ProductList;
