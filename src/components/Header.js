import React, { PureComponent } from "react";

export class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.newReservation = this.newReservation.bind(this);
  }
  newReservation() {
    localStorage.removeItem("ChoseHotel");
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div className="header-top">
          <div className="container-fluid">
            <div className="header-container">
              <div className="header-title">
                <div className="title">Otel</div>
                <div className="sub-title">Rezervasyon Sistemi</div>
              </div>
              <button
                className="btn btn-secondary"
                onClick={this.newReservation}
              >
                Yeni Rezarvasyon Yap
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
