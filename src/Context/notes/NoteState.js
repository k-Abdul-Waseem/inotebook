import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesIntial = [
    {
      _id: "658cf6c4d6368e7252097375",
      user: "658cf68dd6368e7252097373",
      title: "Wasuu ki notes",
      description: "Its a secret",
      tag: "secret",
      date: "2023-12-28T04:17:08.757Z",
      __v: 0,
    },
    {
      _id: "658ecbf2e9ba2d4aabc373e4",
      user: "658cf68dd6368e7252097373",
      title: "henry cavendish",
      description: "Its a secret of henry ",
      tag: "secret",
      date: "2023-12-29T13:38:58.076Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesIntial);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
