import { styled, Box } from "@mui/material";
import { useEffect } from 'react';
import Banner from "./Banner";
import NavBar from "./NavBar";
import Slide from "./Slide";
import { getProducts } from '../../redux/action/productActions';
import { useDispatch, useSelector } from 'react-redux';
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
const Component = styled(Box)`
padding:20px 10px;
background: #F2F2F2;
`
const Home = () => {
    const { products } = useSelector(state => state.getProducts);
    console.log("all products", products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deal of the Day" timer={true} />
                <MidSection />
                <Slide products={products} title="Discounts for You" timer={false} />
                <Slide products={products} title="Suggesting Items" timer={false} />
                <Slide products={products} title="Top Selection" timer={false} />
                <Slide products={products} title="Remmended Items" timer={false} />
                <Slide products={products} title="Trending Offers" timer={false} />
                <Slide products={products} title="Season's top picks" timer={false} />
                <Slide products={products} title="Top Deals on Accessories" timer={false} />

            </Component>

        </>


    )
}
export default Home;