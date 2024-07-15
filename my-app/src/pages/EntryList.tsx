import { Link } from "react-router-dom";
const testEntries = [
  {
  title: 'Entry 1',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
{
  title: 'Entry 2',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
{
  title: 'Entry 3',
  imageURL: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  notes: 'dkjfhsjkdhfdshfjksdhfdksj'
},
]
export function EntryList() {
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
            <ul className="entry-ul" id="entryUl"></ul>
          </div>
        </div>
      </div>
    </>
  )
}
