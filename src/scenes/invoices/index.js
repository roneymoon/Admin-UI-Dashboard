import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { DataGrid} from '@mui/x-data-grid'
import { mockDataInvoices } from '../../data/mockData'


const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5, cellClassName: "id-column--cell", headerClassName: "id-column--header"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", headerClassName: "name-column--header"},
        {field: "email", headerName: "Email", flex: 1, headerClassName: "email-column--header"},
        {field: "cost", headerName: "Cost", flex: 1, headerClassName: "cost-column--header",
            renderCell: (params) => {
                return (
                    <Typography>
                        {params.row.cost}
                    </Typography>
                )
            }
        },
        {field: "date", headerName: "Date", flex: 1, headerClassName: "date-column--header"},
    ]

    return (
        <Box ml="20px">
            <Header title="INVOICES" subtitle="Manage team members" />
            <Box m="20px 0 0 0" height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none"
                    }, 
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none"
                    }, 
                    "& .name-column--cell"  : {
                        color: colors.greenAccent[300]
                    },
                    "& .id-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .name-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-columnHeaderTitleContainer": {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .email-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .cost-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .date-column--header": {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none"
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: colors.blueAccent[700],
                        borderTop: "none"
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`
                    }, 
                }}
            >
                <DataGrid
                    checkboxSelection
                    rows={mockDataInvoices}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Invoices;
