import React from  'react'



const EditForm = (props) => {


  let editInput = props.book
  console.log(editInput);



  return (
    <form onSubmit={e => {
      e.preventDefault()
      var input = {
        title: editInput.value
      }
      props.submitEditBook(input)
      e.target.reset()
    }}
    className="form-horizontal">
    <div className="input-group">
      <label className="col-sm-2 control-label">Title: </label>
      <div className="col-sm-10">
         <input type="text" value={editInput} name="title"
          ref={node => editInput = node}
          className="form-control"/>
      </div>
    </div>
    <br/>
    <div className="input-group">
      <div className="col-sm-offset-2 col-sm-10">
        <input type="submit" className="btn btn-default"/>
      </div>
    </div>
  </form>
)

}

export default EditForm
