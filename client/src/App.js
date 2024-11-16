import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import TextField from "@mui/material/TextField";
import List from "@mui/material/List";

import ListItem from "./components/ListItem";
import BottomDrawer from "./components/BottomDrawer";

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [contactList, setSearchList] = React.useState(contacts);

  React.useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts');
      const data = await response.json();
      setContacts(data);
      setSearchList(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleSearch = (value) => {
    let contactList = contacts.filter((e) =>
      e.Name.toUpperCase().includes(value.toUpperCase()),
    );
    setSearchList(contactList);
  };

  const handleAddContact = (value) => {
    setSearchList([...contactList, { Name: value }]);
  };

  return (
    <Container>
      <Paper elevation={10} sx={{ p: 3, mt: 3 }}>
        <Box sx={{ mx: "auto" }}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <h3>Contact Management</h3>
            </Grid>
            <Grid item xs={3}>
              <BottomDrawer createContact={handleAddContact} />
            </Grid>
          </Grid>

          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            sx={{ width: "100%" }}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {contactList.map((contact) => (
              <ListItem key={contact._id} contact={contact} />
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
