

// 3. Organizuojate vestuves - pasiimkite informaciją iš "https://party-wedding.glitch.me/v1/wedding" ir atvaizduokite lentelėje: vardą, plusOne ir attending. Parašykite taip, kad plusOne ir attending būtų ne true/false, bet "+" arba "-".

fetch("https://party-wedding.glitch.me/v1/wedding")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(e => console.log(e.message))

  const table = (item, index) => {
    const newRow = document.createElement("tr")
    newLi.innerHTML = 
    `
    <td>${fName}</td>
    <td>${plusOne}</td>
    <td>${attending}</td>

    `
      const fName = document.createElement("h1")
      fName.textContent = data.results[0].name.first
      document.body.append(fName)
  }



