import Mailbox from "../Mailbox/Mailbox";
import Product from "../Product/Product";
import Book from "../Book/Book";
import Button from "../Button/Button";

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://seasonedbysilvie.com/wp-content/uploads/2020/12/cilantro-lime-chicken-tacos-2.jpg"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://media.istockphoto.com/id/495204032/photo/fresh-tasty-burger.jpg?s=612x612&w=0&k=20&c=k6X_gSHlo-WdKsqTnfBjoEbjdhrlz6RNhUs23ivpIxk="
        price={15.99}
      />
      <Mailbox
        username="Silvie"
        messages={["React", "Re: React", "Re:Re: React"]}
      />
      <Mailbox username="Bob" messages={[]} />
      <Book />
      <Button />
    </>
  );
}
