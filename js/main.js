const copyButton = document.getElementById("copy");
const email = document.getElementById("email");
const note = document.getElementById("note");

const selectEmail = () => {
  const range = document.createRange();
  range.selectNodeContents(email);

  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  note.textContent = "Email selected. Press Ctrl+C to copy.";
};

copyButton.addEventListener("click", () => {
  const text = email.textContent.trim();

  if (!navigator.clipboard) {
    selectEmail();
    return;
  }

  navigator.clipboard
    .writeText(text)
    .then(() => {
      note.textContent = "Email copied.";
    })
    .catch(selectEmail);
});
