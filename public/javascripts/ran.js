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
            });


            this.on("queuecomplete", function() {
                // $('.future').append('<input type="button" value="test" id="target"/>')
                $('.future').append('<input type="button" value="Submit" id="target"/>')
                var lastFileLoaded = fileList[fileList.length - 1].name
                console.log("Last File Upload: ", lastFileLoaded)
                console.log("the filz", this.getAcceptedFiles())
            });

        }


        // init: function() {
    	// 			var totalFiles = 0,
    	// 				completeFiles = 0;
    	// 			this.on("addedfile", function(file){
    	// 				totalFiles += 1;
    	// 			});
    	// 			this.on("removed file", function(file){
    	// 				totalFiles -= 1;
    	// 			});
    	// 			this.on("complete", function(file) {
    	// 				completeFiles += 1;
    	// 				if (completeFiles === totalFiles){
    	// 					// $.get("/", function(data){
        //                         // var jsonData = JSON.stringify(data.trim())
        //                         console.log("HEY HEY IM DONE")
        //                         $('h1').html("What is a doing a science?!!!")
        //                         // $('p').html(jsonData)
        //
        //
    	// 						// var jsonData = JSON.parse(data.trim()); //a fix to remove white space shit
        //
    	// 						//define the filelist
    	// 						// filelist = fileList();
        //
    	// 						//set high and low limits for calculating color from Vr value
    	// 						// setLowHigh();
        //
        //
    	// 						//list sorted files next to heatmap
    	// 						// listSortedFiles();
        //
    	// 						//clear the table-container before creating new table
    	// 						//incase files were already loaded
    	// 						$("#table-container").empty();
        //
    	// 						//create heatmap
    	// 						// d3FlipTable();
        //
    	// 						//show operations and force-plot-button
        //
    	// 						$("#force-plot-button, #operations-main, #svd-main").fadeIn("slow");
    	// 					// });
    	// 					//resize thumbnails
    	// 					$(".dropzone").css("padding", "0px");
    	// 					$(".dz-preview").css("height","65px");
    	// 					$(".dz-filename").css("height", "30px");
    	// 					$(".dz-details").css("height", "30px");
        //
    	// 					//resize entire dropzone
    	// 					// $(".dropzone").css("min-height", "100px").css("max-height", "100px");
        //
    	// 					//show total container
    	// 					// $("#total-container").show();
    	// 					// $("#dropzone-title").show();
    	// 				};
     //   				});
    	// 		}

    }

// $(document).ready(function(){

    // $('#target').click(function(){
    //     alert("JQuery Running!");
    // });

    $(document).on('click', '#target', function() {
        alert("JQuery Running!");
        console.log(fileList)
        alert( fileList );
    });


    $("#mcfly").click(function() {
    // Send key values here for each file/newfile name or attach a session name
    //   alert( "Handler for .click() called." );
      console.log(fileList)
      alert( fileList );
    });

// });


// Dropzone.on("complete", function(file) {
//    window.location.href = "http://stackoverflow.com";
// });
