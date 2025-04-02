function Menu1781432412008({setTela}) {
    return (
      <div>
        <h1>Siga</h1>
        <p onClick={()=>{setTela("professor")}}>Professor</p>  
        <p onClick={()=>{setTela("curso")}}>Curso</p>
        <p onClick={()=>{setTela("diciplina")}}>Diciplina</p>
     
        </div> 
    );
  }
  
  export default Menu1781432412008;

  
  