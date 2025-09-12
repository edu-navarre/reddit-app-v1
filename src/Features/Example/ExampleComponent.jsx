import { useSelector, useDispatch } from 'react-redux';
import { activate, deactivate } from './exampleSlice';

function ExampleComponent() {
  const status = useSelector(state => state.example.status);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Status: {status}</h2>
      <button onClick={() => dispatch(activate())}>Activate</button>
      <button onClick={() => dispatch(deactivate())}>Deactivate</button>
    </div>
  );
}

export default ExampleComponent;