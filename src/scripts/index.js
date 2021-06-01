import '../styles/index.scss';
                                                 
if (process.env.NODE_ENV === 'development') {                 
  require('../index.html');  
                                   
  const searchInput = document.getElementById('searchInput');       
                                                              
  const maskInput = () => {                              
    searchInput.type = "password";                               
  };                                
                                    
  const unmaskInput = () => {                              
    searchInput.type = "text";                               
  };                                                          
                                                 
  // Check the string length of the input value        
  const isStringLongEnough = (input) => {              
    const length = input.value.trim().length;          
    return (length + 1) > 9 ? true : false;            
  };                                                    
                                                   
  const isNumeric = (input) => {                         
     const val = Number(input.value);             
     return Number.isNaN(val) ? false : true;                      
  };                                               
                                                   
  const startMasking = () => {                           
    return setTimeout(maskInput, 5000);            
  };                                     
                                         
  const stopMasking = (tmVal) => {                           
    clearTimeout(tmVal);                          
    unmaskInput();                  
  };                                              
                                                  
                                                  
  // Identify the input element                             
                                                            
  // Attach the event listener to the input                 
  searchInput.addEventListener("keydown", function(){       
    const isLong = isStringLongEnough(this);                
    const isNum = isNumeric(this);                
                                                  
    let tmVal = null;                             
    stopMasking(tmVal);                           
                                                  
    if (isLong && isNum)  {                                          
      tmVal = startMasking(this);                      
    }                                                       
  });                                                       
}                                                             
                                                              
                                                              
                                                              
                                                              
console.log('webpack starterkit');                            
                                                              