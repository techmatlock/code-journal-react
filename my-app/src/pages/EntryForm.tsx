import { FormEvent, useEffect, useState } from "react";
import { addEntry, readEntry, UnsavedEntry } from "../lib/data";
import { useParams } from "react-router";

type Props = {
  isEditing: boolean;
}

export function EntryForm({isEditing}: Props) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<unknown>();
  const [entry, setEntry] = useState<UnsavedEntry | null>(null);


  const entryId = useParams();
  console.log('entryid',entryId.entryId)
  useEffect(() => {
    const getEntry = async () => {
      try {
        const entry  = await readEntry(Number(entryId.entryId));
        console.log('entry',entry)
      } catch (error){
//
      }
      }
      getEntry();
    },[entryId])




  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newEntry: UnsavedEntry = {
      title: title,
      photoUrl: image,
      notes: notes
    }
    setEntry(newEntry);
  }

  useEffect(() => {
    const addData = async () => {
      if (!entry) return;
      try {
        await addEntry(entry);
      } catch (error) {
        setError(error);
        }
    }
    addData();
  }, [entry])


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
