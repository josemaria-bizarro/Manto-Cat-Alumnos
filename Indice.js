function doGet()
{
  const html = HtmlService.createTemplateFromFile('Formalumnos');
  html.pubUrl ="https://script.google.com/a/macros/ceeccafetales.edu.mx/s/AKfycbyufHrSlY1QYn9LjEjF6JsS-PJEJ20ZAoK_M3iws0Or/dev"
  
  const salida = html.evaluate();
  
  return salida;
}

function include(filename) //funcion para incluir los datos de los archivos css.html y js.html funciona para ls dos indistintamente
{
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function DataAlumnos()
{
  
  //const ss = SpreadsheetApp.getActiveSpreadsheet();
  const ss= SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1kzmgvrbkQ7ehUslRxR4ghkpSeI2yT99M3h-Dyo-EEVY/")
  const sheetAlumnos =ss.getSheetByName('ACTIVOS_FORMATEADO');
  const dataAlumnos = sheetAlumnos.getDataRange().getDisplayValues();
  dataAlumnos.shift();
  //console.log(dataAlumnos)
return dataAlumnos;
  //console.log(dataAlumnos)
}


function actualizaTabla(datuak)
{
  const ss= SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1kzmgvrbkQ7ehUslRxR4ghkpSeI2yT99M3h-Dyo-EEVY/")
  sheetIkasle =ss.getSheetByName("ACTIVOS_FORMATEADO");

  const datuakIkasle= sheetIkasle.getDataRange().getValues();
  let werror=0;
  var ikasleFilter = datuakIkasle.filter(ilara => ilara[1]==datuak[1]);
  if (ikasleFilter.length>0)
  {
    
    var azkenIlara = ikasleFilter[0][44];
    var datuakSalida=[]
    datuakSalida.push(datuak[0],datuak[1],ikasleFilter[0][2],ikasleFilter[0][3],ikasleFilter[0][4],datuak[2],datuak[3],ikasleFilter[0][7],ikasleFilter[0][8],ikasleFilter[0][9],ikasleFilter[0][10],ikasleFilter[0][11],ikasleFilter[0][12],ikasleFilter[0][13],datuak[4],datuak[5],datuak[6],datuak[7],datuak[8],datuak[9],ikasleFilter[0][20],datuak[13],ikasleFilter[0][22],ikasleFilter[0][23],ikasleFilter[0][24],ikasleFilter[0][25],ikasleFilter[0][26],ikasleFilter[0][27],ikasleFilter[0][28],ikasleFilter[0][29],ikasleFilter[0][30],datuak[14],datuak[15],datuak[10],datuak[11],datuak[16],datuak[12],ikasleFilter[0][37],ikasleFilter[0][38],ikasleFilter[0][39],datuak[17],datuak[18],"",datuak[19],"")
    var salida=[datuakSalida]
    
    //obtiene rango a grabar 
     sheetIkasle.getRange(azkenIlara,1,1,45).setValues(salida)
    //escribe datos modificados
   //console.log(azkenIlara)
  }
  else
  {
    console.log("error");
    werror=1;
  }
return werror;
}

//**** */
function dataGrupo()
{
  const grupoTabla= SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1T5KQCvXiYsGewSoc_A8qugUwSs-ft1NNds4oaNgQxkw/");
  const grupoHoja=grupoTabla.getSheetByName("GRUPOS");
  const datosGrupo=grupoHoja.getDataRange().getDisplayValues();
  datosGrupo.shift()
  return datosGrupo;
}