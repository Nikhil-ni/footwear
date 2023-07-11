function digiclk()
{
       var date=new Date()
        var hh=date.getHours()
        var mm=date.getMinutes()
        var ss=date.getSeconds()
        var mo=date.getMonth()
        var dt=date.getDate()
        var yy=date.getFullYear()
        var day=date.getDay()
        console.log(hh,mm,ss,mo,dt,yy,day)
        var hh=23
        var am_pm="AM"
        if(hh>=12)
        {
            am_pm="PM"
            if(hh>12)
            {
                hh-=12
            }
        }
        if(hh==0)
        {
            hh=12
        }
        if(mo==0)
        {
            mo="jan"
        }
        else if(mo==1){
            mo="feb"
        }
        else if(mo==2){
            mo="mar"
        }

        else if(mo==3){
            mo="april"
        }

        else if (mo==4){
            mo="may"
        }
        else if (mo==5){
            mo="june"
        }

        else if (mo==6){
            mo="july"
        }

        else if (mo==7){
            mo="august"
        }
        else if (mo==8){
            mo="september"
        }
        else if (mo==9){
            mo="october"
        }
        else if (mo==10){
            mo="november"
        }
        else if (mo==11){
            mo="december"
        }
        switch(day)
        {
            case 0: day="Sunday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/dsa.jpg)"
            break;
            case 1: day="Monday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/nhb.jpg)"
            break;
            case 2: day="Tuesday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/feds.jpg)"
            break;
            case 3: day="Wednesday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/sasa.jpg)"

            break;
            case 4: day="Thursday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/sacas.jpg)"

            break;
            case 5: day="Friday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/sdsa.jpg)"

            break;
            case 6: day="Saturday"
            document.body.style.backgroundImage="url(D:/digital clock project/photos/sas.jpg)"


        }
        document.getElementById("date").innerHTML=`${dt}/${mo}/${yy}`
        document.getElementById("time").innerHTML=`${hh}:${mm} ${am_pm}`
        document.getElementById("day").innerHTML=day
        document.getElementById("sec").innerHTML=ss
        setTimeout(digiclk,1000)
    }
    digiclk()





