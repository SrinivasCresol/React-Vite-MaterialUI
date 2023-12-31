import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";
import Form from "./Form";
import Cards from "./Cards";
import TableData from "./Table";

export default function Tabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange}>
            <Tab label="Form" value="1" />
            <Tab label="Card" value="2" />
            <Tab label="Table" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Form />
        </TabPanel>
        <TabPanel value="2">
          <Cards />
        </TabPanel>
        <TabPanel value="3">
          <TableData />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
