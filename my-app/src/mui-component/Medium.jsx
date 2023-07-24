import {  useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Checkbox, Menu, MenuItem } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import React from 'react';





const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const Medium = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};


  
  const myCards = [
    {
      letter: "A",
      color: "#053ea8",
      userName: "baker dnl",
      imgLink:
        "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "B",
      color: "#a020f0",
      userName: "ahmad dandal",
      imgLink:
        "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "N",
      color: "#008080",
      userName: "zakariya dandal",
      imgLink:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "M",
      color: "#053ea8",
      userName: "abed dandal",
      imgLink:
        "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
   const theme=useTheme()
  return (
    <Box sx={{flexGrow:"3",height:"1120px"}}>
      {/* 
      1 cardHeader
      2 cardMedia
      3 cardContent
      4 cardActions
      */}
  {myCards.map((item) => {
    return(
      <Card key={item.imgLink} sx={{ maxWidth: {xs:"97%",sm:444},ml:"auto",mr:"auto",my:{xs:"20px",sm:"40px"} ,}} component="main">
      <CardHeader
      avatar={
        <Avatar sx={{ color:theme.palette.getContrastText(item.color),bgcolor:item.color}} aria-label="recipe">
          {item.letter}
        </Avatar>
      }
        action={<IconButton  id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} aria-label="settings">
          <MoreVertIcon />
        </IconButton>}
        title={item.userName}
        subheader="September 14, 2016" />
         <Menu 
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
      </Menu>
      <CardMedia
        component="img"
        height="194"
        image={item.imgLink}
        alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions  disableSpacing>
      <Checkbox  {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
        <IconButton aria-label="share">
          <ShareIcon  />
        </IconButton>
        <Box sx={{flexGrow:"1"}}/> 
        <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
      </CardActions>
    </Card>
    )
  })}
   </Box>
  );
}

export default Medium;


