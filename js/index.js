
var starT = parseInt (prompt ('Г‚ГўГҐГ¤ГЁГІГҐ Г*Г*Г·Г*Г«Г® ГЁГ*ГІГҐГ°ГўГ*Г«Г*', ''));
var enD = parseInt (prompt ('Г‚ГўГҐГ¤ГЁГІГҐ ГЄГ®Г*ГҐГ¶ ГЁГ*ГІГҐГ°ГўГ*Г«Г*', ''));
 
var nuM = 0; // ГЁГ§Г*Г*Г·Г*Г«ГјГ*Г® ГЄГ®Г«ГЁГ·ГҐГ±ГІГўГ® Г·ГЁГ±ГҐГ« Г”ГЁГЎГ®Г*Г*Г·Г·ГЁ Гў ГЁГ*ГІГҐГ°ГўГ*Г«ГҐ Г*ГіГ«ГҐГўГ®ГҐ
 
for (var j = starT; j <= enD; j++)
   {
   var pluS  = Math.sqrt (5 * j * j + 4);
   var minuS = Math.sqrt (5 * j * j - 4);
   if (pluS == parseInt (pluS) || minuS == parseInt (minuS)) nuM++;
   }
 
document.write ('ГЉГ®Г«ГЁГ·ГҐГ±ГІГўГ® Г·ГЁГ±ГҐГ« Г”ГЁГЎГ®Г*Г*Г·Г·ГЁ Гў ГЁГ*ГІГҐГ°ГўГ*Г«ГҐ [' + starT + ', ' + enD + '] Г°Г*ГўГ*Г® ' + nuM);