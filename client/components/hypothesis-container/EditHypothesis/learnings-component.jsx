LearningsComponent = React.createClass({
  getInitialState(){
    return {
      learning:''
    }
  },
  handleChange(evt){
    this.setState({
      learning:evt.target.value
    })
  },
  handleKeyUp: function(e) {
    if(e.which === 13 && this.handleKeyEnter) {
      this.handleKeyEnter();
    }
 },
 handleKeyEnter() {
   let id = Date.unow();

   let learning = this.props.learningCard.learningTest;

   learning[id] = this.state.learning.substring(0, this.state.learning.length - 1);;

   Learnings.update({
     _id:this.props.learningCard._id
   }, {
     $set:{
       learningTest:learning
     }
   });
   this.setState({
     learning:''
   })
 },
  render(){
    return(
      <fieldset className="form-group">
        <textarea className="form-control" rows="3" value={this.state.learning} onChange={this.handleChange} onKeyUp={this.handleKeyUp}></textarea>
      </fieldset>
    )
  }
})
