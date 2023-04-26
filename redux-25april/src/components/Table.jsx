import { useSelector } from 'react-redux';
import './ButtonTable.css'

const Table = () => {
    const buttonData = useSelector(state => state);
  
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(buttonData).map(name => (
            <tr key={name}>
              <td>{name}</td>
              <td>{buttonData[name]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table