import { Box, useTheme, Typography } from "@mui/material"
import { tokens } from "../../theme"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


const FAQ = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    
    return (
        <Box my='5px' mx="20px">
            <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
            <Accordion defaultExpanded sx={{mt: "10px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>An Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>Another Important Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>An Interesting Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]}>A Random Question</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quod.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ
