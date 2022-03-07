import React from "react";
import { Avatar, Typography } from "@mui/material";

export default function CustomAvatar({ user }) {
  return (
    <>
      <Typography>{user.displayName}</Typography>
      <Avatar alt={`${user.displayName}`}>{user.displayName[0]}</Avatar>
    </>
  );
}
