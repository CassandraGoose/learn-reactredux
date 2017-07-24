import React from  'react'

const EditDeleteForm = (props) => {
  return (
    <form onSubmit={e => {
      e.preventDefault()
      props.deleteBook()
    }}
    className="form-horizontal">
    <div className="input-group">
    <button className="btn btn-primary" type="submit">Remove</button>
    </div>
  </form>
  )
}

export default EditDeleteForm
