import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import emptyImg from "../assets/images/empty.gif";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import { selectBasketItems } from "../redux/feature/basketSlice";

const Checkout = () => {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState({} as { [key: string]: Product[] });

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <div className="min-h-screen overflow-hidden bg-[#e7ecee] ">
      <Head>
        <title>Bag - Apple</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <main className="mx-auto mx-w-5xl pb-24">
        <div className="text-center px-5">
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {" "}
            {items.length > 0 ? (
              "Review your bag."
            ) : (
              <div>
                <h2>Your bag is empty</h2>
                <div className="w-96 h-96 mx-auto">
                  <Image src={emptyImg} alt="empty basket" />
                </div>
              </div>
            )}
          </h1>
          <p className="my-4">Free delivery and free returns.</p>
          {items.length === 0 && <Button title="Continue Shopping" onClick={() => router.push("/")} />}
        </div>

        {/* item group */}
        {items.length > 0 && (
          <div className="mx-5 md:mx-8">
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Checkout;
