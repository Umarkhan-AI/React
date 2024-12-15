const ArrMethods = (name) => {
 const arr = [
    {
        name : "umar" ,
        age : 35 ,
        id : "1"
    },
    {
        name : "anas" ,
        age : 15 ,
        id : "2"
    },
    {
        name : "adil" ,
        age : 15 ,
        id : "3"
    }
 ]

 let filter = arr.filter((item , index) => item.age == 15 && item.name == "adil") 
 let Find = arr.find((item , index) => item.age == 15)
 console.log(filter);
 console.log(Find);
 
  
    return (
        <div>
        <h1>Map Methods</h1>
        {arr.map((item, index) => (
          <div key={index}>
         <h1>{item.name }</h1>
          <p></p>

          </div>
        ))}
        <h1>filter method</h1>
        {filter.map((item, index) => (
          <div key={index}>
         <h1>{item.name }</h1>
          <p></p>

          </div>
        ))}
      </div>
    );
  };
  export default ArrMethods;