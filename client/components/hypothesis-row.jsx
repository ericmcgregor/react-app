EditTitleMixin = {
  componentWillMount() {
    this.setState({
      edit:false
    })
  },
  toggleEdit() {
    this.setState({
      edit:!this.state.edit
    })
  },
  handleChange() {

  },
  renderEdit(target) {
    return  <fieldset className="form-group" onBlur={this.toggleEdit}>
      <input ref="editName" className="form-control" value={target} onChange={this.handleChange}/>
    </fieldset>
  },
  renderTitle() {
    return <h5 onClick={this.toggleEdit}>Test</h5>
  },
}

HypothesisRow = React.createClass({
  propTypes: {
    hypothesis: React.PropTypes.object.isRequired
  },
  mixins: [ReactMeteorData, EditTitleMixin],

  // Loads items from the Tasks collection and puts them on this.data.tasks
  getMeteorData() {
    return {
      TestCards: TestCard.find({hypothesiId:this.props.hypothesis._id}, {
        sort:{
          '_id':1
        }
      }).fetch()
    }
  },

  removeHypothesis() {
    Hypothesis.remove(this.props.hypothesis._id);
  },
  createTestCard() {
    Meteor.call('createTestCard', this.props.hypothesis._id);
  },

  render() {
    let hypothesi = this.props.hypothesis;

    return <div>

      <div className="card">
        <div className="card-block">
          <h4 className="card-title">{hypothesi.name}</h4>
          {this.state.edit ? this.renderEdit(hypothesi.name) : this.renderTitle()}
          <a href="#" className="card-link" onClick={this.removeHypothesis}>Remove</a>
          <a href="#" className="card-link" onClick={this.createTestCard}>create test card</a>
        </div>
        <div className="card-block">
          {this.data.TestCards.map(function(testCard){
            return <TestCardRow key={testCard._id} testCard={testCard} />
          })}

        </div>
      </div>

    </div>
  }

})


      //
      // <p>{hypothesi.name} - {hypothesi._id}</p>
      // <p onClick={this.removeHypothesis}>delete</p>
      // <p onClick={this.createTestCard}>create test card</p>
      // <table className="table">
      // <tbody>
      // {this.data.TestCards.map(function(testCard){
      //   return <TestCardRow key={testCard._id} testCard={testCard} />
      // })}
      // </tbody>
      // </table>
