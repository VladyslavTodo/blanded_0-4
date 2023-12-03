import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { TodoList } from 'components/TodoList/TodoList';

const App = () => {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
    };

    setTodos(prevState => [...prevState, todo]);
  };

  const handleSubmit = data => {
    addTodo(data);
  };

  const deleteTodo = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm onSubmit={handleSubmit} />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};

export default App;
