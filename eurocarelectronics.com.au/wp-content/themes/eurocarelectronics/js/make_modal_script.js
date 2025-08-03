function get_model_data() {
    jQuery.ajax({
        data: {
            action: 'get_modal_data',
            brand_id: jQuery("#make_details").val(),
            slug: jQuery('option:selected', this).attr('data-slug')
        },
        dataType: "json",
        type: 'POST',
        url: ajaxurl,
        success: function(output) {
            if (output.success) {
                jQuery('body').find('#modal_details_section').html(output.data);
            } else {
                jQuery('body').find('#modal_details_section').html('');
                jQuery('body').find('#generation_details').html('');
                jQuery("#action_data").hide();

            }
        }
    });

}

function get_engine_data() {
    jQuery.ajax({
        data: {
            action: 'get_generation_data',
            modal_id: jQuery("#modal_details").val(),
            slug: jQuery('option:selected', this).attr('data-slug')
        },
        dataType: "json",
        type: 'POST',
        url: ajaxurl,
        success: function(output) {
            if (output.success) {
                jQuery('body').find('#generation_details').html(output.data);
                jQuery("#action_data").show();
            } else {
                jQuery('body').find('#generation_details').html('');
                jQuery("#action_data").hide();
            }
        }
    });

}