import {Component} from 'react';

class Form extends Component {
  initialState = {
    name: "",
    car: "",
    model: ""
  }
  state = this.initialState

  handleChange  = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    let flag = true
    Object.keys(this.state).forEach((key, i) => {
      if(!this.state[key]){
        flag = false
        return
      }
    });

    if(!flag){
      alert(`all field should not be empty`)
      return
    }

    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render(){
    const { name, car, model } = this.state;
    return (
      <form>
        <h3>Enter The Data</h3>
        <table>
            <tbody>
            <tr>
              <td>
                <label htmlFor='name'>Name:</label>
              </td>
              <td>
                <input 
                type='text'
                id = 'name'
                name = 'name'
                value={name}
                onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='car'>Car:</label>
              </td>
              <td>
                <input 
                type='text'
                id = 'name'
                name = 'car'
                value = {car}
                onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='name'>Model:</label>
              </td>
              <td>
                <input 
                type='text'
                id = 'model'
                name = 'model'
                value={model}
                onChange={this.handleChange} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <center>
                  <input type='button' value="submit" id="submit" onClick={this.submitForm} />
                  <input type='reset' value="Reset" id="reset" onClick={this.submitForm} />
                </center>
              </td>
            </tr>
            </tbody>
        </table>
      </form>
    )
  } 
}


export default Form