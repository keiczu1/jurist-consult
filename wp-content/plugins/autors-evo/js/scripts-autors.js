jQuery(document).ready(function($){
	if (window.WNauthorRating){
/* rating */$('.value-rating-authors_webnavoz>div').text(WNauthorRating);$('.value-rating-authors_webnavoztop').text(WNauthorRating);
/* ↑ */$("span.link-size-webnavozAuthor.min-size-webnavozAuthor").click(function(){var nm=parseFloat($(this).attr('size'));var nb=parseFloat($('.big-size-webnavozAuthor').attr('size'));if(nm==3){return false;}if(nb==0){nm++;}else{nb--;}wnaf(nm,nb);});
/* ↓ */$("span.link-size-webnavozAuthor.big-size-webnavozAuthor").click(function(){var nb=parseFloat($(this).attr('size'));var nm=parseFloat($('.min-size-webnavozAuthor').attr('size'));if(nb==4){return false;}if(nm==0){nb++;}else{nm--;}wnaf(nm,nb);});
/* go */function wnaf(nm,nb){$('.big-size-webnavozAuthor').attr('size',nb);$('.min-size-webnavozAuthor').attr('size',nm);$("."+class_fonttWebnavoz+" p,."+class_fonttWebnavoz+" li").css({'font-size':(parseFloat(size_fontWebnavoz)+(nb*2)-(nm*2)),'line-height':'1.6'});}
/* +1 */$('.post-ratings>img:nth-child(1)').click(function(){$('.value-rating-authors_webnavoz>div').text((parseFloat(WNauthorRating)-1));$('.value-rating-authors_webnavoztop').text((parseFloat(WNauthorRating)-1));});
/* -1 */$('.post-ratings>img:nth-child(2)').click(function(){$('.value-rating-authors_webnavoz>div').text((parseFloat(WNauthorRating)+1));$('.value-rating-authors_webnavoztop').text((parseFloat(WNauthorRating)+1));});
	}
});