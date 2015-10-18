/*
Abstract:
Templates can be displayed to the user via three primary means:
- pushing a document on the stack
- associating a document with a menu bar item
- presenting a modal
This class shows examples for each one.
*/

var Presenter = {

    /**
     * @description This function demonstrate the default way of present a document. 
     * The document can be presented on screen by adding to to the documents array
     * of the navigationDocument. The navigationDocument allows you to manipulate
     * the documents array with the pushDocument, popDocument, replaceDocument, and
     * removeDocument functions. 
     *
     * You can replace an existing document in the navigationDocumetn array by calling 
     * the replaceDocument function of navigationDocument. replaceDocument requires two
     * arguments: the new document, the old document.
     * @param {Document} xml - The XML document to push on the stack
     */
    defaultPresenter: function(xml) {

        /*
        If a loading indicator is visible, we replace it with our document, otherwise 
        we push the document on the stack
        */
        if(this.loadingIndicatorVisible) {
            navigationDocument.replaceDocument(xml, this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        } else {
            navigationDocument.pushDocument(xml);
        }
    },

    /**
     * @description This function demonstrates the presentation of documents as modals.
     * You can present and manage a document in a modal view by using the pushModal() and
     * removeModal() functions. Only a single document may be presented as a modal at
     * any given time. Documents presented in the modal view are presented in fullscreen
     * with a semi-transparent background that blurs the document below it.
     *
     * @param {Document} xml - The XML document to present as modal
     */
    modalDialogPresenter: function(xml) {
        navigationDocument.presentModal(xml);
    },


    /**
     * @description This function handles the select event and invokes the appropriate presentation method.
     * This is only one way to implement a system for presenting documents. You should determine
     * the best system for your application and data model.
     *
     * @param {Event} event - The select event
     */
    load: function(event) {
        console.log(event);

        var self = this,
            ele = event.target,
            videoURL = ele.getAttribute("data-video");

        if (videoURL) {
            var player = new Player();
            var playlist = new Playlist();
            var mediaItem = new MediaItem("video", videoURL);
         
            player.playlist = playlist;
            player.playlist.push(mediaItem);
            player.present();
//            player.play();
        }
    },

    /**
     * @description This function creates a XML document from the contents of a template file.
     * In this example we are utilizing the DOMParser to transform the Index template from a 
     * string representation into a DOMDocument.
     *
     * @param {String} resource - The contents of the template file
     * @return {Document} - XML Document
     */
    makeDocument: function(resource) {
        if (!Presenter.parser) {
            Presenter.parser = new DOMParser();
        }

        var doc = Presenter.parser.parseFromString(resource, "application/xml");
        return doc;
    },
    
    /**
     * @description This function handles the display of loading indicators.
     *
     * @param {String} presentation - The presentation function name
     */
    showLoadingIndicator: function(presentation) {
        /*
        You can reuse documents that have previously been created. In this implementation
        we check to see if a loadingIndicator document has already been created. If it 
        hasn't then we create one.
        */
        if (!this.loadingIndicator) {
            this.loadingIndicator = this.makeDocument(this.loadingTemplate);
        }
        
        /* 
        Only show the indicator if one isn't already visible and we aren't presenting a modal.
        */
        if (!this.loadingIndicatorVisible && presentation != "modalDialogPresenter" && presentation != "menuBarItemPresenter") {
            navigationDocument.pushDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = true;
        }
    },

    /**
     * @description This function handles the removal of loading indicators.
     * If a loading indicator is visible, it removes it from the stack and sets the loadingIndicatorVisible attribute to false.
     */
    removeLoadingIndicator: function() {
        if (this.loadingIndicatorVisible) {
            navigationDocument.removeDocument(this.loadingIndicator);
            this.loadingIndicatorVisible = false;
        }
    },

    /**
     * @description Instead of a loading a template from the server, it can stored in a property 
     * or variable for convenience. This is generally employed for templates that can be reused and
     * aren't going to change often, like a loadingIndicator.
     */
    loadingTemplate: `<?xml version="1.0" encoding="UTF-8" ?>
        <document>
          <loadingTemplate>
            <activityIndicator>
              <text>Loading...</text>
            </activityIndicator>
          </loadingTemplate>
        </document>`
}
