import { Box, useTheme } from '@mui/material'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { mockDataTeam } from '../../data/mockData'
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        {field: "id", headerName: "ID", cellClassName: "id-column--cell", headerClassName: "id-column--header"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell", headerClassName: "name-column--header"},
        {field: "age", headerName: "Age", type: "number", align: "left", headerAlign: "left", headerClassName: "age-column--header"},
        {field: "phone", headerName: "Phone Number", flex: 1, cellClassName: "phone-column--cell", headerClassName: "phone-column--header"},
        {field: "email", headerName: "Email", flex: 1, cellClassName: "email-column--cell", headerClassName: "email-column--header"},
        {field: "access", headerName: "Access Level", flex: 1, cellClassName: "access-column--cell", headerClassName: "access-column--header",
            alignHeader: "center",
            renderCell: ({row}) => {
                return (
                    <Box
                        width="60%"
                        m="10px auto"
                        p="5px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        backgroundColor={
                            row.access === "admin" ? colors.greenAccent[600] : colors.greenAccent[800]
                        }
                        borderRadius="4px"
                    >
                        {row.access === "admin" && <AdminPanelSettingsOutlinedIcon />}
                        {row.access === "manager" && <LockOpenOutlinedIcon />}
                        {row.access === "user" && <SecurityOutlinedIcon />}
                    </Box>
                )
            }
        }
    ]

    return (
        <Box ml="20px">
            <Header title="TEAM" subtitle="Manage your Team Members" />
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
                    "& .age-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .phone-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .email-column--header" : {
                        backgroundColor: colors.blueAccent[700]
                    },
                    "& .access-column--header" : {
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
                    }
                }}
            >
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Team;
