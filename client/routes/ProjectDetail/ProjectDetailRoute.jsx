
FlowRouter.route('/projects/:projectId', {
  name:'project-details',
  action:function(params){
    ReactLayout.render(AppLayout, {content: <ProjectDetailView projectId={params.projectId}/>, options:<ProjectDetailNavOptions />})
  }
})
