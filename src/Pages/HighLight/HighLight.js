import React from "react";

const HighLight = () => {
  return (
    <div className="highlight-products grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-5/6 mx-auto gap-10 mt-12">
      <div className="electronic-products bg-white p-2 max-w-xs">
        <div className="product-title flex justify-between items-center p-2">
          <h5>ELECTRONIC</h5>
          <p className="text-xs text-gray-400">VIEW ALL CATEGORIES</p>
        </div>
        <div className="products-cards grid grid-cols-2 p-2 justify-center gap-4">
          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat1.jpg"
              alt=""
            />
            <small>Air Conditioner</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat2.jpg"
              alt=""
            />
            <small>Microwave</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat3.jpg"
              alt=""
            />
            <small>Washing Machine</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat4.jpg"
              alt=""
            />
            <small>Blender</small>
          </div>
        </div>
      </div>
      <div className="computer-products bg-white p-2 max-w-xs">
        <div className="product-title flex justify-between items-center p-2">
          <h5>COMPUTER</h5>
          <p className="text-xs text-gray-400">VIEW ALL CATEGORIES</p>
        </div>
        <div className="products-cards grid grid-cols-2 p-2 justify-center gap-4">
          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat5.jpg"
              alt=""
            />
            <small>Laptop</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat6.jpg"
              alt=""
            />
            <small>Mouse</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat7.jpg"
              alt=""
            />
            <h4>Monitor</h4>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat1.jpg"
              alt=""
            />
            <h4>Air Conditioner</h4>
          </div>
        </div>
      </div>
      <div className="audio-products bg-white p-2 max-w-xs">
        <div className="product-title flex justify-between items-center p-2">
          <h5>AUDIO</h5>
          <p className="text-xs text-gray-400">VIEW ALL CATEGORIES</p>
        </div>
        <div className="products-cards grid grid-cols-2 p-2 justify-center gap-4">
          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat8.jpg"
              alt=""
            />
            <small>Headphone</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat9.jpg"
              alt=""
            />
            <small>Speaker</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat10.jpg"
              alt=""
            />
            <small>Portable Speaker</small>
          </div>

          <div className="product-card">
            <img
              src="http://images.vinovathemes.com/prestashop_warehouse/html-image-cat11.jpg"
              alt=""
            />
            <small>Smart Speaker</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HighLight;
