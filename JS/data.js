


 var homework = [
    {course_name:"数电",homework_name:"1",platform:"11",deadline:"13",remark:"zxs",red:"0"},
    {course_name:"mo电",homework_name:"2",platform:"",deadline:"",remark:"",red:"0"},
    {course_name:"数电",homework_name:"3",platform:"",deadline:"",remark:"",red:"0"},
    {course_name:"电",homework_name:"4",platform:"",deadline:"",remark:"",red:"0"},
    {course_name:"xiao电",homework_name:"5",platform:"",deadline:"",remark:"",red:"0"},
    {course_name:"数电",homework_name:"6",platform:"",deadline:"",remark:"",red:"0"}
]

// console.log(homework);
homework = paixu(homework);
homework = displayif(homework);
homework = backcolor(homework);
 console.log(homework);
//排序
function paixu(work)
{   
    var homework_1 = [];
    var repet = 1;
    for(var i = 0; i < work.length; i++)
    {
        work[i]['repetition'] = "1";
        homework_1.push(work[i]);
        for(var j = i+1; j<work.length; j++)
        {
            if(work[i].course_name == work[j].course_name)
            {
                repet += 1;
                work[j]['repetition'] = "0";
                work[i]['repetition'] = repet.toString();
                homework_1.push(work[j]);
                work.splice(j,1);
                j -= 1;
            }
        }
    }
    //console.log(homework_1);
    return homework_1;
}

function displayif(work)
{
    for(var i = 0; i < work.length; i++)
    {
        work[i]['displaystate'] = "display:true;";
        if(work[i].repetition == "0")
        {
            work[i]['displaystate'] = "display:none;";
        }
    }
    return work;
}

function backcolor(work)
{
    var j = 1;
    for(var i = 0; i < work.length; i++)
    {
        var k = j % 2;
        if(work[i].red == "1")
        {
            work[i]['backcolor'] = "background-color:red;";
        }
        else
        {
            if(k == 0)  work[i]['backcolor'] ="background-color:rgb(135,206,250);";
            else  work[i]['backcolor'] ="background-color:rgb(0,191,255);";  
        }
        if(k == 0)  work[i]['displaystate'] = work[i].displaystate + "background-color:rgb(135,206,250);";
        else  work[i]['displaystate'] = work[i].displaystate + "background-color:rgb(0,191,255);";
        j += 1;
    }
    return work;
}