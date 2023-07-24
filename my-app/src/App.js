// @ts-nocheck
import {  useMemo, useState, } from "react";
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
   Stack, Box, ButtonGroup, Button, TextField, Typography, Avatar,
} from "@mui/material";
import getDesignTokens from "styles/MyTheme";
import AppBarr from "mui-component/AppBarr";
import MyList from "mui-component/MyList";
import Medium from "mui-component/Medium";
import Latest from "mui-component/Latest";
import AddPost from "mui-component/AddPost";
import Modal from "mui-component/Modal"; 
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import ImageIcon from "@mui/icons-material/Image";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

function App() {
  const[showModal,setshowModal]=useState(false)
  const closeModal = () => {
    setshowModal(false)
  }
  const openModal = () => {
    setshowModal(true)
  }
  const[showList,setshowList]=useState("none")
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className={theme.palette.mode==="light"?"light":"dark"}> {/* to change the color in all the app */}
        <AppBarr setshowList={setshowList} showList={showList}  />
        
        <Stack  direction="row">
        <MyList  {...{setmyMOde,theme,showList}}  />
        <Medium />
        <Latest  {...{theme}}/>
      </Stack>
      <AddPost  {...{openModal}} />
      {showModal &&  <Modal closeModal={closeModal}  >
        <Stack >
      <Typography
            sx={{ textAlign: "center", mb: 1 }}
            variant="h6"
            component="h2"
          >
            Create a post
          </Typography>

          <Stack alignItems="center" direction="row">
            <Avatar
              sx={{ mr: "13px" }}
              src="https://i.pinimg.com/474x/1b/61/45/1b614533bde5ad1760664fd6c35dd895.jpg"
            />
            <Typography variant="body1">Layla Hassan</Typography>
          </Stack>

          <TextField
            sx={{ width: "100%", mt: "22px" }}
            multiline
            rows={3}
            placeholder="What is in your mind ..."
            variant="standard"
          />

          <Stack direction={"row"} spacing={1} my={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>

          <ButtonGroup
            sx={{ width: "100%" }}
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button sx={{ flexGrow: 1 }}>Post</Button>
            <Button>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
          </Stack>
      </Modal>}
    
    
      </Box>
    </ThemeProvider>
  );
}

export default App;
