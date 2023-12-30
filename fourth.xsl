<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="/organization">
    <html>
        <head>
            <title>This Is an XSL FILE</title>
        </head>
        <body bgmargin="auto">
            <h2 style="text-align:center">XSL WORK</h2>
            <table border="3">
                <tr bgcolor="green">
                    <th colspan="4">DALDA EMPYLOYEES </th>
                </tr>


                <tr bgcolor="yellow">
                    <th>NAME</th>
                    <th>BLOCK</th>
                    <th>LOCATION</th>
                    <th>NUMBER</th>

                </tr>
                <xsl:for-each select="department">
                    <tr bgcolor="pink">
                        <td><xsl:value-of select="name"></xsl:value-of></td>
                        <td><xsl:value-of select="block"></xsl:value-of></td>
                        <td><xsl:value-of select="location"></xsl:value-of></td>
                        <td><xsl:value-of select="number"></xsl:value-of></td>
                    </tr>
                </xsl:for-each> 

            </table>
        </body>
    </html>
</xsl:template>
</xsl:stylesheet>
