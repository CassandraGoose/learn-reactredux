import React from  'react'

const EditDeleteForm
 = (props) => {
  let titleInput = null
  return (
    <form onSubmit={e => {
      e.preventDefault()
      props.deleteBook(input)
    }}
    className="form-horizontal">
    <div className="input-group">
    <Link to={`/books/${props.book.id}/edit`}><button className="btn btn-primary">Edit</button></Link>
    <button className="btn btn-primary" type="submit">Remove</button>
    </div>
  </form>
  )
}

export default EditDeleteForm
