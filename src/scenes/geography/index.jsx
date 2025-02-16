import {Box} from '@mui/material'
import Header from '../../components/Header'
import {tokens} from '../../theme'
import { useTheme } from '@mui/material'
import GeographyChart from '../../components/GeographyChart'

const Geography = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
      <Box height="75vh"
        borderRadius="4px"
        border={`1px solid ${colors.grey[100]}`}
      >
        <GeographyChart />
      </Box>
    </Box>
  )
}

export default Geography
