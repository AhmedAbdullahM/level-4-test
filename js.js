const getInputFieldValue=(id)=>{
    const getValue=document.getElementById(id);
    inputFieldValue=getValue.value;
    getValue.value='';
    return inputFieldValue;
    
}

// send all input section
const addAll=()=>{
    const name=getInputFieldValue('name-field')
    const email=getInputFieldValue('email-field')
    const message=getInputFieldValue('sms-field')
    saveAllToLocalStorage(name,email,message)
}

// get all 
const getFromLocaleStorage=()=>{
    const allInfo=localStorage.getItem('information')
    let information={};
    if(allInfo){
        JSON.parse(information)
    }
    return information;
}

//save all

const saveAllToLocalStorage=(name,email,message)=>{
    const allInfo=getFromLocaleStorage();
    allInfo[name]={email,message}
       const infoStringified=JSON.stringify(allInfo)
    localStorage.setItem(infoStringified)
}

// ---
const saveToLocalStorage=(property,id)=>{
    const getValue=getInputFieldValue(id)
    localStorage.setItem(property,getValue)
    
}

const removeItem=(proName)=>{
    localStorage.removeItem(proName)
}


document.getElementById('btn-send-name').addEventListener('click', function(){
saveToLocalStorage('name', 'name-field')  
})
document.getElementById('btn-delete-name').addEventListener('click', function(){
   
    removeItem('name')
 })

document.getElementById('btn-send-email').addEventListener('click', function(){
saveToLocalStorage('email', 'email-field')  
})
document.getElementById('btn-delete-email').addEventListener('click', function(){
    removeItem('email')
})

document.getElementById('btn-send-message').addEventListener('click', function(){
    saveToLocalStorage('message', 'sms-field')  
    })
    document.getElementById('btn-delete-message').addEventListener('click', function(){
        removeItem('message')
    })