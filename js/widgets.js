const Components = {
  appBar: () =>
    create("header")
      .class([])
      .style({}),

  appBarBody: () =>
    create("nav")
      .class(["top"])
      .style({}),

  appBarBodyLeft: () =>
    create("div")
      .class([])
      .style({}),

  appBarBodyRight: () =>
    create("div")
      .class([])
      .style({}),

  appBarBodyCenter: () =>
    create("div")
      .class([])
      .style({ width: "max" }),

  // ===== Dialog Components =====
  dialogUi: () =>
    create("dialog")
      .class([])
      .style({}),

  dialogUiBody: () =>
    create("div")
      .class([])
      .style({}),

  dialogUiModel: () =>
    create("dialog")
      .class(["modal"])
      .style({}),

  dialogUiFullScreen: () =>
    create("dialog")
      .class(["max"])
      .style({}),

  dialogUiTop: () =>
    create("dialog")
      .class(["top"])
      .style({}),

  dialogUiBottom: () =>
    create("dialog")
      .class(["bottom"])
      .style({}),

  dialogUiLeft: () =>
    create("dialog")
      .class(["left"])
      .style({}),

  dialogUiRight: () =>
    create("dialog")
      .class(["right"])
      .style({}),

  // ===== Card Component =====
  card: () =>
    create("article")
      .class([])
      .style({}),

  // ===== List and Components =====
  list: () =>
    create("ul")
      .class(["list"])
      .style({}),

  listItem: () =>
    create("li")
      .class([])
      .style({}),

  listItemLeft: () =>
    create("button")
      .class(["transparent", "circle"])
      .style({}),

  listItemCenter: () =>
    create("div")
      .class(["max"])
      .style({}),

  listItemTitle: () =>
    create("h6")
      .class(["small"])
      .style({}),

  listItemSubTitle: () =>
    create("text")
      .class([])
      .style({}),

  listItemRight: () =>
    create("label")
      .class([])
      .style({}),

  //============= Menu ==============
  menu: () =>
    create("button")
      .class([])
      .style({}),

  menuTitle: () =>
    create("span")
      .class([])
      .style({}),

  menuBody: () =>
    create("menu")
      .class([])
      .style({}),

  menuItem: () =>
    create("li")
      .class([])
      .style({}),

  //========= Popup =================
  popup: () =>
    create("div")
      .class(["snackbar"])
      .style({}),

  //=========== Layout ============
  horizontalScroll: () =>
    create("div")
      .class(["scroll", "row"])
      .style({}),

  verticalScroll: () =>
    create("div")
      .class(["scroll", "column"])
      .style({}),

  // ===== Steppers Components =====
  steppers: () =>
    create("nav")
      .class([])
      .style({}),

  steppersItem: () =>
    create("button")
      .class(["circle", "small"])
      .style({}),

  steppersItemEnable: () =>
    create("i")
      .class([])
      .style({}),

  steppersSpace: () =>
    create("hr")
      .class(["max"])
      .style({}),

  steppersDisable: () =>
    create("button")
      .class(["circle", "small"])
      .attrs({})
      .style({}),

  // ===== Position Box Components =====
  // App Box General
  positionBox: () =>
    create("article")
      .class(["no-padding", "auto"])
      .style({}),

  positionBoxMedium: () =>
    create("article")
      .class(["no-padding", "medium"])
      .style({}),

  positionBoxSmall: () =>
    create("article")
      .class(["no-padding", "small"])
      .style({}),

  positionBoxLarge: () =>
    create("article")
      .class(["no-padding", "large"])
      .style({}),

  positionBoxExtra: () =>
    create("article")
      .class(["no-padding", "extra"])
      .style({}),

  // App Box Top
  positionBoxTopLeft: () =>
    create("div")
      .class(["padding", "absolute", "left", "top"])
      .style({}),

  positionBoxTopRight: () =>
    create("div")
      .class(["padding", "absolute", "right", "top"])
      .style({}),

  positionBoxTopCenter: () =>
    create("div")
      .class(["padding", "absolute", "center", "top"])
      .style({}),

  // App Box Middle
  positionBoxMiddleLeft: () =>
    create("div")
      .class(["padding", "absolute", "left", "middle"])
      .style({}),

  positionBoxMiddleRight: () =>
    create("div")
      .class(["padding", "absolute", "right", "middle"])
      .style({}),

  positionBoxMiddleCenter: () =>
    create("div")
      .class(["padding", "absolute", "center", "middle"])
      .style({}),

  // App Box Bottom
  positionBoxBottomLeft: () =>
    create("div")
      .class(["padding", "absolute", "left", "bottom"])
      .style({}),

  positionBoxBottomRight: () =>
    create("div")
      .class(["padding", "absolute", "right", "bottom"])
      .style({}),

  positionBoxBottomCenter: () =>
    create("div")
      .class(["padding", "absolute", "center", "bottom"])
      .style({}),

  //=========== Alignment =========
  alignLeft: () =>
    create("article")
      .class(["left-align"])
      .style({}),

  alignTopLeft: () =>
    create("article")
      .class(["left-align", "top-align"])
      .style({}),

  alignBottomLeft: () =>
    create("article")
      .class(["left-align", "bottom"])
      .style({}),

  alignRight: () =>
    create("article")
      .class(["right-align"])
      .style({}),

  alignTopRight: () =>
    create("article")
      .class(["right-align", "top"])
      .style({}),

  alignBottomRight: () =>
    create("article")
      .class(["right-align", "bottom"])
      .style({}),

  alignCenter: () =>
    create("article")
      .class(["center-align", "middle-align"])
      .style({}),

  alignCenterLeft: () =>
    create("article")
      .class(["left-align", "middle-align"])
      .style({}),

  alignCenterRight: () =>
    create("article")
      .class(["right-align", "middle-align"])
      .style({}),

  //======= Button =======
  outlinedButton: () =>
    create("button")
      .class(["border"])
      .style({}),

  buttonCircleTransparent: () =>
    create("button")
      .class(["transparent", "circle"])
      .style({}),

  //======= FAB Button =====
  fabButton: () =>
    create("button")
      .class(["extend", "square"])
      .style({}),

  fabButtonText: () =>
    create("span")
      .class([])
      .style({}),

  fabButtonIcon: () =>
    create("i")
      .class([])
      .style({}),

  //====== ICON =====
  icon: () =>
    create("i")
      .class([])
      .style({}),

  //===== Checkbox =====
  checkbox: () =>
    create("label")
      .class(["checkbox"])
      .style({}),

  checkboxBody: () =>
    create("input")
      .class([])
      .attrs({ type: "checkbox" })
      .style({}),

  checkboxText: () =>
    create("span")
      .class([])
      .style({}),

  checkboxIcon: () =>
    create("label")
      .class(["checkbox", "icon"])
      .style({}),

  oldIcon: () =>
    create("i")
      .class([])
      .style({}),

  newIcon: () =>
    create("i")
      .class([])
      .style({}),

  //======= Chip =====
  chip: () =>
    create("button")
      .class(["chip"])
      .style({}),

  chipText: () =>
    create("span")
      .class([])
      .style({}),

  detailsUi: () =>
    create("details")
      .class([])
      .style({}),

  detailsUiTitle: () =>
    create("summary")
      .class(["chip"])
      .style({}),

  detailsUiText: () =>
    create("p")
      .class(["chip"])
      .style({}),

  //====== Layout =====
  verticalLayout: () =>
    create("nav")
      .class(["vertical"])
      .style({}),

  horizontalLayout: () =>
    create("div")
      .class(["row"])
      .style({}),

  //====== Input =====
  inputBox: () =>
    create("div")
      .class(["field", "label"])
      .style({}),

  inputBoxLabel: () =>
    create("label")
      .class([])
      .style({}),

  inputBoxSubLabel: () =>
    create("span")
      .class(["helper"])
      .style({}),

  inputBoxSubLabelError: () =>
    create("span")
      .class(["error"])
      .style({}),

  //========= Loading Animation ========
  loading: () =>
    create("progress")
      .class(["circle"])
      .style({}),

  //========== Space ========
  space: () =>
    create("div")
      .class(["space"])
      .style({}),

  //======== Max ========
  max: () =>
    create("div")
      .class(["max"])
      .style({}),

  //====== Helper & Error for Global ======
  helper: () =>
    create("span")
      .class(["helper"])
      .style({}),

  error: () =>
    create("error")
      .class(["helper"])
      .style({}),

  //===== Select =====
  selectBox: () =>
    create("div")
      .class(["field", "label", "border"])
      .style({}),

  //===== Seekbar =====
  seekbar: () =>
    create("label")
      .class(["slider"])
      .style({})
      .html(`
        <input type="range" value="5" min="4" max="8">
        <span></span>
        <div class="tooltip"></div>
      `),

  seekbarLeft: () =>
    create("i")
      .class([])
      .style({}),

  seekbarRight: () =>
    create("i")
      .class([])
      .style({}),

  //========== Switch ======
  switchBox: () =>
    create("label")
      .class(["switch"])
      
}

registerComponents(Components);