import { Box, Typography } from '@mui/material'
import BarChart from '../../components/BarChart'
import Header from '../../components/Header'

const index = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default index
