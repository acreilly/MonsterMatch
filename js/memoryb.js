document.write('<div align="center"><table cellpadding="0" cellspacing="0" border="0">');
for (var a = 0; a <= 5; a++) {
    document.write('<tr>');
    for (var b = 0; b <= 4; b++) {
        document.write('<td align="center" class="blk" id="t' + ((5 * a) + b) + '"></td>');
    }
    document.write('<\/tr>');
}
document.write('<\/table><form name="mem"><input type="button" id="count" value="0:00" onclick="window.start()" \/><\/form><\/div>');