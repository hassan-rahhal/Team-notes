import { useState } from "react";
import { setDoc, doc, collection } from "firebase/firestore";
import { database, auth } from "../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

function NoteForm() {
  const [note, setNote] = useState('');
  const [user] = useAuthState(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please sign in");
      return;
    }

    try {
      const collectionRef = collection(database, "notes");
      const docRef = doc(collectionRef); // auto-generated ID
      await setDoc(docRef, {
        text: note,
        name: user.displayName || user.uid || "Anonymous",
        createdAt: new Date(),
      });
      alert("Note added successfully");
      setNote(""); // clear form
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="note-text">Note Text:</label>
        <textarea
          id="note-text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Enter your note"
          required
        ></textarea>
      </div>
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
