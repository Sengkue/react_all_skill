import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Toolbar, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Item = styled(Paper)(({ theme, bgColor, isHovered }) => ({
  backgroundColor: bgColor,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  "&:hover": {
    boxShadow: isHovered ? "0 0 5px 0px rgba(0, 0, 0, 0.3)" : "none",
  },
}));

export default function BasicGrid() {
  const [dateTimeTitleList, setDateTimeTitleList] = useState([
    { dateTime: "9:30-10:30 AM", title: "IT Department" },
    { dateTime: "9:30-10:30 AM", title: null },
    { dateTime: "10:30-11:30 AM", title: "Marketing Meeting" },
    { dateTime: "10:30-11:30 AM", title: "Team Training" },
    { dateTime: "11:30-12:30 PM", title: null },
    { dateTime: "11:30-12:30 PM", title: "Lunch Break" },
    { dateTime: "12:30-1:30 PM", title: "Project Presentation" },
    { dateTime: "12:30-1:30 PM", title: null },
    { dateTime: "1:30-2:30 PM", title: "Client Meeting" },
    { dateTime: "1:30-2:30 PM", title: "Design Review" },
    { dateTime: "2:30-3:30 PM", title: null },
    { dateTime: "2:30-3:30 PM", title: "Development Work" },
    { dateTime: "3:30-4:30 PM", title: "Support Tickets" },
    { dateTime: "3:30-4:30 PM", title: "Sales Calls" },
    { dateTime: "4:30-5:30 PM", title: null },
    { dateTime: "4:30-5:30 PM", title: "Product Demo" },
    { dateTime: "5:30-6:30 PM", title: "Weekly Review" },
    { dateTime: "5:30-6:30 PM", title: "Training Session" },
    { dateTime: "6:30-7:30 PM", title: null },
    { dateTime: "6:30-7:30 PM", title: "Project Planning" },
    // Add more items as needed
  ]);
  

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    if (dateTimeTitleList[index].title) {
      setHoveredItem(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} wrap="wrap" spacing={0.5}>
        {dateTimeTitleList.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2}
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            
          >
            <Item
              bgColor={item.title ? "#FFC5C5" : "yellow"}
              isHovered={hoveredItem === index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
            >
              <h4>{item.dateTime}</h4>
              <Toolbar />

              <h4>{item.title ? item.title : "free"}</h4>
              <Toolbar>
                {hoveredItem === index && item.title && (
                  <IconButton color="primary">
                    <EditIcon />
                  </IconButton>
                )}
                {hoveredItem === index && item.title && (
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                )}
              </Toolbar>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
