class Form(){
  <!DOCTYPE html><html><head> 
<body>
    <form action >
     <h1>Please select a color</h1>
     <fieldset>
     <select id = "selColor">
      <option value = "#FFFFFF">White</option>
      <option value = "#FF0000">Red</option>
      <option value = "#FFCC00">Orange</option>
      <option value = "#FFFF00">Yellow</option>
      <option value = "#00FF00">Green</option>
      <option value = "#0000FF">Blue</option>
      <option value = "#663366">Indigo</option>
      <option value = "#FF00FF">Violet</option>
     </select>
     <input type = "button"
       value = "change color"
       onclick = "changeColor()" />
     </fieldset>
    </form>
    </body>
   </html>
}