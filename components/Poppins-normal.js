﻿import { jsPDF } from "jspdf"
var callAddFont = function () {
this.addFileToVFS('Poppins-normal.ttf', font);
this.addFont('Poppins-normal.ttf', 'Poppins', 'normal');
};
jsPDF.API.events.push(['addFonts', callAddFont])