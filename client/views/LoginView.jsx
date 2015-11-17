LoginView = React.createClass({
  render(){
    return (
      <div id="app-container">

        <GlobalNav />


        <div id="app-content-layout">

          <div id="main-content-layout">
            <div>
              {this.props.content}
            </div>
          </div>

        </div>
        
      </div>
    );
  }
})
