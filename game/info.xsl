<?xml version="1.0" encoding="ISO-8859-1"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">

<html> 
<head>
<style>
html, body{
  height: 100%;
}
body { 
			background-image: url(bg1.jpg);
			background-position:center center;
			background-attachment: fixed;
			background-size:100% 100%;
			overflow:hidden;
}
@font-face {
    font-family:akki1;
    src: url(akki.ttf);
}
td
{

	font-family:akki1;
	font-size:30px;
	padding:10px;
	color:#82230f;

}
#table1
{
	margin-top:20%;
}
.image,.rimage{
border-radius:50%;
}
.image:hover
{

	 filter: grayscale(100%);
	 transform: rotate(360deg);
	 transition:2s;
	 
}
.rimage:hover
{

	 filter: grayscale(100%);
	 transform: rotate(360deg);
	 transition:2s;
	 
}
.rimage{
	display:none;
}
	
@media only screen and (max-width:600px) {
#table1{
	font-size:30px;
	margin-top:70%;
}
.image
{
	display:none;
	
}
.rimage{
display:block;

	}
}
</style>
</head>
<body style="overflow:hidden;">
    <center>
  <table id="table1">

    <xsl:for-each select="develop/student">
    <tr >
      <td ><xsl:value-of select="rollno" /></td>
      <td><xsl:value-of select="name"/></td>
	  <img>
            <xsl:attribute name="width">
                100
            </xsl:attribute>
            <xsl:attribute name="height">
                100
            </xsl:attribute>
            <xsl:attribute name="class">
              image
            </xsl:attribute>
            <xsl:attribute name="src">
                <xsl:value-of select="image"/>
            </xsl:attribute>
        </img>
     </tr>
    </xsl:for-each>
	</table>
	
	<table>
	<tr>
	<xsl:for-each select="develop/student">
    <td>
      <img>
            <xsl:attribute name="width">
                50
            </xsl:attribute>
            <xsl:attribute name="height">
                50
            </xsl:attribute>
            <xsl:attribute name="class">
              rimage
            </xsl:attribute>
            <xsl:attribute name="src">
                <xsl:value-of select="image"/>
            </xsl:attribute>
        </img>
    </td>
    </xsl:for-each>
	</tr>
  </table>
  </center>
</body>
</html>
</xsl:template>
</xsl:stylesheet>

