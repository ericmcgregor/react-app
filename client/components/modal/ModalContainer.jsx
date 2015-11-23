ModalContainer = React.createClass({
  render(){
    return(
      <div
        className="modal fade"
        id={this.props.modalId}
        tabIndex={-1}
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">×</span>
                <span className="sr-only">Close</span>
              </button>
              <h4 className="modal-title" id="myModalLabel">
                {this.props.modalTitle}
              </h4>
            </div>
            {this.props.modalBody}

          </div>
        </div>
      </div>
    )
  }
})
