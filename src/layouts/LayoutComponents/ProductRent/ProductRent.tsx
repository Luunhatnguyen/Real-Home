import ProductListSlide from "../../../components/ProductListSlide/ProductListSlide"
import { PRODUCT_DATA } from '../../../FakeData/PRODUCT_DATA'

const ProductRent = () => {
  return (
    <div className="bg-[#f5f3f3] pt-[20px] pb-[20px]">
        <div className='grid grid-cols-1 mt-[41px] mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold sm:leading-[52px]'>Properties for rent</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
        </div>
        <div className="mt-[60px] pb-[71px]">
          <ProductListSlide products={PRODUCT_DATA} slidesToShow={4} />
        </div>
    </div>
  )
}

export default ProductRent