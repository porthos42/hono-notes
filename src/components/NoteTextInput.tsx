"use client";

type Props = {
  noteId: string;
  startingNoteText: string;
};

function NoteTextInput({ noteId, startingNoteText }: Props) {
  console.log("Note Id: " + noteId);
  return <div>NoteTextInput</div>;
}

export default NoteTextInput;
