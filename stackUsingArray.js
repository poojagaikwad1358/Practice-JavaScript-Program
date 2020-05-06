    var top; 
	var array = []; 
    push(1); 
    push(2); 
    push(3); 
    display();
    console.log(pop() + " Popped from stack"); 
    display();

	if(array==null)
	{ 
		return (top < 0); 
	} 
    
	function push(x) 
	{ 
		if (top >= (array.length - 1)) { 
			console.log("Stack Overflow"); 
			return false; 
		} 
		else { 
            var x;
			array[++top] = x; 
            console.log(x + " pushed into stack"); 
            
            return true; 
         
        } 
       
	} 

	function pop() 
	{ 
		if (top < 0) { 
			console.log("Stack Underflow"); 
			return 0; 
		} 
		else { 
            var x = array[top--]; 
			return x; 
		} 
	} 

	
	