import React from 'react';
import './style.css';

const user = [
  {
    name: 'shankar',
    id: 1,
    country: 'India',
  },
  {
    name: 'siva',
    id: 2,
    country: 'US',
  },
  {
    name: 'reddy',
    id: 3,
    country: 'London',
  },
  {
    name: 'reddy',
    id: 4,
    country: 'China',
  },
];

export default function App() {
  const [data, setData] = React.useState(user);

  React.useEffect(() => {
    getcall();
  }, []);

  const getcall = () => {
    const res = data.map((item) => {
      if (item.country === 'India') {
        return { ...item, isIndian: true };
      } else {
        return { ...item, isIndian: false };
      }
    });
    setData(res);
  };

  const changeHandler = () => {
    const res = data.filter((item) => item.isIndian === true);
    setData(res);
  };

  const handleDelete = (value) => {
    const res = data.filter((item) => item.id !== value);
    setData(res);

    console.log(value);
  };

  console.log(data);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {data.map((item) => {
        return (
          <div
            style={{ display: 'flex', justifyContent: 'space-between' }}
            key={item.id}
          >
            <div>{item.id}</div>
            <h1>{item.country}</h1>
            <button onClick={() => handleDelete(item.id)}>del</button>
          </div>
        );
      })}
      <button onClick={() => changeHandler()}>Delete</button>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
