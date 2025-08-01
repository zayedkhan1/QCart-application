import React, { useState } from "react";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { Singleproduct } from "../../assets/JSdata/productData";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  // Convert id to number if your product ids are numbers
  const numericId = Number(id);

  // Find product by id
  const product = Singleproduct.find((p) => p.id === numericId);

  // If product not found, show a message
  if (!product) {
    return <div className="p-4 text-center text-red-500">Product not found!</div>;
  }

  // State to manage main image for this product only
//   const [mainImage, setMainImage] = useState(product.images[0]);
const [mainImage, setMainImage] = useState(product?.images?.[0] || null);

  // Render stars
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) stars.push(<FaStar key={i} />);
      else if (rating >= i - 0.5) stars.push(<FaStarHalfAlt key={i} />);
      else stars.push(<FaRegStar key={i} />);
    }
    return stars;
  };

  return (
   <div className="p-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Left Side - Images */}
  <div className="flex flex-col items-center">
    <img
      src={mainImage}
      alt={product.name}
      className="w-[400px] max-w-md rounded-xl object-cover"
    />
    <div className="flex gap-2 mt-4 justify-center flex-wrap">
      {product.images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`thumb-${index}`}
          onClick={() => setMainImage(img)}
          className={`w-20 h-20 object-cover border rounded-lg cursor-pointer transition duration-200 hover:scale-105 ${
            mainImage === img ? "border-orange-500" : "border-gray-300"
          }`}
        />
      ))}
    </div>
  </div>

  {/* Right Side - Product Details */}
  <div className="flex flex-col justify-center px-2">
    <h2 className="text-2xl md:text-3xl font-semibold">{product.name}</h2>

    <div className="flex items-center gap-2 mt-2">
      <div className="flex text-orange-500 text-lg">{renderStars(product.rating)}</div>
      <span className="text-gray-600 text-sm">({product.rating})</span>
    </div>

    <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">{product.description}</p>

    <div className="mt-4 flex items-center gap-3">
      <span className="text-2xl md:text-3xl font-bold">${product.price}</span>
      <span className="text-gray-400 line-through">${product.oldPrice}</span>
    </div>

    <div className="mt-4 text-gray-700 text-sm space-y-1">
      <p><span className="font-semibold">Brand:</span> {product.brand}</p>
      <p><span className="font-semibold">Color:</span> {product.color}</p>
      <p><span className="font-semibold">Category:</span> {product.category}</p>
    </div>

    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <button className="flex-1 py-3 border rounded-lg font-semibold hover:bg-gray-100 transition">
        Add to Cart
      </button>
      <button className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition">
        Buy now
      </button>
    </div>
  </div>
</div>

  );
};

export default ProductDetails;
