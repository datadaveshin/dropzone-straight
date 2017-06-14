    // Dropzone.autoDiscover = false;
    var fileList = []; // No longer need this, can get with .getAcceptedFiles()
    Dropzone.options.myAwesomeDropzone = {
        uploadMultiple: false,
        maxFiles: 100,
        maxFilesize: 0.1,
        // acceptedFiles: 'application/octet-stream,text/plain,.dat',
        // acceptedFiles: 'application/octet-stream',
        // acceptedFiles: 'application/octet-stream,.dat',
        // acceptedFiles: 'text/plain,.dat',
        acceptedFiles: '.dat',
        dictFileTooBig: "File is too big ({{filesize}} MB), max filesize is: {{maxFilesize}} MB.",
        addRemoveLinks: true,

        init: function() {

            // DAVE!!!!
            // PUT THIS WHOLE THING IN A PROMISE!!!!!!!!!!!!
            // THEN WHEN IT COMES BACK, MAKE THE BUTTON OR DO SOMETHING

            this.on("success", function(file, responseText, files) {
                console.log("\n\nSUCCESS! ~~~~~~~~~~~~~>")
              // Handle the responseText here. For example, add the text to the preview element:
              //   file.previewTemplate.appendChild(document.createTextNode(responseText));
                var jsonData = JSON.stringify(file)
                var typeofFile = typeof file;
                $('h1').html("What is a doing a science?!!! Uploaded:" + responseText)
                // $('p').html("Results " + typeofFile)
                // $('p').html("Results " + jsonData)
                // $('p').html("Results " + JSON.stringify(file.name))
                fileList.push(file)
                // this.removeFile(file)
                // $('.future').append('<h6>' + responseText + '</h6>')
            })

            .on("queuecomplete", function() {
                // $('.future').append('<input type="button" value="test" id="target"/>')
                $('.future').append('<form action="/process" method="post"><input type="button" value="Analyze" id="target"/></form>')
                var lastFileLoaded = fileList[fileList.length - 1].name
                console.log("Last File Upload: ", lastFileLoaded)
                console.log("the filz", this.getAcceptedFiles())
            });

        }
    }

    $(document).on('click', '#target', function() {
        // alert("JQuery Running!");
        console.log(fileList)
        // alert( fileList );
        sendRequest(fileList.length, fileList)
    });

    function sendRequest(depLocation, arrLocation) {
        console.log("\n\n\n LOCATIONS !!!!!", depLocation, arrLocation);
        let departureObj = {
            url: `http://localhost:3003/process/`,
            method: "GET",
            success: successRouteAll
        };
        // Start the AJAX request
        $.ajax(departureObj);
    };

    function successRouteAll(data) {
        $('.future').append('<h6>' + data + '</h6>')
    }


    $("#mcfly").click(function() {
    // Send key values here for each file/newfile name or attach a session name
    //   alert( "Handler for .click() called." );
      console.log(fileList)
      alert( fileList );
    });

// });
