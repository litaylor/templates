function pickColor(choice) {
  if (!choice) {
    return 'white'
  }
  else if ('white') {
    return 'white'
  }
  else if (choice=='green') {
    return '#50a291'
  }
  else if (choice=='orange') {
    return '#FDAF7D'
  }
}


function pickScale(choice) {
  if (!choice) {
    return chroma.scale(['white','#50a291']);
  }
  else if (choice=='white-green') {
    return chroma.scale(['white','#50a291']);
  }
  else if (choice=='gray-white-green') {
    return chroma.scale(['#cccccc','white','#50a291']);
  }
  else if (choice=='gray-white-orange') {
    return chroma.scale(['#dddddd','white','#FDAF7D']);
  }
  else if (choice=='gray-white-brightOrange') {
    return chroma.scale(['#dddddd','white','#FF6400']);
  }
  else if (choice=='green-white') {
    return chroma.scale(['#50a291','white']);
  }
  else if (choice=='orange-white-green') {
    return chroma.scale(['#FDAF7D','white','#50a291']);
  }
  else if (choice=='brightOrange-white-green') {
    return chroma.scale(['#FF6400','white','#50a291']);
  }
  else if (choice=='green-white-orange') {
    return chroma.scale(['#50a291','white','#FDAF7D']);
  }
  else if (choice=='green-white-brightOrange') {
    return chroma.scale(['#50a291','white','#FF6400']);
  }
  else if (choice=='white-brightOrange') {
    return chroma.scale(['white','#FF6400']);
  }
}

function pickDomain (data, choice) {
  var array = [];
  for (var i = 0; i < data.length; i++) {
    array.push(data[i].properties.value);
  }
  if (!choice) {
    return [Math.min(...array), Math.max(...array)]
  }
  else {
    if (choice.includes('min')) {
      choice[choice.indexOf('min')]=Math.min(...array);
    }
    if (choice.includes('max')) {
      choice[choice.indexOf('max')]=Math.max(...array);
    }
    return choice
  }

}
