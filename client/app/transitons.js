export default function(){
  this.transition(
    this.fromRoute('chatSessions'),
    this.toRoute('chatSession'),
    this.use('toLeft'),
    this.reverse('toRight')
  )

  this.transition(
    this.fromRoute('login'),
    this.use('crossFade')
  );

  this.transition(
    this.toRoute('login'),
    this.use('fade')
  );
};
