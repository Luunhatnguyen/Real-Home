import ProductListSlide from "../../../components/ProductListSlide/ProductListSlide"
import { PRODUCT_DATA } from '../../../FakeData/PRODUCT_DATA'

const ProductSale = () => {
  return (
    <div className='pb-[70px] '>
        <div className='mt-[71px] mb-[14px] '>
            <div className='text-center'>
                <h2 className='text-[45px] font-bold sm:leading-[52px]'>Properties for sale</h2>
                <p className='text-[#8E8E93]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel lobortis justo</p>
            </div>
        </div>
        <div className="lg:px-[170px] xl:px-[15px] mt-[60px] pb-[71px]">
          <ProductListSlide products={PRODUCT_DATA} slidesToShow={3} />
        </div>
    </div>
  )
}

export default ProductSale