
const BasketItemsList = ({ product }: { product: any }) => {
    
    return (
        <div className="flex items-center justify-center mb-15  ">


            <img src={product.image}
               className="object-contain mb-4 mr-6 w-24 h-24"  />
            <div className='flex flex-col justify-between w-full'>

                <p>{product.title}</p>
                <p>${product.price} </p>
                <div className='flex items-center justify-between'>
                    <span></span>
                    <div className='flex gap-2 items-center justify-center '>
                        

                        <div className="p-4 border-1 flex items-center justify-center w-5 h-5 rounded-2xl border-black ">
                            <p>{product.quantity}</p>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItemsList