function getFieldValue(fieldId) {
    return $('#' + fieldId).val()
}

function getFieldText(fieldId) {
    return $('#' + fieldId).text()
}

function setFieldValue(fieldId, value) {
    $('#' + fieldId).val(value)
}

function setFieldText(fieldId, text) {
    $('#' + fieldId).text(text)
}

function setVersion(id, name){
    $('select[id="fixVersions"]').trigger('selectOption', [{value: id, title: name, label: name }]);
}

function assignToUserFromField(fieldId) {
    $.getJSON('/rest/api/2/issue/' + JIRA.Issue.getIssueId()).done(function (data) {
        var userFromField = data.fields[fieldId];
        if ($(userFromField).length) {

            var avatarurl = userFromField.avatarUrls['16x16'];
            var userName = userFromField.displayName;
            var userKey = userFromField.name

            $('#assignee-single-select .aui-ss-entity-icon').attr("src", avatarurl);
            $('#assignee-field').val(userName);
            $('#assignee-group-suggested option:selected').attr("value", userKey);
        }
    });
}

function hideField(fieldId) {
    $('div.field-group:has(#' + fieldId + ')').hide()
}

function showField(fieldId) {
    $('div.field-group:has(#' + fieldId + ')').show()
}

function removeField(fieldId) {
    $('div.field-group:has(#' + fieldId + ')').remove()
}

function isSelected(fieldId, optionId) {
    return $('select#' + fieldId + ' option[value="' + optionId + '"]').is(':selected')
}
