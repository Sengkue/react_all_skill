import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  "@media (max-width: 600px)": {
    width: "95%", // Change width to 100% for screens with a maximum width of 600px (typically mobile screens)
  },
  bgcolor: "lightblue",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        startIcon={<ControlPointIcon />}
        style={{ borderRadius: "50px" }}
        onClick={handleOpen}
      >
        Book
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {/*
        
                */}
        <Box sx={modalStyle}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {/* Parent Grid */}
              <Grid item xs={12} style={{ paddingBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0px",
                    margin: "0px",
                  }}
                >
                  <div></div>
                  <h3>Form For Booking</h3>
                  <div
                    style={{
                      paddingRight: "-10px",
                      marginRight: "-20px",
                      marginTop: "-40px",
                    }}
                  >
                    <HighlightOffIcon onClick={handleClose} style={{ cursor: "pointer" , color: "red", fontSize: "30px", margin: "0px", padding: "0px", borderRadius: "50%" }} />
                  </div>
                </div>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <div style={{ paddingTop: "5px" }}>
                      Department <span style={{ color: "red" }}>*</span>
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                   <select
                     style={{
                       width: "100%",
                       padding: "7px",
                       margin: "0px",
                       borderRadius: "10px",
                     }}
                   >
                     <option value="">Select Department Name</option>
                     <option value="department1">Department 1</option>
                     <option value="department2">Department 2</option>
                     <option value="department3">Department 3</option>
                   </select>
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{ paddingTop: "5px" }}>
                      Date<span style={{ color: "red" }}>*</span>{" "}
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <input
                      type="date"
                      style={{
                        width: "50%",
                        padding: "5px",
                        margin: "0px",
                        borderRadius: "10px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{ paddingTop: "5px" }}>
                      Time <span style={{ color: "red" }}>*</span>
                    </div>
                  </Grid>
                  <Grid item xs={8} style={{ display: "flex" , justifyContent: "space-between", alignItems: "center"}}>
                    <input
                      type="time"
                      style={{
                        width: "45%",
                        padding: "5px",
                        margin: "0px",
                        borderRadius: "10px",
                       
                      }}
                    />
                 
                    <div
                      style={{
                        width: "10%",
                        textAlign: "center",
                      }}
                    >
                      to
                    </div>
                  
                    <input
                      type="time"
                      style={{
                        width: "45%",
                        padding: "5px",
                        margin: "0px",
                        borderRadius: "10px",
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{ paddingTop: "5px" }}>
                      Description<span style={{ color: "red" }}>*</span>{" "}
                    </div>
                  </Grid>
                  <Grid item xs={8}>
                    <textarea
                      name="description"
                      placeholder="Enter Description"
                      rows="4"
                      style={{
                        width: "100%",
                        padding: "5px",
                        margin: "0px",
                        borderRadius: "10px",
                      }}
                    ></textarea>
                  </Grid>
                  <Grid item xs={4}></Grid>
                  <Grid item xs={8}>
                    <Button variant="contained">Save Booking</Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
