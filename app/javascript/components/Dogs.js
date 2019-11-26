import React from "react"
import PropTypes from "prop-types"
import { getDogs } from '../api'
class Dogs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dogs: [],
      errors: null,
    }

    this.loadDogs()
  }
  loadDogs = ()=>{
    getDogs()
    .then((response)=>{
      if(response.error){
         this.setState({errors: response.errors})
      }else{
        this.setState({dogs: response})
      }
    })
  }
  render () {
    const{ errors, dogs} = this.state
    return (
      <React.Fragment>
        {errors &&
          <div>
            <h3>There is a problem</h3>
            <ul>
              {errors.map((error)=> <li>error</li>)}
            </ul>
          </div>
        }

        <ul>
          {dogs.map((dog)=>{
            return(<li>{dog.name} - {dog.enjoys}</li>)
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Dogs
