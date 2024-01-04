<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
<xsl:template match="/organization">

<html>
    <head>
        <title>This Is An XSL File</title>
    </head>
    <body>
        <h2>BANK EMPLOYEE TABLE</h2>
        <table Border="2">
            <tr>
                <th colspan="5">EMPLOYEE DATA</th>
            </tr>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>SALARY</th>
                <th>JOINING DATE</th>
                <th>POSITION</th>
            </tr>

            <xsl:for-each select="department">
                <tr>
                    <td><xsl:value-of select="id"></xsl:value-of></td>
                    <td><xsl:value-of select="name"></xsl:value-of></td>
                    <td><xsl:value-of select="salary"></xsl:value-of></td>
                    <td><xsl:value-of select="joining-date"></xsl:value-of></td>
                    <td><xsl:value-of select="position"></xsl:value-of></td>
                </tr>
            </xsl:for-each>

            

        </table>
    </body>
</html>

</xsl:template>


</xsl:stylesheet>