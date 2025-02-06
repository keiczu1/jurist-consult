	jQuery(".openform_expertPlagin-item").click(function() {
		var button = jQuery(this).attr('style');
		console.log(button);
		jQuery('#button-expert_plag').attr('style',button);
		jQuery('.form-openexpert_plag').show();
		return false;
	});
	jQuery(".bg-fix,.close-popUp").click(function() {
		jQuery('.popUp-box-expert_plag').hide();
		return false;
	});
	jQuery("#form-expert_plag").submit(function() { return false; });
	jQuery("#button-expert_plag").on("click", function(){
		var form = jQuery("#form-expert_plag");
		var serialize = form.serialize();
		var title = form.find('#title');
		var editor = form.find('#editor');
		var spam = form.find('#textadd');
		if(title.val().length   >   0 ){
			title.removeClass("error");
		} else {
			title.addClass("error");
		}
		if(editor.val().length   >   0 ){
			editor.removeClass("error");
		} else {
			editor.addClass("error");
		}
		if(title.val().length   >   0 && editor.val().length   >   0 && spam.val()==""){
			form_send = true;
		} else {
			form_send = false;
		}
		if(form_send == true) {
			jQuery.ajax({
				url: expert_ajaxUrl,
				data: 'action=expertplagadd&'+serialize,
				type: 'POST',
				success: function(data) {
						form.trigger('reset');
						jQuery('.popUp-box-expert_plag').hide(500);
						jQuery(".form-resultexpert_plag").show(500);
				},
				dataType: 'json'
			});
		}
	});