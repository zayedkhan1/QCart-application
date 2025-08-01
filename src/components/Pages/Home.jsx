import React from 'react';
import PreFooter from '../sharedpage/PreFooter';
import { products } from '../../assets/JSdata/productData';
import { assets } from '../../assets/JSdata/assets';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import FeaturedProducts from './FeaturedProducts';
import Bonus from './Bonus';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const homeProduct=products.slice(0,10);
     const navigate=useNavigate();
  const handleProductt=(id)=>{
    navigate(`/product/${id}`)
  }
    return (
        <div >

          <Header></Header>
{/*  */}
<section className="w-full px-4 py-10  max-w-7xl mx-auto">
    <h2 className="text-2xl font-semibold mb-10 text-gray-700">Popular pr<span className='border-b-3 border-orange-600'>oducts</span> </h2>
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {homeProduct.map((prod, idx) => {
        const rating=prod.rating;

        return(
           <div
        
          key={idx}
          className="bg-white rounded-xl shadow-sm  flex flex-col h-full "
        >

            {/* pt-7,pb-3 */}
             <div className="relative  flex justify-center  items-center">
          <div className='py-4'>
              <img
              src={prod.imgSrc}
              alt={prod.name}
              className="h-[140px] transition-transform duration-300 hover:scale-110 object-contain"
            />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow hover:bg-gray-100 text-pink-500">
              <img src={assets.heart_icon} alt="" />
            </button>
          </div>
          </div>
         
          <div className="flex flex-col flex-1 px-5 pb-3">
            <h3 className="text-base text-gray-800 font-medium mb-1">{prod.name}</h3>
            <p className="text-xs text-gray-500 mb-1 line-clamp-2 ">
              {prod.description}...
            </p>
            <div className="flex items-center mb-1 ">
               <span className=" text-sm font-medium text-gray-600">
                      {rating}
                    </span>
              {
                [...Array(5)].map((_,idx)=>{
                  const ratingValue=idx+1;
                    if(rating>ratingValue){
                        return <FaStar key={ratingValue} size={15} className="text-orange-600" />;
                    }else if(rating>=ratingValue-0.5){
                        return <FaStarHalfAlt key={ratingValue} size={15} className="text-orange-600" />;
                    }else{
                        return <FaRegStar key={ratingValue} size={15} className="text-orange-600" />;
                    }

                })
              }
            </div>
            <div className="flex-1"></div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-semibold text-gray-700">
                {prod.price}
              </span>
              <button onClick={()=>{handleProductt(prod.id)}} className="px-2 cursor-pointer text-xs py-1 border-1 border-gray-300 rounded-full text-gray-500  font-medium hover:bg-gray-100 transition">
                Buy now
              </button>
            </div>
          </div>
        </div>
        )
      }
        
        
       
      )}
    </div>
<div className='flex  items-center justify-center mt-5'>
        <a href='/shop' className= ' border-1 border-gray-400 rounded px-4 py-2 cursro-ponter'>see more</a>

</div>
  </section>


{/*  */}
            
            <FeaturedProducts></FeaturedProducts>
            <Bonus></Bonus>
         <PreFooter></PreFooter>

        </div>
    );
};

export default Home;