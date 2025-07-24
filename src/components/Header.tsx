import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
const Header = () => {
    const { itemsInBaskett,} = useSelector((state: RootState) => state.basket);
console.log(itemsInBaskett)
    return (
        <>

            <div className="flex justify-between items-center p-5 bg-green-800  ">

                <Link to="/">
                <h1 className="ml-4 md:ml-30  font-extrabold text-2xl text-white ">Shoppinffffg App</h1>
                </Link>
                <Link to="/basket">
                <div className="relative inline-flex    md:mr-30 " >
                    <AiOutlineShopping size={40} color="white" />

                    <span className="absolute -top-2 -right-2  bg-blue-100 text-md font-bold rounded-full w-6 h-6 flex items-center justify-center text-black-900">
                        {itemsInBaskett.length}
                    </span>
                </div>
                </Link>
                
            </div>

        </>
    );

}

export default Header
