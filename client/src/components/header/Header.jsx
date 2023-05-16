import {AppBar,Toolbar,styled,Box, Typography ,Drawer ,IconButton, List, ListItem } from '@mui/material';
import CustomButtons from './CustomButtons';
import {Link} from 'react-router-dom';
import {Menu }  from '@mui/icons-material';
//component
import Search from './Search';
import { useState } from 'react';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height:55px;
`
const Logo = styled(Link)`
margin-left:12%;
line-height:0;
color:#FFFFFF;
text-decoration:none;`

const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;`

const PlusImage = styled('img')({
   width:10 ,
   height:10,
   marginLeft:4
})


const CustomButtonWraper = styled('span')(({ theme })=>({
margin:'0 5% 0 auto',
[theme.breakpoints.down('sm')]: {
    display: 'none'
}
}));

const MenuButton = styled(IconButton)(({ theme })=>({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}))   ;


const Header =()=>{
    
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const [open, setOpen] = useState(false);

    const handleOpen =()=>{
            setOpen(true);
    }
    const handleClose =()=>{
        setOpen(false);

    }

    const list =()=>(
        <Box style ={{width: 250}} onClick ={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    );
        return(
       <StyledHeader>
           <Toolbar style={{minHeight: 55}}>
           <MenuButton color="inherit" onClick={handleOpen} >
            <Menu/>
            </MenuButton>

            <Drawer open={open} onClose={handleClose}>
         {list()}
            </Drawer>
            
            <Logo to='/'>
                <img src={logoURL} alt="logo" style = {{width:75}} />
                <Box component="span" style={{display:'flex'}}>
                    <SubHeading> Explore&nbsp;
                        <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                    </SubHeading>
                   <PlusImage src={subURL} alt="sub-logo"/>
                </Box>
            </Logo>
            <Search/>
            <CustomButtonWraper>
                <CustomButtons/>
            </CustomButtonWraper>
           </Toolbar>
       </StyledHeader>
    )
}

export default Header;