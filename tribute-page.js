  // This script reads timeline.txt, takes each line an separates the part I wand in bold and normal
  // Since I couldnt find a solution of adding <strong> or bold into half of a <li> I hardcoded it in the html file
  
  /* 
   // Reads Da Vinci's Timeline
   let timeline = async() => {
        const response = await fetch('davinci-timeline.txt');
        const data = await response.text();
        const textByLine =  data.split("\n");
        return textByLine
    }
    
// Creates li elements with the timeline 
timeline().then((textByLine) => {

    for (let line in textByLine){

        let index = textByLine[line].indexOf('.') + 1
    
        let strong = textByLine[line].slice( 0 , index ) // Slices from the beggining until the end of the first sentence. '.' Included. This will have a strong tag
        let normal = textByLine[line].slice(index) // Slices the rest of the string.

    
            let li = document.createElement('li')
            li.setAttribute('class', 'list-items')
            li.setAttribute('id', 'line')

            li.textContent = ` ${strong} ${normal}`;


            let strongTag = document.createElement('strong');
            strongTag.textContent = `${strong} ` 

            document.getElementById('list').append(li)

              
    }
})
*/





