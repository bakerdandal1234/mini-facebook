import {  Fab, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddPost = ({openModal}) => {
  return (
    
      <Tooltip   title="Add post" sx={{position:"fixed",bottom:"22px",left:"22px"}}>
       <Fab onClick={() => {
        openModal()
       }}
       color="primary" >
        <AddIcon />
      </Fab>
      </Tooltip>
  );
}

export default AddPost;
