import Expenses from './components/Expenses/Expenses';

function App() {

  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 1200,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 90000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 20000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 5000,
      date: new Date(2021, 5, 12),
    }
  ];

  return (
    <div>
      <h2>Lets get Started!!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
