
//存档与读档
function save(data){
	var json_data = JSON.stringify(data)
	localStorage.setItem('save',json_data)
	alert('已存档！')
}

function load_save(){
	var json_data = localStorage.getItem('save')
	if(json_data){
		var data = JSON.parse(json_data)
		console.log(data)
		return data
	}
	else{
		alert('读档失败！错误码:x114514')
	}

}


//从右侧进入
function right_in(id){
	var element = document.getElementById(id);
	var element_x = 100;
	element.style.bottom = '-15%'
	element.style.left = '100%';
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.left = element_x + '%';
		element_x = element_x - 0.4;
		if(element_x <= 70){
			clearInterval(change);
		}
	}, 5);
}
//从左侧进入
function left_in(id){
	var elementa = document.getElementById(id);
	var elementa_x = 0;
	elementa.style.bottom = '-15%'
	elementa.style.left = '0%';
	elementa.style.display = 'block'
	var changea = setInterval(function(){
		elementa.style.left = elementa_x + '%';
		elementa_x = elementa_x + 0.4;
		if(elementa_x >= 30){
			clearInterval(changea);
		}
	}, 5);
}
//从地下进入
function up_in(id){
	var element = document.getElementById(id)
	var element_y = 100
	element.style.top = '100%'
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.top = element_y + '%';
		element_y = element_y - 0.4;
		if(element_y <= 15){
			clearInterval(change);
		}
	}, 5);
}

//快速从右划过
function fast_right_to_left(id){
	var element = document.getElementById(id);
	var element_x = 100;
	element.style.left = '100%';
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.left = element_x + '%';
		element_x = element_x - 2;
		if(element_x <= -50){
			clearInterval(change);
		}
	}, 1);
}

//飞走
function fly_out(id){
	var element = document.getElementById(id)
	var element_y = -15
	element.style.bottom = '-15%'
	element.style.display = 'block'
	var v = 0.1
	var a = 0.05
	var t = 0.01
	var v0
	var change = setInterval(function(){
		element.style.bottom = element_y + '%';
		v0 = v
		v = v0 + a * t * t
		t = t + 0.01
		element_y = element_y + v;
		if(element_y >= 100){
			clearInterval(change);
		}
	}, 5);
}