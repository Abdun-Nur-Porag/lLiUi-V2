
// 🟢 Non-Nested Component Usage
button()
  .onClick(() => alert("Button Clicked!"))
  .add("body");

// 🟢 Nested Prebuilt Component Usage with Editing
container()
  .child([
    card(),
    create("p").text("This is a paragraph inside the container.")
  ])
  .editChild(0, cardEl => {
    cardEl.style({ backgroundColor: "#f9f9f9" }); // Modify card background
  })
  .editChild(1, paraEl => {
    paraEl.text("This is updated text").style({ color: "blue" }).attrs({ id: "new-paragraph" });

    // 🔹 Add new child dynamically inside paragraph
    paraEl.child([
      create("span").text(" Nested span inside paragraph."),
      create("button").text("New Button"),
      button()
    ]);
  })
  .add("body");