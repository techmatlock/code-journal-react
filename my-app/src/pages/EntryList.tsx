import { Link } from "react-router-dom";
import '../css/layout.css'
import '../css/reset.css'
import '../css/styles.css'
import { FaPencil } from "react-icons/fa6";
type Props = {
  isEditing: () => void;

}

const testEntries = [
  {
  entryId: 1,
  title: 'Entry 1',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
{
  entryId: 2,
  title: 'Entry 2',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
{
  entryId: 3,
  title: 'Entry 3',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
]
export function EntryList({isEditing}: Props) {
  return (
    <>
    <div className="container" data-view="entries">
        <div className="row">
          <div className="column-full d-flex justify-between align-center">
            <h1>Entries</h1>
            <h3>
              <Link  className="white-text form-link" to='/entry-form/new'>NEW</Link>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <ul className="entry-ul" id="entryUl">
{testEntries.map((entry)=> (<li key={entry.entryId} className="row">
  <div className="row justify-center column-half padding-lr">
    <div className="list-image-wrapper"><img className="entry-img" src={entry.imageURL} alt={entry.title}/></div>
    </div>
    <div className="column-half padding-lr">
      <p className="bold row justify-between">{entry.title}<FaPencil onClick={isEditing} className="edit"/></p>
      <p>{entry.notes}</p>
      </div>
    </li>))}

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
