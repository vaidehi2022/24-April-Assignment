// import "./TodoItem.css";

const TodoItem = (props) => {
  const deleteTodo = () => {
    props.onCheck(props.id);
   
  };
  return (
    <div className="todo" onClick={deleteTodo}>
      
      <label>{props.text}</label>
      <button>Delete</button>
    </div>
  );
};

export default TodoItem;
