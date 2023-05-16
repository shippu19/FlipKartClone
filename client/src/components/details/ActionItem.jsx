import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {addToCart} from '../../redux/action/cartActions';
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";


const LeftContainer = styled(Box)(({ theme })=>({
minWidth: '40%',
padding : '40px 0 0 80px',
[theme.breakpoints.down('lg')]: {
    padding: '20px 40px'
}

}))
const Image = styled('img')({
    padding: '15px',
    width: '90%',
});


const StyleButton = styled(Button)(({ theme })=>({
width:' 48%',
height: 50,
borderRadius: 2,
[theme.breakpoints.down('lg')]: {
    width:' 46%'
},
[theme.breakpoints.down('sm')]: {
    width:' 44%'
}
}));


const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const {id} = product;
    const addItemToCart =()=>{
            dispatch(addToCart(id, quantity));
            navigate('/cart')
    }
    const buyNow = ()=>{
        let response =    payUsingPaytm({amount: 500, email:'codeforinterview01@gmai.com'});
        let information ={
            action: 'https://securegw-stage.paytm.in/order/process',
            params: response
        }
        post(information);
    }
    return (
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%' }}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyleButton variant="contained"  onClick={()=>addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyleButton>
            <StyleButton variant="contained" onClick={()=>buyNow()} style={{ background: '#fb541b' }}><Flash />Buy Now</StyleButton>
        </LeftContainer>
    )
}
export default ActionItem;