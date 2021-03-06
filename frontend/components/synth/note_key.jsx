import React from 'react';

const NoteKey = ({note,pressed}) => {
  // debugger;
  return (
    <div className={pressed ? "note-key-pressed" : "note-key"} >{note}</div>
  );
};

export default NoteKey;
