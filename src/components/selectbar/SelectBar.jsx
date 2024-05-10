import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
  } from "@material-tailwind/react";
   
  export function SelectBar({name,items}) {
    return (
      <Menu>
        <MenuHandler className=" hover:to-blue-500">
          <div>{name}</div>
        </MenuHandler>
        <MenuList >
        {items.map((items,index)=><MenuItem  key={index} className=" hover:to-blue-500 text-cyan-400" value={1}>{items}</MenuItem>)}
        </MenuList>
      </Menu>
    );
  }