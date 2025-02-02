/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './TemporaryDrawer.css';
import MenuIcon from '@mui/icons-material/Menu';

function TemporaryDrawer({
  content,
  buttonLabel = 'Open Drawer',
  buttonClassName,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  // Toggle drawer open/close
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <div>
      {/* Button to open the drawer */}
      <button className={buttonClassName} onClick={toggleDrawer(true)}>
        <MenuIcon style={{ marginRight: '8px' }} />
        {buttonLabel}
      </button>

      {/* Drawer */}
      <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          className="drawer-box"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {content || <p>No Content Provided</p>}
        </Box>
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
