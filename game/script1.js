flag=0;
function btnclick(v)
{
	if(v.value=="")
	{
		if(flag==0)
		{
			v.value="O";
			flag=1;
		}
		else
		{
			v.value="X";
			flag=0;
		}
		
		wining();
	}
}



function wining()
{
	
	
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn2").value=="O" && document.getElementById("btn3").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
				
	}
	if(document.getElementById("btn4").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn6").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn7").value=="O" && document.getElementById("btn8").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
		}
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn4").value=="O" && document.getElementById("btn7").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	if(document.getElementById("btn2").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn8").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn3").value=="O" && document.getElementById("btn6").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	
	
	if(document.getElementById("btn1").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn9").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn3").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn7").value=="O")
	{
				document.getElementById("status").innerHTML="1St Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	
	//for player X
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn2").value=="X" && document.getElementById("btn3").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	if(document.getElementById("btn4").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn7").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";	
				document.getElementById("wining").style.display="block";
				
	}
	if(document.getElementById("btn2").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn3").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	
	if(document.getElementById("btn1").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	if(document.getElementById("btn3").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="X")
	{
				document.getElementById("status").innerHTML="2nd  Player Win";
				document.getElementById("wining").style.display="block";
				
	}
	
	
	
	//game over
	
	if(document.getElementById("btn1").value!="" && document.getElementById("btn2").value!="" && document.getElementById("btn3").value!="" && document.getElementById("btn4").value!="" && document.getElementById("btn5").value!="" && document.getElementById("btn6").value!="" && document.getElementById("btn7").value!="" && document.getElementById("btn8").value!="" && document.getElementById("btn9").value!="" )
	{
			
					
					//for player X
					if(document.getElementById("btn1").value=="X" && document.getElementById("btn2").value=="X" && document.getElementById("btn3").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn4").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn6").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
	
					else if(document.getElementById("btn7").value=="X" && document.getElementById("btn8").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";
							document.getElementById("wining").style.display="block";
							
					}
	
					else if(document.getElementById("btn1").value=="X" && document.getElementById("btn4").value=="X" && document.getElementById("btn7").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn2").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn8").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";
							document.getElementById("wining").style.display="block";
							
					}	
					else if(document.getElementById("btn3").value=="X" && document.getElementById("btn6").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";
							document.getElementById("wining").style.display="block";
							
							
					}
					else if(document.getElementById("btn1").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn9").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn3").value=="X" && document.getElementById("btn5").value=="X" && document.getElementById("btn7").value=="X")
					{
							document.getElementById("status").innerHTML="2nd  Player Win";
							document.getElementById("wining").style.display="block";
							
					}
					//for 0
					else if(document.getElementById("btn1").value=="O" && document.getElementById("btn2").value=="O" && document.getElementById("btn3").value=="O")
					{			
							document.getElementById("status").innerHTML="1St Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn4").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn6").value=="O")
					{
						document.getElementById("status").innerHTML="1St Player Win";	
						document.getElementById("wining").style.display="block";
						
					}
	
					else if(document.getElementById("btn7").value=="O" && document.getElementById("btn8").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="1St Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
	
					else if(document.getElementById("btn1").value=="O" && document.getElementById("btn4").value=="O" && document.getElementById("btn7").value=="O")
					{
							document.getElementById("status").innerHTML="1St Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn2").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn8").value=="O")
					{
							document.getElementById("status").innerHTML="1St Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
	
					else if(document.getElementById("btn3").value=="O" && document.getElementById("btn6").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="1St Player Win";	
							document.getElementById("wining").style.display="block";
							
					}
					else if(document.getElementById("btn1").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn9").value=="O")
					{
							document.getElementById("status").innerHTML="1St Player Win";
							document.getElementById("wining").style.display="block";
							
					}
		
					else if(document.getElementById("btn3").value=="O" && document.getElementById("btn5").value=="O" && document.getElementById("btn7").value=="O")
					{
						document.getElementById("status").innerHTML="1St Player Win";
						document.getElementById("wining").style.display="block";
						
					}
					else
					{
	
							document.getElementById("status").innerHTML="Draw";
							document.getElementById("wining").style.display="block";
							
					}
	
		}
}
