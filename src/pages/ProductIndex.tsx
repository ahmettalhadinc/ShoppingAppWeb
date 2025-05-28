import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../redux/store';
import { addToBasket } from '../redux/basketSlice';
import { useEffect } from 'react';
import toast from 'react-hot-toast'
const ProductIndex = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { products, } = useSelector((state: RootState) => state.basket);
  const product = products.find((item) => item.id === Number(id));
  const handleAddItem = () => {
    if (product) {
      dispatch(addToBasket(product))
      toast.success("Ürün Başarıyla Sepete Eklendi!")
    }
  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  const { title, price, description, image } = product || {}
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-10">
      <div className="flex-1 flex justify-center">
        <img src={image} alt="Ürün" className="w-96 h-96 object-contain" />
      </div>

      <div className="flex-1 text-center md:text-left p-6">
        <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
        <p className="text-gray-700 mt-4">{description}</p>
        <p className="text-xl font-semibold mt-4 text-green-600">Price: {price} $</p>

        <button onClick={handleAddItem} className="mt-6 bg-green-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition-all duration-300 cursor-pointer">
          Add to basket
        </button>
      </div>
    </div>

  )
}

export default ProductIndex