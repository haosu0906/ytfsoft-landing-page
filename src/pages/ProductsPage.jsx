import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { productsData } from '../data/ProductData';


const CATEGORIES = ['Tất cả', 'Quản lý DN', 'Dịch vụ đám mây', 'Bảo mật & AI', 'Phân tích dữ liệu'];

const ProductsPage = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tất cả');

  
  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };


  const filteredProducts = productsData.filter((product) => {
    const matchCategory = activeCategory === 'Tất cả' || product.category === activeCategory;
    const matchSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 uppercase">
          Danh mục giải pháp phần mềm doanh nghiệp
        </h1>

        
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="text-slate-500 text-sm w-full md:w-auto">
            Trang chủ <span className="mx-2">{'>'}</span> <span className="text-slate-800 font-medium">Sản phẩm</span>
          </div>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text" 
              placeholder="Tìm kiếm giải pháp..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors bg-white shadow-sm"
            />
            <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        
        
        <div className="flex flex-col lg:flex-row gap-8">
          
          
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h3 className="text-cyan-600 font-bold mb-4 uppercase tracking-wide">Danh mục</h3>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg transition-colors font-medium ${
                        activeCategory === cat 
                          ? 'bg-cyan-50 text-cyan-600 border-l-4 border-cyan-500' 
                          : 'text-slate-600 hover:bg-slate-50 hover:text-cyan-600 border-l-4 border-transparent'
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

         
          <div className="w-full lg:w-3/4">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onOpenModal={handleOpenModal} 
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-200">
                <p className="text-slate-500 text-lg">Không tìm thấy giải pháp nào phù hợp.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />

      
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative animate-fade-in-up overflow-hidden">
            
            
            <button 
              onClick={handleCloseModal} 
              className="absolute top-4 right-4 text-slate-400 hover:text-white z-20 transition-colors bg-slate-800/50 hover:bg-slate-800 rounded-full p-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

           
            <div className="bg-slate-900 pt-8 pb-10 px-8 rounded-b-[2rem] relative z-10 shadow-md">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                  <img src={selectedProduct.image} alt={selectedProduct.name} className="w-12 h-12 object-contain" />
                </div>
                <div className="pr-4">
                  <h2 className="text-xl font-bold text-white leading-tight mb-1">{selectedProduct.name}</h2>
                  <p className="text-cyan-400 text-xs leading-relaxed line-clamp-2">
                    {selectedProduct.shortDesc}
                  </p>
                </div>
              </div>
            </div>

            
            <div className="px-8 pb-8 pt-6">
              
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 text-center">
                <p className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Giá gói dịch vụ</p>
                <p className="text-3xl font-extrabold text-cyan-600">{selectedProduct.price}</p>
              </div>

             
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 bg-cyan-100 rounded-full p-1 text-cyan-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Giải pháp chuyên nghiệp</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Tích hợp đầy đủ tính năng hiện đại, phù hợp mọi quy mô doanh nghiệp.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 bg-cyan-100 rounded-full p-1 text-cyan-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Giá cả cạnh tranh</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Chi phí hợp lý với nhiều gói dịch vụ linh hoạt theo nhu cầu.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-0.5 bg-cyan-100 rounded-full p-1 text-cyan-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Hỗ trợ 24/7</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Đội ngũ kỹ thuật sẵn sàng hỗ trợ mọi lúc, mọi nơi.</p>
                  </div>
                </li>
              </ul>

              
              <div className="bg-slate-50 rounded-xl p-4 mb-6 border border-slate-100 flex flex-col gap-3">
                 <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <span><span className="font-semibold text-slate-900">Hotline:</span> 1900-123-456</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="bg-white p-1.5 rounded-lg shadow-sm">
                      <svg className="w-4 h-4 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    </div>
                    <span><span className="font-semibold text-slate-900">Email:</span> sales@ytfsoft.com</span>
                 </div>
              </div>

              
              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/30 transform hover:-translate-y-0.5">
                MUA NGAY
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;