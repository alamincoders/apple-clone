import Image from "next/image";
import Currency from "react-currency-formatter";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket, selectBasketTotal } from "../redux/feature/basketSlice";
import { urlFor } from "../sanity";

interface Props {
  items: Product[];
  id: string;
}

const CheckoutProduct = ({ items, id }: Props) => {
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));
    toast.error(`${items[0].title} removed to basket`, {
      position: "bottom-center",
    });
  };

  //   const basketTotal = items.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col gap-x-4 border-b border-gray-300 pb-5 lg:flex-row lg:items-center">
      <div className="relative h-44 w-44">
        <Image src={urlFor(items[0].image[0]).url()} layout="fill" objectFit="contain" alt="product image" />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
        <div className="flex-1 space-y-4">
          <div className=" flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
            <h4 className="font-semibold lg:w-96">{items[0].title}</h4>
            <p className="flex items-end cursor-pointer gap-x-1 font-semibold">
              {items.length}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-blue-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </p>
          </div>
          <p className="flex cursor-pointer items-end text-blue-500 hover:underline">
            Show Product Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </p>
        </div>
        <div className="flex flex-col items-end space-y-4 ">
          <h4 className="text-xl font-semibold lg:text-2xl">
            <Currency quantity={basketTotal} currency="USD" />
          </h4>
          <button onClick={removeItemFromBasket} className="text-blue-500 hover:underline">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
