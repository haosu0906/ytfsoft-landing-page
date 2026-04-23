import React from 'react';

import Header from '../components/Header'; 
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-slate-800 mb-8 uppercase">
          Danh mục giải pháp phần mềm doanh nghiệp
        </h1>
        
        
        <div className="text-center text-slate-500 py-20 border-2 border-dashed border-slate-300 rounded-lg">
          [Khu vực này ngày mai sẽ code Layout Grid Sản phẩm]
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;