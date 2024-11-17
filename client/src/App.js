import * as React from "react";

import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";

import TextField from "@mui/material/TextField";
import List from "@mui/material/List";

import ListItem from "./components/ListItem";
import BottomDrawer from "./components/BottomDrawer";

import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [contactList, setSearchList] = React.useState(contacts);

  React.useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contacts`);
      const data = await response.json();
      setContacts(data);
      setSearchList(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleSearch = (value) => {
    let contactList = contacts.filter((e) =>
      e.name.toUpperCase().includes(value.toUpperCase()),
    );
    setSearchList(contactList);
  };

  const handleAddContact = async (contactData) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        },
      );
      const newContact = await response.json();
      setContacts([...contacts, newContact]);
      setSearchList([...contacts, newContact]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const handleUpdateContact = async (updatedContact) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/contacts/${updatedContact._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedContact),
        },
      );

      const updatedData = await response.json();

      // Update local state directly without fetching all contacts again
      setContacts(
        contacts.map((contact) =>
          contact._id === updatedData._id ? updatedData : contact,
        ),
      );
      setSearchList(
        contactList.map((contact) =>
          contact._id === updatedData._id ? updatedData : contact,
        ),
      );
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  const handleDelete = async (contactId) => {
    try {
      // Make a DELETE request to the server
      const response = await fetch(`${process.env.REACT_APP_API_URL}/contacts/${contactId}`, {
        method: "DELETE",
      });
  
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      // Optionally, you can log the response or handle it as needed
      const result = await response.json();
      console.log(result.message); // Log success message
  
      //TODO: Update local state to remove the deleted contact
     } catch (error) {
      console.error("Error deleting contact:", error);
      // Optionally show an error message to the user
      alert("Failed to delete contact. Please try again.");
    }
  }

  return (
    <Container>
      <Paper square={false} variant="outlined" sx={{ p: 3, mt: 3 }}>
        <Box sx={{ mx: "auto" }}>
          <Grid container spacing={1}>
            <Grid size={9}>
              <h3>Contact Management</h3>
            </Grid>
            <Grid size={3}>
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
              <>
                <IconButton aria-label="delete" sx={{ float: "right" }}>
                  <DeleteOutlineIcon onClick={() => handleDelete(contact._id)}/>
                </IconButton>
                <BottomDrawer
                  contact={contact}
                  updateContact={handleUpdateContact}
                />
                <ListItem key={contact._id} contact={contact} />
              </>
            ))}
          </List>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
