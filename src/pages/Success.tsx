import { IoCheckmarkDoneSharp } from "react-icons/io5";
const Success = () => {
  return (
    <div
    className="flex h-screen items-center justify-center flex-col"
    >
        
     
        <IoCheckmarkDoneSharp size={250} color="green"/> 
          <p className="text-5xl font-extrabold text-center">

        Alışveriş Tamamlandı!
        </p>
        </div>
  )
}

export default Success