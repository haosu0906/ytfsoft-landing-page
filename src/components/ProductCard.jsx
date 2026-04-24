import React from 'react';

const ProductCard = ({ product, onOpenModal }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      
      <div className="w-20 h-20 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-6">
        <img src={product.image} alt={product.name} className="w-10 h-10 object-contain filter" />
      </div>

      
      <h3 className="text-lg font-bold text-slate-900 text-center mb-2">{product.name}</h3>
      <p className="text-cyan-500 font-bold text-center mb-4">{product.price}</p>
      
     
      <p className="text-slate-500 text-sm text-center mb-6 flex-grow line-clamp-3">
        {product.shortDesc}
      </p>

      
      <div className="flex gap-3 mt-auto">
        <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 rounded-lg transition-colors text-sm">
          MUA NGAY
        </button>
       
        <button onClick={() => onOpenModal(product)} 
          className="flex-1 bg-white border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 font-semibold py-2.5 rounded-lg transition-colors text-sm"
        >
          CHI TIẾT
        </button>
      </div>
    </div>
  );
};

export default ProductCard;