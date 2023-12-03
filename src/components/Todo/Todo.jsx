import { RiDeleteBinLine, RiExchangeLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodos } from 'redux/slice';
import { useState } from 'react';

export const Todo = ({ text, counter, id }) => {
  const [changedText, setChangedText] = useState(text);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(updateTodos({ id, changedText }));
  };

  const saveText = e => {
    setChangedText(e.currentTarget.value);
  };

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        <Text>{text}</Text>
        <DeleteButton type="button" onClick={() => dispatch(deleteTodo(id))}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
        <input
          type="text"
          name="text"
          value={changedText}
          onChange={saveText}
        />
        <button type="button" onClick={handleChange}>
          <RiExchangeLine size={24} />
        </button>
      </TodoWrapper>
    </>
  );
};
