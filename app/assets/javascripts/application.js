// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.cookie
//= require_tree .
//= require bootstrap

$(document).ready(function() {

    // INIT STREETVIEW
    try {
    initialize_street_view();
    } catch (e) {

    }
    
    // Enable tooltips
    $('.tip').tooltip();
    $('#new_contact_submission').submit(function(){
        $('#contact-submit-btn').button('loading');
    });

    $('#contact-form-modal').on('shown', function () {
        $(ClientSideValidations.selectors.forms).validate();
    });

    if ($.cookie('adv_options') == 'true'){
    	$("#advanced-options").collapse('show');
    	var elem = document.getElementById("adv-options-btn");
    	elem.innerHTML = "- Advanced options";
    }

    if ($.cookie("ki") == 'b') {
        $("#list-btn").button('toggle');
    } else {
        $("#map-btn").button('toggle');
    }
    
});



function set_list(){
    $.cookie('ki', 'b');
   document.location.reload(true);
}

function set_map(){
    $.cookie('ki', 'a');
    document.location.reload(true);
}

// Properties JS
function clear_field(id) {
	var field = document.getElementById(id);
	field.value = "";
	field.focus();
}

// ADVANCED OPTIONS

// To change the advanced options curtain button

function change_advanced_options_btn_txt() 
{
    var elem = document.getElementById("adv-options-btn");
    if (elem.innerHTML=="- Advanced options") {
    	elem.innerHTML = "+ Advanced options";
    	$.cookie("adv_options", 'false')
    }
    else { 
    	elem.innerHTML = "- Advanced options";
    	$.cookie("adv_options", 'true')
    }
}

// PROPERTY PAGE

// Tooltips

