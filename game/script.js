
chance=1
a=new Array(0,1,2,3,4,5,6,7,8);
b=new Array();
rand=Math.floor(Math.random()*9);

function btnclick(v,j)
{
			if(v.value=="")
			{
				v.value="X";
				//chance
				//chance++;
				if(j==0)
				{	
					b.push(0);
				}
				if(j==1)
				{	
					b.push(1);
				}
				if(j==2)
				{	
					b.push(2);
				}
				if(j==3)
				{	
					b.push(3);
				}
				if(j==4)
				{	
					b.push(4);
				}
				if(j==5)
				{	
					b.push(5);
				}
				if(j==6)
				{	
					b.push(6);
				}
				if(j==7)
				{	
					b.push(7);
				}
				if(j==8)
				{	
					b.push(8);
				}
			
				setTimeout("condition()",500);	
			}

}
function condition()
{
	
				if(document.getElementById("btn1").value=="X" && document.getElementById("btn2").value=="X"  && document.getElementById("btn3").value=="")
				{
					
					document.getElementById("btn3").value="O";
					b.push(2);
				}
				else if(document.getElementById("btn1").value=="X" && document.getElementById("btn3").value=="X" && document.getElementById("btn2").value=="")
				{
					document.getElementById("btn2").value="O";
					b.push(1);
				
				}
				else if(document.getElementById("btn1").value=="X" && document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="")
				{
					document.getElementById("btn7").value="O";
					b.push(6);
				
				}
			
				else if(document.getElementById("btn1").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="" )
				{
					document.getElementById("btn9").value="O";
					b.push(8);
				
				}
				else if(document.getElementById("btn1").value=="X" && document.getElementById("btn7").value=="X" && document.getElementById("btn4").value=="")
				{
					document.getElementById("btn4").value="O";
					b.push(3);
				
				}
				else if(document.getElementById("btn1").value=="X" && document.getElementById("btn9").value=="X" && document.getElementById("btn5").value=="")
				{
					document.getElementById("btn5").value="O";
					b.push(4);
				
				}

				else if(document.getElementById("btn2").value=="X" && document.getElementById("btn3").value=="X" && document.getElementById("btn1").value=="")
				{
					document.getElementById("btn1").value="O";
					b.push(0);
				
				}
				else if(document.getElementById("btn2").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="")
				{
					document.getElementById("btn8").value="O";
					b.push(7);
				
				}
				else if(document.getElementById("btn2").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn5").value=="")
				{
					document.getElementById("btn5").value="O";
					b.push(4);
				
				}
				
				
				else if(document.getElementById("btn3").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="")
				{
					document.getElementById("btn7").value="O";
					b.push(6);
				
				}
			
				else if(document.getElementById("btn3").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="")
				{
					document.getElementById("btn9").value="O";
					b.push(8);
				
				}
			
				else if(document.getElementById("btn3").value=="X" && document.getElementById("btn7").value=="X" && document.getElementById("btn5").value=="")
				{
					document.getElementById("btn5").value="O";
					b.push(4);
				
				}
				else if(document.getElementById("btn3").value=="X" && document.getElementById("btn9").value=="X" && document.getElementById("btn6").value=="")
				{
					document.getElementById("btn6").value="O";
					b.push(5);
				
				}
				

				else if(document.getElementById("btn4").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="")
				{
					document.getElementById("btn6").value="O";
					b.push(5);
				
				}

				else if(document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="X" && document.getElementById("btn1").value=="")
				{
					document.getElementById("btn1").value="O";
					b.push(0);
				
				}
				
				//5
				
				else if(document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn4").value=="")
				{
					document.getElementById("btn4").value="O";
					
					b.push(3);
				
				}

				else if(document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="X" && document.getElementById("btn3").value=="")
				{
					document.getElementById("btn3").value="O";
					
					b.push(2);
				
				}
				
				else if(document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn2").value=="")
				{
					document.getElementById("btn2").value="O";
				
					b.push(1);
				
				}

				else if(document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="X" &&	document.getElementById("btn1").value=="")
				{
					document.getElementById("btn1").value="O";
					
					b.push(0);
				
				}
				//6
				else if(document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="X" && document.getElementById("btn3").value=="") 
				{
					document.getElementById("btn3").value="O";
					
					b.push(2);
				
				}
				//7
				else if(document.getElementById("btn7").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="")
				{
					document.getElementById("btn9").value="O";
					
					b.push(8);
				
				}
				else if(document.getElementById("btn7").value=="X" && document.getElementById("btn9").value=="X"  &&document.getElementById("btn8").value=="")
				{
					document.getElementById("btn8").value="O";
					
					b.push(7);
				
				}
				else if(document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="X" && document.getElementById("btn7").value=="")
				{
					document.getElementById("btn7").value="O";
					
					b.push(6);
				
				}
				//condition are false than create new random number in chance 2
				else
				{
					rand1=Math.floor(Math.random()*9);
					while(b.indexOf(rand1)!=-1)
					{
						rand1=Math.floor(Math.random()*9);
					
					}
					switch(rand1)
					{
						case 0:
							document.getElementById("btn1").value="O";
							b.push(rand1);
						break;
						case 1:
							document.getElementById("btn2").value="O";
							b.push(rand1);
						break;
						case 2:
							document.getElementById("btn3").value="O";
							b.push(rand1);
						break;
						case 3:
							document.getElementById("btn4").value="O";
						b.push(rand1);
						break;
						case 4:
							document.getElementById("btn5").value="O";
						b.push(rand1);
						break;
						case 5:
							document.getElementById("btn6").value="O";
							b.push(rand1);
						break;
						case 6:
							document.getElementById("btn7").value="O";
							b.push(rand1);
						break;
						case 7:
							document.getElementById("btn8").value="O";
							b.push(rand1);
						break;
						case 8:
							document.getElementById("btn9").value="O";
							b.push(rand1);
						break;
		
					}

				}
				wining();
				
}

function wining()
{
	
	
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn2").value=="O" && document.getElementById("btn3").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
				
	}
	if(document.getElementById("btn4").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn6").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn7").value=="O" && document.getElementById("btn8").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn4").value=="O" && document.getElementById("btn7").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
	}
	if(document.getElementById("btn2").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn8").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn3").value=="O" && document.getElementById("btn6").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";	
				document.getElementById("wining").style.display="block";
	}
	
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn3").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn7").value=="O")
	{
				document.getElementById("status").innerHTML="You Are Loss";
				document.getElementById("wining").style.display="block";
	}
	
	
	//for player X
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn2").value=="X" && document.getElementById("btn3").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";	
				document.getElementById("wining").style.display="block";
	}
	if(document.getElementById("btn4").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";	
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn7").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";	
				document.getElementById("wining").style.display="block";
	}
	if(document.getElementById("btn2").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn3").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";
				document.getElementById("wining").style.display="block";
	}
	
	
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";
				document.getElementById("wining").style.display="block";
	}
	
	if(document.getElementById("btn3").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="X")
	{
				document.getElementById("status").innerHTML="You are Win";
				document.getElementById("wining").style.display="block";
	}
	
	
	
	//game over
	
	if(document.getElementById("btn1").value!="" && document.getElementById("btn2").value!="" && document.getElementById("btn3").value!="" && document.getElementById("btn4").value!="" && document.getElementById("btn5").value!="" && document.getElementById("btn6").value!="" && document.getElementById("btn7").value!="" && document.getElementById("btn8").value!="" && document.getElementById("btn9").value!="" )
	{
			
					if(document.getElementById("btn1").value=="O" && document.getElementById("btn2").value=="O" && document.getElementById("btn3").value=="O")
					{			
							document.getElementById("status").innerHTML="You Are Loss";	
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn4").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn6").value=="O")
					{
						document.getElementById("status").innerHTML="You Are Loss";	
						document.getElementById("wining").style.display="block";
					}
	
					else if(document.getElementById("btn7").value=="O" && document.getElementById("btn8").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="You Are Loss";	
							document.getElementById("wining").style.display="block";
					}
	
					else if(document.getElementById("btn1").value=="O" && document.getElementById("btn4").value=="O" && document.getElementById("btn7").value=="O")
					{
							document.getElementById("status").innerHTML="You Are Loss";	
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn2").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn8").value=="O")
					{
							document.getElementById("status").innerHTML="You Are Loss";	
							document.getElementById("wining").style.display="block";
					}
	
					else if(document.getElementById("btn3").value=="O" && document.getElementById("btn6").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="You Are Loss";	
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn1").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="You Are Loss";
							document.getElementById("wining").style.display="block";
					}
		
					else if(document.getElementById("btn3").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn7").value=="O")
					{
						document.getElementById("status").innerHTML="You Are Loss";
						document.getElementById("wining").style.display="block";
					}
	
	
					//for player X
					else if(document.getElementById("btn1").value=="X" && document.getElementById("btn2").value=="X" && document.getElementById("btn3").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";	
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn4").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";	
							document.getElementById("wining").style.display="block";
					}
	
					else if(document.getElementById("btn7").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";
							document.getElementById("wining").style.display="block";
					}
	
					else if(document.getElementById("btn1").value=="X" && document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";	
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn2").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";
							document.getElementById("wining").style.display="block";
					}	
					else if(document.getElementById("btn3").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";
							document.getElementById("wining").style.display="block";
										
					}
					else if(document.getElementById("btn1").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";
							document.getElementById("wining").style.display="block";
					}
					else if(document.getElementById("btn3").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="X")
					{
							document.getElementById("status").innerHTML="You are Win";
							document.getElementById("wining").style.display="block";
					}
					else
					{
	
							document.getElementById("status").innerHTML="Draw";
							document.getElementById("wining").style.display="block";
					}
	
		}
}
//body load function
function load()
{

	switch(rand)
	{
		case 0:
			document.getElementById("btn1").value="O";
			b.push(rand);
		break;
		case 1:
			document.getElementById("btn2").value="O";
			b.push(rand);
		break;
		case 2:
			document.getElementById("btn3").value="O";
				b.push(rand);
		break;
		case 3:
			document.getElementById("btn4").value="O";
			b.push(rand);
		break;
		case 4:
			document.getElementById("btn5").value="O";			
				b.push(rand);
		break;
		case 5:
			document.getElementById("btn6").value="O";
			b.push(rand);
		break;
		case 6:
			document.getElementById("btn7").value="O";
			b.push(rand);
		break;
		case 7:
			document.getElementById("btn8").value="O";
			b.push(rand);
		break;
		case 8:
			document.getElementById("btn9").value="O";
			b.push(rand);
		break;
		
	}
	
	chance=0;
}
