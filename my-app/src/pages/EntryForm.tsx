import { FormEvent, useEffect, useState } from "react";
import { addEntry, Entry, readEntry, UnsavedEntry, updateEntry } from "../lib/data";
import { useNavigate, useParams } from "react-router";

type Props = {
  isEditing: boolean;
  setIsEditing: (value: boolean) => void;
}

export function EntryForm({isEditing, setIsEditing}: Props) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<unknown>();
  const [entry, setEntry] = useState<UnsavedEntry| Entry | null>(null);

  const entryId = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getEntry = async () => {
      try {
        const entry  = await readEntry(Number(entryId.entryId));
        if (!entry) return;
        setTitle(entry.title);
        setImage(entry.photoUrl);
        setNotes(entry.notes);
      } catch (error){
        setError(error);
      }
      }
      getEntry();
    },[entryId])

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newEntry: UnsavedEntry = {
      title: title,
      photoUrl: image,
      notes: notes,
    }
    if(isEditing) {
     const editedEntry: Entry = {
      ...newEntry,
      entryId: Number(entryId.entryId)
     }
     setEntry(editedEntry);
     console.log('entry', entry);
    } else {
      setEntry(newEntry);
    }
    setIsEditing(false);
    setTitle('');
    setImage('');
    setNotes('');
  }

  useEffect(() => {
    const addData = async () => {
      if (!entry) return;
      try {
        if (!isEditing) {
          await addEntry(entry);
        } else {
          await updateEntry(entry as Entry);
        }
      } catch (error) {
        setError(error);
        }
      finally {
        navigate('/');
      }
    }
    addData();
  }, [entry, isEditing, navigate])


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-full d-flex justify-between">
            <h1 id="formH1">New Entry</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit} id="entryForm">
          <div className="row margin-bottom-1">
            <div className="column-half">
              <img
                className="input-b-radius form-image"
                id="formImage"
                src="images/placeholder-image-square.jpg"
                alt="image of entry image"
              />
            </div>
            <div className="column-half">
              <label className="margin-bottom-1 d-block" htmlFor="title">
                Title
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formTitle"
                name="formTitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label className="margin-bottom-1 d-block" htmlFor="photoUrk">
                Photo URL
              </label>
              <input
                required
                className="input-b-color text-padding input-b-radius purple-outline input-height margin-bottom-2 d-block width-100"
                type="text"
                id="formURL"
                name="formURL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className="row margin-bottom-1">
            <div className="column-full">
              <label className="margin-bottom-1 d-block" htmlFor="formNotes">
                Notes
              </label>
              <textarea
                required
                className="input-b-color text-padding input-b-radius purple-outline d-block width-100"
                name="formNotes"
                id="formNotes"
                cols={30}
                rows={10}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="column-full d-flex justify-between">
              <button
                className="invisible delete-entry-button"
                type="button"
                id="deleteEntry"
              >
                Delete Entry
              </button>
              <button className="input-b-radius text-padding purple-background white-text">
                SAVE
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
