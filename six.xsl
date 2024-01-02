<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    
    <xsl:template match="music">
        <html>
            <head>
                <style>
                    table{
                        margin-left:550px;
                        text-align:center;
                    }
                    h2{
                        text-align:center;
                    }
                </style>
                <title>This Is A Music Album</title>
            </head>
            <body>
                <h2 >MUSIC ALBUM</h2>
                <table  border="2" cellspacing="15px" cellpadding="15px" bgcolor="red">
                    <tr>
                        <th colspan="2" bgcolor="teal" style="color:white">MUSIC LIST</th>
                    </tr>

                    <tr bgcolor="orange">
                        <th>Title</th>
                        <th>Artist</th>
                    </tr>

                    <xsl:for-each select="album">
                        <tr bgcolor="pink">
                            <td><xsl:value-of select="title"></xsl:value-of></td>
                            <td><xsl:value-of select="artist"></xsl:value-of></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>

    </xsl:template>
</xsl:stylesheet>