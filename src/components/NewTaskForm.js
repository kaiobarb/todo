import React from 'react';

export default ({ addTodo }) => {
  const handleAdd = e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addTodo({
      title: formData.get("text"),
      description: formData.get("description"),
      createdOn: new Date().toUTCString(),
    })
    e.target.reset();
  };

  return (
    <form onSubmit={handleAdd}>
      <div className='form-group'>
        <label htmlFor='text'>
          Text: 
        </label>
        <input name='text' type='text' id='text' className='form-control'/>  
      </div>
      <div className='form-group'>
        <label htmlFor='description'>
          Description: 
        </label>
        <textarea
          name="description"
          id="description"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  )
}