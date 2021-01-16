function Box(props) {

    const boxStyling ={
    display: 'flex',
    flexDirection: "column",
    border: '2px solid black',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    height: '10rem',
    margin:'3rem'
    };


  return (
    <span style={boxStyling}>
        <span>
            {props.text}
        </span>
        <span>
          {props.number}  
        </span>  
    </span>
  );
}

export default Box;