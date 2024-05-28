import { Box, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Box className="App">
      <Navbar/>
      <Stack direction={"row"} spacing={2} justifyContent={"space-around"}>
      <Sidebar></Sidebar>
      <Feed></Feed>
      <Rightbar></Rightbar>
      </Stack>
      
    </Box>
  );
}

export default App;
