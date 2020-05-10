	var top; 
	var array = [];
	length = 10;

	push(1);
	push(2);
	display();
	pop(2);
	display();
	
	function push(val){
		if(top == length-1){
			console.log('Overflow');
			
		}
		else{
			var val;
			
			array[top++]=val;
			console.log('Element pushed: '+val);
		}
	}

	function pop(val){
		if (top == -1){
			console.log('underflow')
		}
		else{
			var val
			array[top--]=val;
			console.log('elemenet poped: '+val);
		}
	}

	function display(){
		console.log('Stack:');
		
		for(let array[i]=top ; array[i]>=0; array[i]--){
			console.log(array[i]);
		}
	}
	
	