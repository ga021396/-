// JavaScript Document
/*jslint browser: true */
/*global window */
window.onload=function(){
	var oNavBar=document.getElementById('navbar');
	var oNav=oNavBar.getElementsByTagName('li');
	var oA=oNavBar.getElementsByTagName('a');
	var oTask=document.getElementsByClassName('onTask');
    var oFin=document.getElementsByClassName('finish');
    var oInput=document.getElementById('input');
    var oNew=document.getElementById('new');
    var oUl=document.getElementById("toDo");
    var oCheck=oUl.getElementsByTagName("input");
    
    for(var i=0;i<oCheck.length;i++)
        {
            oCheck[i].onchange=function(){
               if(this.checked==true)
                   c(this);
                else
                    d(this);
        }
            }
           function c(th){
                 th.parentElement.classList.remove('onTask');
                 th.parentElement.classList.add('finish');
           }
            function d(th){
                 th.parentElement.classList.remove('finish');
                 th.parentElement.classList.add('onTask');
           }
        
    oNew.onclick=function(){
        newToDo();
    }
    
    oA[0].onclick=function(){
       task("block","block",this);
    }
    oA[1].onclick=function(){
        task("block","none",this);
    }
    oA[2].onclick=function(){
       task("none","block",this);
    }
    
    function task(onDo,Fin,k){
        for(var h=0;h<oFin.length;h++)
            {
                oFin[h].style.display=Fin;
            }
         for(var i=0;i<oTask.length;i++)
            {
                oTask[i].style.display=onDo;
            }
        for(var j=0;j<oA.length;j++)
			{
				oNav[j].classList.remove('nav-active');
			}
        k.parentElement.classList.add('nav-active');
    }
    function newToDo(){
        var str="<p>"+oInput.value+"</p>";
        var newTask=document.createElement('li');
        var chk=document.createElement('input');
        chk.setAttribute("type","checkbox");
        newTask.classList.add("onTask");
        newTask.innerHTML=str;
        oUl.insertBefore(newTask,oTask[0]);
        oUl.children[0].append(chk);
        
        
    }
}
