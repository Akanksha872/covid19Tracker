import { useHistory } from "react-router-dom";

function CovidTable(props) {

  const history = useHistory();
    const tableStyle ={
    width:' 100%',
    border: '2px solid'
      };

  function  stateClicked(state){
    if(!props.isStateData){
     history.push('/state/'+state+'/');
    }
  }
  return (
    <div>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>
              State
            </th>
            <th>
              Confirmed
            </th>
            <th>
              Active
            </th>
            <th>
              Recovered
            </th>
            <th>
              Deceased
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(props.data).map((list, index)=>{
            return list[0]!='TT' && (
            <tr key={index}>
              <td onClick={()=>stateClicked(list[0])}>{list[0]}</td>
              <td>{list[1].total.confirmed}</td>
              <td>{list[1].total.confirmed}</td>
              <td>{list[1].total.recovered}</td>
              <td>{list[1].total.deceased}</td>
          </tr>)
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CovidTable;