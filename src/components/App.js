import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      filters: {
        type: "all"
      }
    };
  }
  //show the type in input
  onChangeType = animalType => {
    this.setState({ filters: { type: animalType } });
  };

  onFindPetsClick = () => {
    let urlEnd = "";
    if (this.state.filters.type === "all") {
      urlEnd = "pets";
    } else if (this.state.filters.type === "cat") {
      urlEnd = "pets?type=cat";
    } else if (this.state.filters.type === "dog") {
      urlEnd = "pets?type=dog";
    } else if (this.state.filters.type === "micropig") {
      urlEnd = "pets?type=micropig";
    }
    fetch(`/api/${urlEnd}`)
      .then(resp => {
        return resp.json();
      })
      .then(petData => {
        this.setState({ pets: petData });
      });
  };

  onAdoptPet = id => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === id) {
          return { ...pet, isAdopted: true };
        } else {
          return pet;
        }
      })
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              {/* use as prop */}
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
