var doc = new Gselper({
    // Identifiant du document
    key: "0AmJXA-o9JHeddEJOWF81MDUzRlhhUFVRWFctc0xydnc",
    // Le worksheet du document
    worksheet: "od6",
    // La fonction à appeler lorsque le document est chargé
    onComplete: function (data) {
        // Ou parcourir le document ligne après ligne
        var suivant, html = "";
        $.each(doc.get(), function (i, line) {
            suivant = line.id + 1
            // et afficher le résultat dans la console
            html += "<h1>" + line.title + "</h1>";
            html += "<style>#ligne_" + line.id + ":after{letter-spacing:" + line.line + "px}</style>"
            html += "<hr id=\"ligne_" + line.id + "\"/>";
            html += " <h2><a href=\"" + line.link + "\" target=\"_blank\">" + line.date + "</a></h2>"
            html += "<p>" + line.content + "</p>"
            html += "<a href=\"#\" id=\"suivant\" onclick=\"suivant(" + suivant + ")\">And then ?</div>"
        });
        $("#ecran").html(html)
    }
});
