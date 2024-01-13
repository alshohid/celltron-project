import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
 import FormCompo from '../form/FormCompo'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '35%',
  bgcolor: 'background.paper',
  
  boxShadow: 10,
  p: 4,
};

export default function FeedBackModal({open, handleClose}) {
 
  return (
    <div>
     
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
        <Box sx={style}>
        <div className={`text-end`}>
              <Button className={`btn bg-slate-400 cursor-pointer`} onClick={handleClose}> <img alt="" width="24" src="https://cdn.ostad.app/https://cdn.ostad.app/public/icons/close-line.svg"/>
              </Button>
   
        </div> 
            <div>
                <FormCompo/>
            </div>

        </Box>
        </Fade>
      </Modal>
    </div>
  );
}