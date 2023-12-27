import React from 'react'
import ItemListContainer from './ItemListContainer'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem, Link } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          <Link to={"/"}>Coffe Bar</Link>
        </Box>
        <Spacer/>
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
            <MenuList>
                  
                      <Link to={"/Tipo de cafe 1"}></Link>
                    <MenuItem>
                      Tipo de Cafe 1
                    </MenuItem>
                      <Link to="/Tipo de cafe 2"></Link>
                    <MenuItem>
                    Tipo de Cafe 2
                    </MenuItem>
                      <Link to="/Tipo de cafe 3"></Link>
                    <MenuItem>
                    Tipo de Cafe 3   
                    </MenuItem>
              </MenuList>
        </Menu>
        <Spacer/>
        
        <Box p='4'>
            <CartWidget/>
        </Box>
      </Flex>              
      <ItemListContainer/>
    </div>
  )
}

export default NavBar
