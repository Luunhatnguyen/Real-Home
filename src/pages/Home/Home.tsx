import SliderHome from "../../components/SliderHome/SliderHome";
import AreaList from "../../layouts/LayoutComponents/AreaList/AreaList";
import BlogSection from "../../layouts/LayoutComponents/BlogSection/BlogSection";
import BrandSection from "../../layouts/LayoutComponents/BrandSection/BrandSection";
import Contact from "../../layouts/LayoutComponents/Contact/Contact";
import Feature from "../../layouts/LayoutComponents/Feature/Feature";
import MeetSection from "../../layouts/LayoutComponents/MeetSection/MeetSection";
import ProductRent from "../../layouts/LayoutComponents/ProductRent/ProductRent";
import ProductSale from "../../layouts/LayoutComponents/ProductSale/ProductSale";
import TestimonialSection from "../../layouts/LayoutComponents/TestimonialSection/TestimonialSection";

function Home() {
    return (
        <div className="Home w-full">
            <SliderHome />
            <BrandSection />
            <Feature />
            <AreaList />
            <ProductSale />
            <ProductRent />
            <MeetSection />
            <Contact />
            <BlogSection />
            <TestimonialSection />
        </div>
    );
}

export default Home;
