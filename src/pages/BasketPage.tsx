import { useSelector } from "react-redux";
import BasketItemsList from "../components/BasketItemsList";
import { RootState } from "../redux/store";
import { PiEmptyBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const BasketPage = () => {
  const { itemsInBaskett } = useSelector((state: RootState) => state.basket);

  const groupedProducts = itemsInBaskett.reduce((acc: any, product: any) => {
    const existingProduct = acc.find((item: any) => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      acc.push({ ...product, quantity: 1 });
    }

    return acc;
  }, []);

  const calculateTotalPrice = () => {
    return groupedProducts.reduce((total:any, product:any) => {
      const price = parseFloat(product.price);
      const quantity = parseInt(product.quantity, 10);

      if (!isNaN(price) && !isNaN(quantity)) {
        return total + price * quantity;
      }
      return total;
    }, 0);
  };

  return (
    <>
      {itemsInBaskett.length > 0 ? (
        <div className="flex flex-wrap max-md:flex-col">
          <div className="mt-5 md:flex-3/5 justify-center flex-col">
            {groupedProducts.map((product: any) => (
              <BasketItemsList key={product.id} product={product} />
            ))}
          </div>
          <div className="md:flex-2/5 flex items-center justify-center flex-col md:h-screen">
          <h3 className="text-3xl mb-4 font-extrabold">Total Price: ${calculateTotalPrice()}</h3>
            <Link
              to="/success"
              className="border-2 border-green-500 p-5 font-serif hover:bg-green-500 hover:text-white cursor-pointer rounded-md hover:p-8 transition-all duration-300 ease-in-out"
            >
              Complete Shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen flex-col">
          <PiEmptyBold size={150} />
          <p className="text-7xl text-center font-extrabold">Sepeteniz henüz boş!</p>
          <p className="font-mono text-3xl mt-4 text-center font-semibold text-red-800">
            Ürün eklemek için ürün sayfasından sepete ekleyin!
          </p>
        </div>
      )}
    </>
  );
};

export default BasketPage;
