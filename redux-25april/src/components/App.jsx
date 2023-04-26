import Button from './Button';
import Table from './Table'


export default function App() {
  const buttonNames = ['Button 1', 'Button 2', 'Button 3'];

  return (
    <div>
      {buttonNames.map(name => (
        <Button key={name} name={name} />
      ))}
      <Table />
    </div>
  );
}