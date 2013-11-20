	function cat(name){
		this.name = name;
		this.mjau = function(){
			alert('Mjau!');
		}
	}

	var m = new cat("Martin");


	m.mjau();

	cat.prototype.hei = function(){
		alert("Hei");
	};

	//Override
	m.mjau = function(){
		alert("Hei");
	};

	m.mjau();
	m.hei();

	var h = new cat("H");
	h.mjau();

	console.log(m.name);

	var m2 = new cat("Håkon");
	//m2.gender = "Female";
	console.log(m2.name + " " + m2.gender);

	<script type="text/javascript">

	#1
var o = new Object();
o.method = function(){}

#2
var o = new Object();
o.prototype.method = function(){}

#3
function myObject() {
    this.method = function(){}
}
var o = new myObject();

#4
function myObject() {}
myObject.prototype.method = function(){}
var o = new myObject();

#5
var o = {
    method: function(){}
}

</script>