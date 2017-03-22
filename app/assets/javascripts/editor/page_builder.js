var layout,layout_array;

function set_layout_config(element){
	layout = element.toString();
	layout_array = layout.split(",");
}

function main_container_settings(e) {
	e.preventDefault();
	var $parent = $(this).closest(".main-container")
	var setting_clicked = $(this).attr("class");
	if($(this).hasClass("delete-main-container")){
		$parent.remove();
	} else if($(this).hasClass("duplicate-main-container")){
		//alert("duplicate");
		var clone = $parent.clone();
		$parent.after(clone);
	}
}

$(document).off("click", "#page-builder .block-settings a").on("click", "#page-builder .block-settings a", main_container_settings);

function display_columns_list(){
	var text;
	$("#columns-layout li").each(function(){
		set_layout_config($(this).data("layout"));
		for ($i = 0; $i < layout_array.length; $i++ ){
			var column_width = layout_array[$i];
			var column_class = 'col-md-'+column_width;
			if ( column_width.indexOf(9) > -1 ){
				text = "2/3"
			} else if ( column_width.indexOf(6) > -1 ) {
				text = "1/2"
			} else if ( column_width.indexOf(4) > -1 ) {
				text = "1/3"
			} else if ( column_width.indexOf(3) > -1 ) {
				text = "1/4"
			} else {
				text = ""
			}
			$(this).find(".pattern").append("<div class='"+column_class+"'><div class='column'>"+text+"</div></div>");
		}
	});
}

function change_colums_layout(){
	var change_column_url = $(this).closest("#columns-layout").data("url");
	set_layout_config($(this).data("layout"));
	$.ajax({
    url: change_column_url,
    data: {
      layout: JSON.stringify(layout_array)
    },
    dataType: "script"
  });
}

function get_current_container(){
	$(".main-container").removeClass("current-container");
	$(this).closest(".main-container").addClass("current-container");
}

$(document).ready(function(){
	display_columns_list();
	$("#columns-layout li").click(change_colums_layout);
	$(".block-settings li").click(get_current_container);
})


