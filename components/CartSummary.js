import Image from 'next/image';
import CartEmpty from '@/resource/cartEmpty.svg'

const CartSummary = () =>{
    return(
        <div className="flex flex-col justify-start">
          <div className="flex flex-row pt-2 pb-2 min-h-min">
          <p className="font-bold text-lg">
            Cart Summmary
          </p>
          </div>
          <div className="grid p-1 mt-2">
             <Image src={CartEmpty} alt='empty_cart' priority={false} className='rounded' />
             <div className='flex flex-col justify-center items-center '>
                <h2 className='font-bold text-lg'> Your cart is empty!</h2>
                <p> Add some delicious food here</p>
             </div>
          </div>
        </div>
    );
}

export default CartSummary;