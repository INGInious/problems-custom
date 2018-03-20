function load_input_custom2(submissionid, key, input) {
    for(var entry in input) {
        if(entry.indexOf(key) !== -1) {
            if(entry in codeEditors) {
                if(entry in input)
                     codeEditors[entry].setValue(input[entry], -1);
                  else
                     codeEditors[entry].setValue("", -1);
                }
                else {
                    var field = $("input[name='" + entry + "']");
                    if (entry in input)
                        $(field).val(input[entry]);
                    else
                        $(field).val("");
                }
            }
    }
}

/**
 * Init a custom template
 * @param well: the DOM element containing the input fields
 * @param pid
 * @param problem
 */
function studio_init_template_custom2(well, pid, problem)
{
    var val = "";
    if("custom" in problem)
        val = problem["custom"];
    registerCodeEditor($('#custom-' + pid)[0], 'yaml', 10).setValue(val);
}