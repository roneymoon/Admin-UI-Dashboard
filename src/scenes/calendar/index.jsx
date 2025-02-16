import { useState } from "react"
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction' // needed for dateClick
import listPlugin from '@fullcalendar/list'
import { formatDate } from "@fullcalendar/core";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material"
import Header from "../../components/Header"
import { tokens } from "../../theme"

const Calendar = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Enter a title for your event")
    const calendarApi = selected.view.calendar
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay
      })
    }
  }

  const handleEventClick = (selected) => {
    // here you can instead create your own modal for production level app
    // but instead we will use the built-in modal
    if (
      window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)
    ) {
      selected.event.remove()
    }
  }


  return (
    <Box>
      <Header title="CALENDAR" subtitle="Manage your calendar events" />


      <Box display="flex" justifyContent="space-between" mx="20px" my="10px">
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 25%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {
              currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px"
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 80%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2025-02-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2025-02-15",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Calendar