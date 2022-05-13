import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function CategoriesList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <aside>
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Категории
          </ListSubheader>
        }>
        <ListItemButton>
          <ListItemText primary='Бургеры' />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary='Котлеты' />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          {/* <ListItemIcon>
            <StarBorder />
          </ListItemIcon> */}
          <ListItemText primary='Стейки' />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Говядина' />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary='Баранина' />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </aside>
  );
}
