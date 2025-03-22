import {  useNavigate } from "react-router-dom"

const ItemList = ({ product }: { product: any }) => {
  const navigate = useNavigate();
  const { title, price,   image ,id} = product
  return (
    <div className="w-1/3 max-md:w-1/1 h-150 mb-1 flex flex-col items-center justify-center border-1 border-gray-300 hover:border-green-500 hover:border-3 rounded-xl" >
      <img src={image}
        className="w-1/2 h-1/2 object-contain mb-4" />
      <p className="text-center">

        {title}
      </p>
      <p className="text-center"> {price}</p>
      <button
        onClick={() => navigate("product/"+id)}
        className="border-2 border-green-500 p-3 rounded-xl mt-4 cursor-pointer hover:bg-green-500 hover:text-white hover:p-6 transition-colors duration-300 ease-in-out"
      >
        Ürüne Git
      </button>
    </div>
  )
}

export default ItemList