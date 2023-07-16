import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const ContentsPage: React.FC<{}> = () => {
  const contents = [
    { label: "Box 1", path: "/blackheath" },
    { label: "Box 2", path: "/esky" },
    { label: "Box 3", path: "/meadowbank" },
    { label: "Box 4", path: "/wharf" },
    { label: "Box 5", path: "/maxine" },
    { label: "Box 6", path: "/hill" },
  ];

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      {contents.map((item, index) => (
        <Link key={index} to={item.path}>
          <Button variant="contained">{item.label}</Button>
        </Link>
      ))}
    </Box>
  );
};

export default ContentsPage;
