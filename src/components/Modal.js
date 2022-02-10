import React, { Component } from "react";
export default class Modal extends Component {
  render() {
    let modelStyle = {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.8)",
    };

    return (
      <div className="modal show fade" style={modelStyle}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={this.props.hide}
              ></button>
            </div>
            <div className="modal-body">
              <video autoPlay loop muted className="modal-video">
                <source src={this.props.video} type="video/mp4" />
              </video>

              <p>{this.props.detail}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
