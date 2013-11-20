<script>
	
	function fun(){
		console.log(arguments);
	}

	var a = fun("12", 12);


	var vari = 12;
	function moreFun(vari){
		console.log(vari);
		console.log(this.vari);
	}

	moreFun(9);

	function evenFuner(){
		var vari = 99;
		moreFun(8);
	}

	evenFuner();

</script>

<script type="text/javascript">

	var vari = 9932;
	moreFun("b");
	
</script>