import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  orderBy,
  query,
} from "firebase/firestore";

import "./App.css";
import Box from "./Box";
import db from "./firebase.js";
import Topic from "./Topic";

function App() {
  const [todo, setTodo] = useState([[]]);
  const [given, setGiven] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const dbRef = query(collection(db, "todos"), orderBy("time", "desc"));

    onSnapshot(dbRef, (docsnap) => {
      setTodo(
        docsnap.docs.map((doc) => [
          doc.data().title,
          doc.data().work,
          doc.data().time,
          doc.id
        ])
      );
    });
  }, []);

  function addData(event) {
    event.preventDefault();

    const dbRef = collection(db, "todos");
    addDoc(dbRef, {
      title: type,
      work: given,
      time: serverTimestamp(),
    })
      .then((docRef) => {
        console.log("Document has been added successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    setGiven("");
  }
  function handleChange(event) {
    setType(event.target.value);
  }
  return (
    <div className="App">
      <Topic />
      <div className="givedata">
        <FormControl sx={{ m: 1, minWidth: 120 }} className="data">
          <Select
            style={{ width: "15%" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Type"
            onChange={handleChange}
          >
            <MenuItem value={"Study"}>Study</MenuItem>
            <MenuItem value={"Movie"}>Movie</MenuItem>
            <MenuItem value={"Play"}>Play</MenuItem>
          </Select>
          <TextField
            style={{ width: "30%" }}
            id="outlined-multiline-flexible"
            label="Todo"
            multiline
            maxRows={4}
            value={given}
            onChange={(event) => setGiven(event.target.value)}
          />
          <Button
            disabled={!given}
            type="submit"
            onClick={addData}
            variant="contained"
            color="secondary"
          >
            Add Your Thoughts
          </Button>
        </FormControl>
      </div>

      <div className="to">
        <ul className="boxlist">
          {todo.map((i) => (
            <Box toto={i[1]} title={i[0]} id={i[3]}/>
          ))}
        </ul>
      </div>
    </div>


  );
}

export default App;
