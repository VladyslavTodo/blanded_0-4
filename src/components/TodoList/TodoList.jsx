import { Grid, GridItem, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'redux/selectors';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  console.log(todos);
  return (
    <Grid>
      {todos.length > 0 &&
        todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <Todo id={todo.id} text={todo.text} counter={index + 1} />
          </GridItem>
        ))}
    </Grid>
  );
};
