<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="organization">
        <html>
            <head>
                <title>
                    Thi is an xsl file 
                </title>
                <style>
                    table{
                        margin-left:450px;
                        background-color:orange;
                        cell-spacing : 15px;
                    }
                    h2{
                        background-color:grey;
                        letter-spacing : 15px;
                        color:white;

                    }
                    
                </style>
            </head>
            <body>
                <h2 style="text-align:center" >ORGANIZATION</h2>
                <table border="2"  cell-spacing="15px" cellpadding="15px">
                    <tr bgcolor="pink">
                        <th colspan="4" >" Employees Data "</th>
                    </tr>
                    <tr bgcolor="red" style="color:white">
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>SALARY</th>
                        <th>NUMBER</th>
                    </tr>

                    <xsl:for-each select="department">
                        <tr bgcolor="lightblue" >
                            <td bgcolor="yellow"><xsl:value-of select="name" ></xsl:value-of></td>
                            <td><xsl:value-of select="age" ></xsl:value-of></td>
                            <td><xsl:value-of select="salary" ></xsl:value-of></td>
                            <td><xsl:value-of select="number" ></xsl:value-of></td>
                            
                        </tr>
                    </xsl:for-each>

                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>