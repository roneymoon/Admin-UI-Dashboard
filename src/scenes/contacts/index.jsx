import { Box, Typography, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataContacts } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", flex: 0.5, cellClassName: "id-column--cell", headerClassName: "id-column--header"},
        {field: "registrarId", headerName: "Registrar ID", flex: 0.5, cellClassName: "registrarId-column--cell", headerClassName: "registrarId-column--header"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", headerClassName: "name-column--header"},
        {field: "email", headerName: "Email", flex: 1, headerClassName: "email-column--header"},
        {field: "city", headerName: "City", flex: 1, headerClassName: "city-column--header"},
        {field: "zipCode", headerName: "ZipCode", flex: 1, headerClassName: "zipCode-column--header"},
    ]

    return (
        <Box ml="20px">
            <Header title="CONTACTS" subtitle="Manage team members" />
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
                    "& .registrarId-column--header": {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .email-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .city-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .zipCode-column--header": {
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
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${colors.grey[100]} !important`
                    },
                    "& .MuiDataGrid-toolbarContainer": {
                        marginBottom: "10px"
                    }
                }}
            >
                <DataGrid
                    rows={mockDataContacts}
                    columns={columns}
                    slots={{toolbar: GridToolbar}}
                />
            </Box>
        </Box>
    )
}

export default Contacts;
