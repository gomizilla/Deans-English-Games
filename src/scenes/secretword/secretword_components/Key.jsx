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
        } else if (keyVal === "DELETE") {
            onDelete();
        } else {
            onSelectLetter(keyVal);
        }
    }

    return (
        <Box 
            sx={{
                backgroundColor: disabled ? "#3a393c" : colors.primary[300],
                "&:hover": {
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
                width: keyVal === "ENTER" || keyVal === "DELETE" ? "5em" : "2em",
                margin: "5px",
                fontSize: "20px",
                fontWeight: "bolder",
                padding: "5px",
                }}
            onClick={selectedLetter}
        >
            { keyVal }
        </Box>
    )
}

export default Key;
