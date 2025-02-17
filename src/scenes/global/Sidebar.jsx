import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import { Link } from 'react-router-dom'
import { tokens } from '../../theme'
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined'
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined'
import PieChartOutlinedIcon from '@mui/icons-material/PieChartOutlined'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined'

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  )
}


const Sidebar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .pro-inner-item": {
          color: `${colors.grey[100]} !important`,
        },
        "& .pro-inner-item:hover": {
          color: `#868dfb !important`,
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        }
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              color: colors.grey[100]
            }}>
            {
              !isCollapsed && (
                <Box display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant='h3' color={colors.grey[100]}>ADMINIS</Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>

          {/* USER */}
          {
            !isCollapsed && (
              <Box mb="25px">
                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt='Profile-user'
                    width="100px"
                    height="100px"
                    src="../../assets/user.jpg"
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography variant='h2' color={colors.grey[100]} fontWeight="bold" sx={{ mb: "10px 0 0 0 " }}>Roney Moon</Typography>
                  <Typography variant='h5' color={colors.greenAccent[500]}>Web Developer</Typography>
                </Box>
              </Box>
            )
          }

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              sx={{ m: "15px 0 5px 20px" }}
              variant="h5"
              color={colors.grey[300]}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              sx={{ m: "15px 0 5px 20px" }}
              variant="h5"
              color={colors.grey[300]}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              sx={{ m: "15px 0 5px 20px" }}
              variant="h5"
              color={colors.grey[300]}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>

    </Box>
  )
}

export default Sidebar
