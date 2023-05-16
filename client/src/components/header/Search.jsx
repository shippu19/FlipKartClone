
import {styled,Box,  InputBase, List, ListItem} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getProducts} from '../../redux/action/productActions';


const SearchBox = styled(Box)`
background-color:#fff;
width:38%;
margin-left:10px;
border-radius:2px;
display:flex;`

const InputSearchBase = styled(InputBase)`
padding-left: 20px;
width:100%;
font-size:unset;
`
const SearchIconwrapper= styled(Box)`
color:blue;
padding:5px;
margin-left: auto;
display: flex;`

const ListWrapper = styled(List)`
position: absolute;
background : #FFFFFF;
color: #000;
margin-top: 36px;
`

const Search =()=>{

    const [text,setText] = useState('');
    const {products} = useSelector(state=> state.getProducts);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getText = (text)=>{
        setText(text);
    }
    return(
        <SearchBox >
            <InputSearchBase
            placeholder='Search for products,brands and more'
            onChange={(e)=>getText(e.target.value)}
            value={text}/>
            <SearchIconwrapper>
                <SearchIcon/>
            </SearchIconwrapper>
            {
                text &&
                    <ListWrapper>
                        {
                            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                                <ListItem>
                                    <Link
                                     to={`/product/${product.id}`}
                                     onClick={()=>setText('')}
                                     style={{textDecoration: 'none' , color: 'inherit'}}
                                     >
                                    {product.title.longTitle} 
                                    </Link>
                                  
                                </ListItem>
                            ))
                        }
                    </ListWrapper>
            }
        </SearchBox>
    )
}
export default Search;