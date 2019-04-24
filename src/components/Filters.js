import React from "react";

class Filters extends React.Component {
  //create function to grab value from the input for the func in parent
  changeType = () => {
    let animalType = document.getElementById("type").value;
    this.props.onChangeType(animalType);
  };

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          {/* //set listener "on change" to do what the func above says, use as prop  */}
          <select name="type" id="type" onChange={this.changeType}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button
            className="ui secondary button"
            onClick={this.props.onFindPetsClick}
          >
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
