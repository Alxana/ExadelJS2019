const fs = require('fs');
const Ajv = require('ajv');

const ajv = new Ajv({ allErrors: true });

function validateJSON (pathJSON, pathErr){
    const schema = fs.readFileSync('jsonFiles/schema.json', 'utf8');
    const data = fs.readFileSync(pathJSON, 'utf8');

    let valid = ajv.validate(JSON.parse(schema), JSON.parse(data));
    if (!valid) {
        console.log(pathJSON + ': fail');
        fs.writeFileSync(pathErr, JSON.stringify(ajv.errors, null, '\t'), 'utf8')
    } else {
        console.log(pathJSON + ': ok');
    }
}

validateJSON('jsonFiles/1.json', 'jsonFiles/errors1.json');
validateJSON('jsonFiles/2.json', 'jsonFiles/errors2.json');
validateJSON('jsonFiles/3.json', 'jsonFiles/errors3.json');
validateJSON('jsonFiles/4.json', 'jsonFiles/errors4.json');
validateJSON('jsonFiles/5.json', 'jsonFiles/errors5.json');
