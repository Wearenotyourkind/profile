import React from 'react';


const Activities =({imgsrc,description,year})=>{
    return(
        <>
          <div style={{
              margin:'1%',
              padding:'1%',
              width:'20%',
              height:'15%',
              position:'flex',
              background: 'white',
              borderRadius:'16px',
              boxShadow: '5px 10px 5px 5px gray',
              flexDirection:'row'
          }}>
              <img src={imgsrc} style={{width:'25%',height:'25%'}}/>
              <h2>{description}</h2>
              <h3>{year}</h3>
          </div>
        </>
    );
};
export default Activities;