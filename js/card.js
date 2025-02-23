const card_com={
  myCardImg: ()=>
  create("img")
 .class(["responsive","small"])
 ,
 myCardBody: ()=>
  create("div")
 .class(["padding"])
 ,
  myCard: ()=>
  create("article")
 .class(["no-padding","",""])
.child([])
}
registerComponents(card_com)
