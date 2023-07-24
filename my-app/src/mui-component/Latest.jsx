// @ts-nocheck
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import React from "react";
const Latest = ({ theme }) => {
  const itemData = [
    {
      img: "https://images.pexels.com/photos/2995336/pexels-photo-2995336.jpeg",
      title: "Breakfast",
    },
    {
      img: "https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg",
      title: "Burger",
    },
    {
      img: "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg",
      title: "Camera",
    },
  ];
  return (
  
    <Box
      sx={{
        flexGrow: "auto",
        pl: "16px",
        display: {
          xs: "none",
          md: "block",
          backgroundColor: theme.palette.favColor.main,
        },
        minWidth: "500px"
      }}component="section"
    >
      <Box sx={{position:"fixed"}} >
      <Typography sx={{ fontWeight: "100" }} mt={2} variant="h5">
        online friends
      </Typography>
      <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Remy Sharp"
          src="https://images.pexels.com/photos/3662979/pexels-photo-3662979.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Travis Howard"
          src="https://images.pexels.com/photos/1516196/pexels-photo-1516196.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Agnes Walker"
          src="https://images.pexels.com/photos/4029925/pexels-photo-4029925.jpeg"
        />
        <Avatar
          sx={{ width: 49, height: 45 }}
          alt="Trevor Henderson"
          src="https://images.pexels.com/photos/5951914/pexels-photo-5951914.jpeg"
        />
      </AvatarGroup>
      <Typography sx={{ fontWeight: "100" }} my={2} variant="h5">
        latest photo
      </Typography>
      <ImageList
        gap={10}
        sx={{ width: 500, height: 160, overflow: "hidden" }}
        cols={3}
        rowHeight={99}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              style={{ borderRadius: "5px" }}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Typography sx={{ fontWeight: "100" }} my={2} variant="h5">
        latest conversation
      </Typography>
      <List
        sx={{
          width: "100%",
          maxWidth: 499,
          bgcolor: "background.paper",
          mr: "auto",
          ml: "auto",
        }}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/7365020/pexels-photo-7365020.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/8669022/pexels-photo-8669022.jpeg"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/8101622/pexels-photo-8101622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {" — Do you have Paris recommendations? Have you ever…"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
      </Box>
    </Box>
  );
};

export default Latest;
