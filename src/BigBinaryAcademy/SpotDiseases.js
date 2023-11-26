const findOtherDiseases = locations => {
    let otherDiseases = [];
    
    locations.forEach((location) => {
      if(location.diseases.includes('COVID-19')) {
        location.diseases.forEach((disease) => disease !== 'COVID-19' && !otherDiseases.includes(disease) ? otherDiseases.push(disease) : disease) 
      }
    })
    
    return otherDiseases;
}

const locations =  [
    {
        "id": 1,
        "name": "Gotham",
        "diseases": ['COVID-19', 'Disease-A', 'Disease-B']
    },
    {
        "id": 2,
        "name": "NeverLand",
        "diseases": ['Disease-R', 'Disease-H', 'Disease-G']
    },
    {
        "id": '3',
        "name": "Asgard",
        "diseases": ['Disease-L', 'COVID-19', 'Disease-B']
    }
];

console.log(findOtherDiseases(locations))