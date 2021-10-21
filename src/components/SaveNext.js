import React, { Component } from "react";
export class SaveNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: [],
      ...props,
      steps: props.steps,
      choseHotel: props.choseHotel,
    };
    this.SaveClick = this.SaveClick.bind(this);
    this.BackClick = this.BackClick.bind(this);
  }
  SaveClick() {
    let stepsNext = this.props.steps;
    if (stepsNext === 1) {
      let error = [];
      let valueHotelList = null;
      let select = null;
      select = document.getElementById("HotelList");
      valueHotelList = select.options[select.selectedIndex].value;
      let startdate = document.querySelectorAll("#start-date input")[0].value;
      let enddate = document.querySelectorAll("#end-date input")[0].value;
      let startDatexX = new Date(startdate).getTime();
      let endDatexX = new Date(enddate).getTime();
      let timeDifX = endDatexX - startDatexX;
      let difDayX = timeDifX / (1000 * 3600 * 24);
      if (valueHotelList === "no-chose") {
        error = error.concat(
          <p>Lütfen reservasyon yapmak istediğiniz oteli seçiniz.</p>
        );
        return this.setState({
          error: error,
        });
      } else if (difDayX === 0) {
        error = error.concat(<p>Lütfen Giriş ve Çıkış Tarihini Seçiniz.</p>);
        return this.setState({
          error: error,
        });
      } else if (difDayX < 0) {
        error = error.concat(
          <p>
            Lütfen <b>Çıkış Tarihinizi</b>, <b>Giriş Tarihizden</b> ileri bir
            tarihi seçiniz.
          </p>
        );
        return this.setState({
          error: error,
        });
      }
    }
    if (stepsNext === 2) {
      let error = [];
      let roomScenicSelectedControl = this.props.choseHotel.room_scenic.length;
      let roomTypeSelectedControl = this.props.choseHotel.room_type.length;
      if (roomScenicSelectedControl === 0) {
        error = error.concat(<p>Lütfen Oda Tipini Seçiniz.</p>);
        return this.setState({
          error: error,
        });
      }
      if (roomTypeSelectedControl === 0) {
        error = error.concat(<p>Lütfen Manzara Seçimi Yapınız.</p>);
        return this.setState({
          error: error,
        });
      }
    }
    if (stepsNext === 3) {
      let error = [];
      let ControlClass =
        document.getElementsByClassName("App-highlight").length;
      if (ControlClass === 0) {
        setTimeout(() => {
          let ControlClass =
            document.getElementsByClassName("App-highlight").length;
          if (ControlClass === 1) {
            stepsNext = this.props.steps + 1;
            this.setState({
              steps: stepsNext,
              error: [],
            });
            this.props.changeSteps(stepsNext);
          }
        }, 1000);
      }
      if (ControlClass === 0) {
        error = error.concat(<p>Lütfen Kredi Kartı Bilginizi Giriniz.</p>);
        document.getElementById("pay-button").click();
        return this.setState({
          error: error,
        });
      }
      if (ControlClass === 1) {
      }
    }
    if (stepsNext < 4) {
      stepsNext = this.props.steps + 1;
      this.setState({
        steps: stepsNext,
        error: [],
      });
      this.props.changeSteps(stepsNext);
    }
  }
  BackClick() {
    let stepsBack = this.props.steps;
    if (stepsBack >= 1) {
      stepsBack = this.props.steps - 1;
      this.setState({
        steps: stepsBack,
      });
      this.props.changeSteps(stepsBack);
    }
  }
  render() {
    return (
      <>
        {this.state.error.length > 0 && (
          <div className="alert alert-danger mt-3 mb-3 row">
            {this.state.error}
          </div>
        )}

        {this.props.steps === 1 && (
          <div className="buttons-area row">
            <button
              className="btn btn-primary ms-auto"
              onClick={this.SaveClick}
            >
              Kaydet ve Devam Et
            </button>
          </div>
        )}
        {this.props.steps === 2 && (
          <div className="buttons-area row">
            <button className="btn btn-primary" onClick={this.BackClick}>
              Geri
            </button>
            <button className="btn btn-primary" onClick={this.SaveClick}>
              Kaydet ve Devam Et
            </button>
          </div>
        )}
        {this.props.steps === 3 && (
          <div className="buttons-area row">
            <button className="btn btn-primary" onClick={this.BackClick}>
              Geri
            </button>
            <button className="btn btn-primary" onClick={this.SaveClick}>
              Ödeme Yap ve Bitir
            </button>
          </div>
        )}
        {this.props.steps === 4 && (
          <div className="buttons-area row d-none">
            <button className="btn btn-primary" onClick={this.BackClick}>
              Geri
            </button>
          </div>
        )}
      </>
    );
  }
}

export default SaveNext;
