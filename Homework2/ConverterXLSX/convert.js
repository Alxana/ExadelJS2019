const fs = require('fs');
const util = require('util');
const Excel = require('exceljs');
const XLSX = require('XLSX');
const wb = new Excel.Workbook();


async function converterXLSX(pathJSON, pathXLSX){
    await readJSONDir(pathJSON);
    await wb.xlsx.writeFile(pathXLSX + '/jsonParsed.xlsx');
}


function jsonToExcel(json, ws, row, column){
    for(let key in json) {
        ws.getCell(row, column).value = key;
        if (typeof json[key] === "object"){
            row = jsonToExcel(json[key], ws, ++row, column+1)
        } else {
            ws.getCell(row++, column + 1).value = json[key];
        }
    }
    return row;
}

async function readJSONDir(pathDir){
    const readdir = util.promisify(fs.readdir);
    let files;
    try {
        files = await readdir(pathDir);
    } catch(err){
        console.log(err);
    }

    for (let i in files){
        if (files[i].endsWith(".json")){
            let ws = wb.addWorksheet(files[i]);
            let json = JSON.parse(fs.readFileSync(pathDir + files[i], 'utf8'));
            jsonToExcel(json, ws, 1, 1);
        }
    }
}

converterXLSX('jsonFiles/', 'xlsxFiles/');