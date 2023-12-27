import React from 'react'
import Slider from 'react-slick'
import ProductCard from '../ProductCard/ProductCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './ProductListSlide.scss'

type ProductsProps = {
  img: string[],
  sale?: boolean
  title: string,
  address: string,
  price: number,
  beds: number,
  baths: number,
  sqft: number,
  compare: string,
  author: {
      name: string,
      img: string,
  },
  days: number,
}[]

const ProductSlide = ({products, slidesToShow}: {products: ProductsProps, slidesToShow: number}) => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 739,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  };
  return (
    <div className='product-list'>
        <Slider {...settings}>
          {products.filter((product) => product.sale === true).map((product, index) => (
            <ProductCard product={product} />
          ))}
      </Slider>
    </div>
  )
}

export default ProductSlide