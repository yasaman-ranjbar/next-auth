const AddTodo = ({addTodo , value}) => {
  

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" onChange={value} />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
