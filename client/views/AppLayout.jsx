AppLayout = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {
    return {
      sidenav: Session.get('sidenav'),
    }
  },

  render(){
    console.log(this.data.sidenav)
    return (
      <div id="app-container">



      <div id="app-content-layout">
        {
          this.data.sidenav ? <SideNav open={this.data.sidenav}/> : null
        }



        <div id="main-content-layout">
          <GlobalNav />

          <div className="scrollWrapper">
            {this.props.content}
          </div>
        </div>

        </div>
      </div>
    );
  }
})
