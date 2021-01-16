import React, {  useEffect, useState } from 'react';
import Home from './Home';

function Main(props) {

   return (
    <Home state={props.match.params.stateID}></Home>  
    );
}

export default Main;