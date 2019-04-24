import React from "react";

class Pet extends React.Component {
  adoptPet = () => {
    if (this.props.isAdopted === true) return;
    this.props.onAdoptPet(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.gender === "male" ? "♂ " : "♀ "}
            {this.props.name}
          </a>
          <div className="meta">
            <span className="date">
              {this.props.type.charAt(0).toUpperCase() +
                this.props.type.slice(1)}
            </span>
          </div>
          <div className="description">
            <p>Age: {this.props.age + " years"}</p>
            <p>Weight: {this.props.weight + " lbs"}</p>
          </div>
        </div>
        <div className="extra content">
          <button
            className={
              this.props.isAdopted ? "ui primary button" : "ui disabled button"
            }
          >
            Already adopted
          </button>
          <button
            className={
              this.props.isAdopted ? "ui disabled button" : "ui primary button"
            }
            onClick={this.adoptPet}
          >
            Adopt pet
          </button>
        </div>
      </div>
    );
  }
}

export default Pet;
