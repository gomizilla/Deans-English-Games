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
        <Button
            // width="35px"
            // height="45px"
            // margin="5px"
            // borderRadius="4px"
            // display="grid"
            // alignItems="center"
            sx={{
                backgroundColor: colors.primary[300],
                color: colors.primary[100],
                border: `1px solid ${colors.greenAccent[100]}`,
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
            // onClick={selectedLetter}
        >
            { keyVal }
        </Button>
    )
}

export default Key;
