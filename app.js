function checkResult(){
    var sum =0;
     answer1 = document.getElementById('opt1');
      answer2 = document.getElementById('opt8');
       answer3 = document.getElementById('opt10');
        answer4 = document.getElementById('opt13');
         answer5 = document.getElementById('opt17');

         if(answer1.checked ==true)
         {
             sum++;
             document.getElementById('ch1').innerHTML='&#10004';
              document.getElementById('ch1').style.color='green';
         }else
         {
             document.getElementById('ch1').innerHTML='&#10006';
             document.getElementById('ch1').style.color='red';
         }
         if(answer2.checked ==true)
         {
             sum++;
              document.getElementById('ch2').innerHTML='&#10004';
              document.getElementById('ch2').style.color='green';
         }else
         {
             document.getElementById('ch2').innerHTML='&#10006';
             document.getElementById('ch2').style.color='red';
         }
         if(answer3.checked ==true)
         {
             sum++;
              document.getElementById('ch3').innerHTML='&#10004';
              document.getElementById('ch3').style.color='green';
         }else
         {
             document.getElementById('ch3').innerHTML='&#10006';
             document.getElementById('ch3').style.color='red';
         }
         if(answer4.checked ==true)
         {
             sum++;
              document.getElementById('ch4').innerHTML='&#10004';
              document.getElementById('ch4').style.color='green';
         }else
         {
             document.getElementById('ch4').innerHTML='&#10006';
             document.getElementById('ch4').style.color='red';
         }
         if(answer5.checked ==true)
         {
             sum++;
              document.getElementById('ch5').innerHTML='&#10004';
              document.getElementById('ch5').style.color='green';
         }else
         {
             document.getElementById('ch5').innerHTML='&#10006';
             document.getElementById('ch5').style.color='red';
         }

         document.getElementById("score").innerHTML="Score:"+sum;

         percentage = sum*100/5;
         document.getElementById("percentage").innerHTML="Percentage:"+percentage +"%";

//less than 40% condition
         if(percentage<=40){
             document.getElementById("percentage").style.color='red';
         }
         else{
             document.getElementById("percentage").style.color='green';
         }
//100% condition
if(percentage==100){
    document.getElementById("percentage").innerHTML="Percentage:"+percentage +"% GOOD JOB!!!";
    alert("Well done You are completed...!!!");
}
}

///image slider
//pic slider

 var i=0;
 var images =[];
 var time =3000;

 //image list
 images[0]='assets/1.jpg';
 images[1]='assets/2.jpg';
 images[2]='assets/3.jpg';
 images[3]='assets/4.jpg';
 images[4]='assets/5.jpg';
 images[5]='assets/6.jpg';
 images[6]='assets/7.jpg';
 images[6]='assets/8.jpg';
 images[6]='assets/9.jpg';
 images[6]='assets/10.jpg';

 //change image
  function changeImage(){
     document.slide.src = images[i];
    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout("changeImage()",time);
 }
 window.onload = changeImage;