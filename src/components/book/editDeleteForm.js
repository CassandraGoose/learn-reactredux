import React from  'react'

const EditDeleteForm = (props) => {
  console.log('propsineditdeleteform', props);
  return (
    <form onSubmit={e => {
      e.preventDefault()
      console.log('deleting');
      props.deleteBook(props.bookID)
    }}
    className="form-horizontal">
    <div className="input-group">
    <button className="btn btn-primary" type="submit">Remove</button>
    </div>
  </form>
  )
}

export default EditDeleteForm
