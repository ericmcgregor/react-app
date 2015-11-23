FlowRouter.route('/projects/:projectId/:hypothesisId', {
  name:'project-details-hypothesis',
  action:function(params){
    ReactLayout.render(AppLayout, {content: <HypothesisDetailView hypothesisId={params.hypothesisId}/>, options:<HypothesisDetailNavOptions />})
  }
})
