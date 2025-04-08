/**
 * Hide upload buttons on issue view page with JavaScript
 */
require(['jquery', 'wrm/context-path', 'jira/util/events', 'jira/util/events/types', 'jira/util/events/reasons'],
    function ($, contextPath, Events, EventsTypes, EventsReasons) {
        // run when page fully initialized
        AJS.toInit(function () {
            function hide_upload_btn() {
                $('#add-attachments-link').hide();
                $('#attach-file').hide();
                $('#attach-screenshot-html5').hide();
                $('.mod-content.issue-drop-zone').hide();
            }

            // bind on all page updates and run func
            Events.bind(EventsTypes.NEW_CONTENT_ADDED, hide_upload_btn);

            // run func when page loaded
            hide_upload_btn();
        });
    }
);
