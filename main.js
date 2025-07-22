async function generateImages() {
  const scriptText = document.getElementById("script").value;
  if (!scriptText) {
    alert("Tafadhali andika script.");
    return;
  }

  const lines = scriptText.split(/[.!?]/).filter(line => line.trim() !== "");
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "Tunatengeneza picha...";

  let content = "";
  for (let i = 0; i < lines.length; i++) {
    const prompt = lines[i].trim();
    const imgUrl = `https://dummyimage.com/600x400/000/fff&text=${encodeURIComponent(prompt)}`;
    content += `<img src="${imgUrl}" alt="Picha ${i+1}"><br>`;
  }
  gallery.innerHTML = content;
}
