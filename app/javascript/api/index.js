const getDogs = ()=>{
  return fetch("/dogs")
  .then((response)=>{
    if(response.status === 200){
      return response.json()
    }else{
      return Promise.new(()=>{
        resolve({error: 'There was an error.'})
      })
    }
  })
}


export {
  getDogs
}
