import React from "react";
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = event => {

        //Stop th fporm from submitting
        event.preventDefault();
        //get the form text input
        const storeName = this.myInput.current.value;
        //change the page to store
        this.props.history.push(`/store/${storeName}`);
    }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" required ref={this.myInput} placeholder="Store Name" 
        defaultValue = {getFunName()}/>
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
