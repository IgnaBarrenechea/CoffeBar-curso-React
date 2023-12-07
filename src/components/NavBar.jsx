import React from 'react'
import ItemListContainer from './ItemListContainer'
import CartWidget from './CartWidget'
import { Flex, Spacer, Box, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>
      <Flex>
        <Box p='4'>
          Coffe Bar
        </Box>
        <Spacer/>
        <Menu>
            <MenuButton>
                Categorias
            </MenuButton>
                <MenuList>
                    <MenuItem>Tipo de cafe 1</MenuItem>
                    <MenuItem>Tipo de cafe 2</MenuItem>
                    <MenuItem>Tipo de cafe 3</MenuItem>
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
