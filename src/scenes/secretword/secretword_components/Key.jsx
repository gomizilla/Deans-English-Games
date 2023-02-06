import React, { useContext } from "react";
import { AppContext } from "../index";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../theme";

const Key = ({ keyVal, enterOrDelete, disabled }) => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const { onEnter, onDelete, onSelectLetter } = useContext(AppContext);

    const selectedLetter = () => {
        if (keyVal === "ENTER") {
            onEnter();
            console.log(`${keyVal} clicked`)
        } else if (keyVal === "DELETE") {
            onDelete();
            console.log(`${keyVal} clicked`)
        } else {
            onSelectLetter(keyVal);
            console.log(`${keyVal} clicked`)
        }
    }

    return (
        <Box // if Box is Button, when button is clicked once then key pressed, it's registered twice
            // width="35px"
            // height="45px"
            // margin="5px"
            // borderRadius="4px"
            // display="grid"
            // alignItems="center"
            sx={{
                backgroundColor: disabled ? "#3a393c" : colors.primary[300],
                "&:hover": {
                    // hover: "pointer",
                    background: `${colors.greenAccent[500]}`
                },
                color: colors.primary[100],
                border: `1px solid ${colors.greenAccent[100]}`,
                borderRadius: "4px",
                cursor: "pointer",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flex: "33%",
                // height: "100%",
                height: "45px",
                // width: "35px",
                width: keyVal === "ENTER" || keyVal === "DELETE" ? "5em" : "2em",
                margin: "5px",
                // display: "grid",
                // placeItem: "center",
                fontSize: "20px",
                fontWeight: "bolder",
                padding: "5px",
                // hover: "pointer"
                // fontSize: "inherit",
                // gridColumn: "span 2",
                // border: "none",
                // padding: 0,
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                }}
            // fontSize="20px"
            // cursor="pointer"
            // backgroundColor={disabled && "#3a393c"}
            onClick={selectedLetter}
        >
            { keyVal }
        </Box>
    )
}

export default Key;
