<script>
var jsonDate = (new Date()).toJSON();
	var backToDate = new Date(jsonDate);

	console.log("Serialized date object: " + jsonDate);

	var number = 10;
	number = number + 1;
	console.log(number);
	number =  number + "b";
	console.log(number);
	number = number.slice(0,-1);
	console.log(number);
	number = number + 1;
	console.log(number);


	var num = 1.23
	num= num + 1;
	console.log(num);
	num = num.slice(0,-1);
	console.log(num);
	num = num + 1;
	console.log(num);

	console.log("-----");
	console.log(isNaN(23));
	console.log(isNaN("23"));
	console.log(isNaN("a23"));
</script>