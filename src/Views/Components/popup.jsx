import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import audioTap from '../../assets/audioTap.mp3'
import { Typography } from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog() {
  const [open, setOpen] = React.useState(true);
  const audioRef = React.useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
    handlePlayAudio();
  };

  const handleClose = () => {
    setOpen(false);
    handlePlayAudio();
  };
  

  return (
    <React.Fragment>
        <audio ref={audioRef} src={audioTap} />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        style={{backgroundColor:'#070707b0'}}
      >
        <DialogContent
        style={{backgroundColor:'#000'}}>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography variant='h3'>Want to make oil money?</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions
        style={{backgroundColor:'#000'}}>
          <Button onClick={handleClose} className='green'>Yallah Habibi!</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}