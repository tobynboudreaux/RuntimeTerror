import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { Grow, Paper, Popper, MenuItem, MenuList, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function MenuListComposition() {

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const navLinks = [
    { title: `Add User`, path: `/addUser` },
    { title: `Edit User`, path: `/editUser` },
    { title: `Add Listing`, path: `/addListing` },
    { title: `Edit Listing`, path: `/editListing` },
  ]

  const useStyles = makeStyles({
    linkText: {
      textDecoration: `none`,
      textTransform: `uppercase`,
      color: `white`
    }
  });

  const classes = useStyles();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (

    <div>
      <Button
        
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        Auth Links
        </Button>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  {navLinks.map(({ title, path }) => (
                    <MenuItem onClick={handleClose} key={title}>
                      <Link to={path} className={classes.linkText}>{title}</Link>
                    </MenuItem>

                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>

  );
}
