function renderToHTML() {

    let div = $('<div>');
    div
        .addClass('languages')
        .appendTo('.top');




    let spanTwo = $('<span>');
    spanTwo
        .text('/')
        .appendTo(div);

    let span = $('<span>');
    span
        .attr('id','bg')
        .text('BG')
        .prependTo(spanTwo);

    let spanThree =$('<span>');
    spanThree
        .attr('id','en')
        .addClass('hidden')
        .text('EN')
    .appendTo(div);

    let h1 = $('<h1>');
    h1
        .attr('id','heading')
        .text('The most used programming languages')
        .appendTo('.top');


    let h2 =$('<h2>');
    h2
        .addClass('article-header')
        .text('Javascript')
        .appendTo('.first-article');

    let divartitcle=$('<div>');
    divartitcle
        .addClass('js-container')
        .appendTo('.first-article');

    let img=$("<img>");
    img
        .addClass('js-logo')
        .attr('src','js.png')
        .attr('alt','js');
        img.appendTo(divartitcle);

    let p = $('<p>');
    p
        .addClass('js-info')
        .text('JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.\n' +
            '                It is a language which is also characterized as dynamic, weakly typed, prototype-based and\n' +
            '                multi-paradigm.\n' +
            '                Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.\n' +
            '                It is used to make dynamic webpages interactive and provide online programs, including video games. The\n' +
            '                majority\n' +
            '                of websites employ it[citation needed], and all modern web browsers support it without the need for\n' +
            '                plug-ins by means\n' +
            '                of a built-in JavaScript engine. Each of the many JavaScript engines represent a different\n' +
            '                implementation of JavaScript,\n' +
            '                all based on the ECMAScript specification, with some engines not supporting the spec fully, and with\n' +
            '                many engines\n' +
            '                supporting additional features beyond ECMA.\n')
        .appendTo(divartitcle);

    let h2Two =$('<h2>');
    h2Two
        .addClass('article-header')
        .text('C#')
        .appendTo('.second-article');

    let divartitcleTwo=$('<div>');
    divartitcleTwo
        .addClass('csharp-container')
        .appendTo('.second-article');

    let pTwo = $('<p>');
    pTwo
        .addClass('csharp-info')
        .text('C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,\n' +
            '                functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\n' +
            '                It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma\n' +
            '                (ECMA-334)\n' +
            '                and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language\n' +
            '                Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is\n' +
            '                led\n' +
            '                by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with\n' +
            '                Visual Studio 2017 version 15.5.\n')
        .appendTo(divartitcleTwo);

    let imgTwo=$("<img>");
    imgTwo
        .attr('src','csharp.jpg')
        .attr('alt','csharp-logo');
    imgTwo.appendTo(divartitcleTwo);


    let h3 =$('<h2>');
    h3
        .addClass('article-header')
        .text('Java')
        .appendTo('.last-article');

    let divartitcleThree=$('<div>');
    divartitcleThree
        .addClass('java-container')
        .appendTo('.last-article');

    let imgThree=$("<img>");
    imgThree
        .attr('src','java-logoo.png')
        .attr('alt','java-logo');
    imgThree.appendTo(divartitcleThree);

    let pThree = $('<p>');
    pThree
        .addClass('java-info')
        .text('Java is a general-purpose computer-programming language that is concurrent, class-based,\n' +
            '                object-oriented,\n' +
            '                and specifically designed to have as few implementation dependencies as possible. It is intended to let\n' +
            '                application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on\n' +
            '                all platforms that support Java without the need for recompilation. Java applications are typically\n' +
            '                compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.\n' +
            '                As of 2016, Java is one of the most popular programming languages in use, particularly for\n' +
            '                client-server web applications, with a reported 9 million developers. Java was originally developed by\n' +
            '                James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in\n' +
            '                1995\n' +
            '                as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C\n' +
            '                and C++,\n' +
            '                but it has fewer low-level facilities than either of them.\n')
        .appendTo(divartitcleThree);

    $('#en').on('click', function () {
        $('#en').css("color", "purple");
        $('#en').css("font-style", "italic");

        $('#bg').css("color", "black");
        $('#bg').css("font-style", "normal");

        $('#heading').empty();
        $('#heading').text('The most used programming languages');

        $('.js-info').empty();
        $('.js-info').text('  JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.\n' +
            '                It is a language which is also characterized as dynamic, weakly typed, prototype-based and\n' +
            '                multi-paradigm.\n' +
            '                Alongside HTML and CSS, JavaScript is one of the three core technologies of the World Wide Web.\n' +
            '                It is used to make dynamic webpages interactive and provide online programs, including video games. The\n' +
            '                majority\n' +
            '                of websites employ it[citation needed], and all modern web browsers support it without the need for\n' +
            '                plug-ins by means\n' +
            '                of a built-in JavaScript engine. Each of the many JavaScript engines represent a different\n' +
            '                implementation of JavaScript,\n' +
            '                all based on the ECMAScript specification, with some engines not supporting the spec fully, and with\n' +
            '                many engines\n' +
            '                supporting additional features beyond ECMA.\n');

        $('.csharp-info').empty();
        $('.csharp-info').text(' C# is a multi-paradigm programming language encompassing strong typing, imperative, declarative,\n' +
            '                functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\n' +
            '                It was developed by Microsoft within its .NET initiative and later approved as a standard by Ecma\n' +
            '                (ECMA-334)\n' +
            '                and ISO (ISO/IEC 23270:2006). C# is one of the programming languages designed for the Common Language\n' +
            '                Infrastructure.C# is a general-purpose, object-oriented programming language. Its development team is\n' +
            '                led\n' +
            '                by Anders Hejlsberg. The most recent version is C# 7.2, which was released in 2017 along with\n' +
            '                Visual Studio 2017 version 15.5.\n');

        $('.java-info').empty();
        $('.java-info').text('Java is a general-purpose computer-programming language that is concurrent, class-based,\n' +
            '                object-oriented,\n' +
            '                and specifically designed to have as few implementation dependencies as possible. It is intended to let\n' +
            '                application developers "write once, run anywhere" (WORA), meaning that compiled Java code can run on\n' +
            '                all platforms that support Java without the need for recompilation. Java applications are typically\n' +
            '                compiled to bytecode that can run on any Java virtual machine (JVM) regardless of computer architecture.\n' +
            '                As of 2016, Java is one of the most popular programming languages in use, particularly for\n' +
            '                client-server web applications, with a reported 9 million developers. Java was originally developed by\n' +
            '                James Gosling at Sun Microsystems (which has since been acquired by Oracle Corporation) and released in\n' +
            '                1995\n' +
            '                as a core component of Sun Microsystems\' Java platform. The language derives much of its syntax from C\n' +
            '                and C++,\n' +
            '                but it has fewer low-level facilities than either of them.\n');



    })

    $('#bg').on('click', function () {
        $('#en').css("color", "black");
        $('#en').css("font-style", "normal");
        $('#bg').css("color", "purple");
        $('#bg').css("font-style", "italic");

        $('#heading').empty();
        $('#heading').text('Най-използваните езици за програмиране');

        $('.js-info').empty();
        $('.js-info').text('JavaScript (чете се джаваскрипт) е интерпретируем език за програмиране, разпространяван с повечето Уеб\n' +
            'браузъри.\n' +
            'Поддържа обектно-ориентиран и функционален стил на програмиране. Създаден е в Netscape през 1995 г.\n' +
            'Най-често се\n' +
            'прилага към HTML-а на Интернет страница с цел добавяне на функционалност и зареждане на данни. Може да\n' +
            'се ползва\n' +
            'също за писане на сървърни скриптове JSON, както и за много други приложения. JavaScript не трябва да се\n' +
            'бърка с Java,\n' +
            'съвпадението на имената е резултат от маркетингово решение на Netscape. Javascript е стандартизиран под\n' +
            'името EcmaScript.\n' +
            '\n');

        $('.csharp-info').empty();
        $('.csharp-info').text('C# (C Sharp, произнася се Си Шарп) е обектно-ориентиран език за програмиране, разработен от Microsoft,\n' +
            'като част от софтуерната платформа .NET. Стремежът още при създаването на C# езика е бил да се създаде\n' +
            'един прост, модерен, обектно-ориентиран език с общо предназначение. Основа за C# са C++, Java и донякъде\n' +
            'езици като Delphi, VB.NET и C. Той е проектиран да балансира мощност (C++) с възможност за бързо\n' +
            'разработване\n' +
            '(Visual Basic и Java). Те представляват съвкупност от дефиниции на класове, които съдържат в себе си\n' +
            'методи,\n' +
            'а в методите е разположена програмната логика – инструкциите, които компютърът изпълнява. Програмите на\n' +
            'C#\n' +
            'представляват един или няколко файла с разширение .cs., в които се съдържат дефиниции на класове и други\n' +
            'типове. Тези файлове се компилират от компилатора на C# (csc) до изпълним код и в резултат се получават\n' +
            'асемблита – файлове със същото име, но с различно разширение (.exe или .dll).\n' +
            '\n');

        $('.java-info').empty();
        $('.java-info').text('Java или Джава е обектно-ориентиран език за програмиране. Кодът, написан на Java, не се компилира\n' +
            'до машинен код за определен процесор, а до специфичен за езика код, наречен байт код. Поради това\n' +
            'за изпълнението на програма, написана на Java, е необходима т. нар. виртуална машина\n' +
            '(на английски: Java Virtual Machine).');

    })


}
renderToHTML();