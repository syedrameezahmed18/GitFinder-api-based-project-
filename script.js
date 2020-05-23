//7HAASwxx1DyAIe3dEdXNJhuBiwgKaK0G  -- api key


let apiusers="https://api.github.com/users/syedrameezahmed18";
let api="https://api.github.com";
let apiuser="https://api.github.com/users"
let elemcatch=document.querySelector(".mainport");
let imgholds=document.querySelector(".imgholder");
let details1=document.querySelector(".details");
let searchbar=document.querySelector(".form-control");
let ok=document.querySelector(".btn");
let clear=document.querySelector(".h");
var logkey="true";
var properoutput="true";
finderclick = () => {

    if(searchbar.value==="")
    {
        alert("empty entry");
    }
    else if(properoutput==="false")
    {
        alert("clear current profile first");
    }
    else
    {   
        let trueuser=searchbar.value;
        let apitrueuser=`${apiuser}/${trueuser}`;
        fetch(apitrueuser)
            .then( resp => resp.json())
                .then( data => 
                    {   
                       
                        logkey="true";  // aik key jo logs ka content repeat hone se rokhe
                        //profile pic
                        let userpp=data["avatar_url"];
                        let userppelem=document.createElement("img");
                        userppelem.src=userpp;
                        imgholds.appendChild(userppelem);

                        //Username
                        let usern=data["login"];
                        let usernelem=document.createElement("h1");
                        let userntxt=document.createTextNode(usern);
                        usernelem.appendChild(userntxt);
                        details1.appendChild(usernelem);
                        usernelem.addEventListener("click", () => {
                            this.open(`https://github.com/${data["login"]}`,"_blank");
                        })

                        //Bio

                        let bio=data["bio"];
                        let bioelem=document.createElement("p");
                        console.log(bio.length);
                        if(bio.length>=100)
                        {      let vb="";
                            for(var i =0; i<100 ; i++)
                            {
                                vb+=bio.charAt(i);
                            }
                            bio=`${vb}...`;
                            
                            console.log(vb);
                        }
                        let biotxt=document.createTextNode(bio);
                        bioelem.appendChild(biotxt);
                        details1.appendChild(bioelem);   
    
                        //Followers

                        let followers=data["followers"];
                        let followerselem=document.createElement("p");
                        let followerstxt=document.createTextNode(`Followers : ${followers}`);
                        followerselem.appendChild(followerstxt);
                        details1.appendChild(followerselem);

                        //Following

                        let following=data["following"];
                        let followingelem=document.createElement("p");
                        let followingtxt=document.createTextNode(`Followings : ${following}`);
                        followingelem.appendChild(followingtxt);
                        details1.appendChild(followingelem);

                        //logs

                        let log="Logs";
                        let logelem=document.createElement("button");
                        logelem.classList.add("btn");
                        logelem.classList.add("btn-outline-success");
                        let logtxt=document.createTextNode(log);
                        logelem.appendChild(logtxt);
                        details1.appendChild(logelem);
                        logelem.addEventListener("click", ()=>{
                            
                            if(logkey==="true")
                            {
                            console.log(data);
                            let warner=document.createElement("p");
                             warnertxt=document.createTextNode("Done! pls check console window");
                             warner.appendChild(warnertxt);
                             warner.classList.add("unique");
                             details1.appendChild(warner);
                             logkey="false";
                            }
                        })
                        
                    })

                    searchbar.value="";
                    properoutput="false"; //reset the value
    }

}

finderenter = (e) => {
    if(e.keyCode===13)
    {
        if(searchbar.value==="")
        {
        alert("empty entry");
        }
    else if(properoutput==="false")
        {
        alert("clear current profile first");
        }
    else
        {   
        let trueuser=searchbar.value;
        let apitrueuser=`${apiuser}/${trueuser}`;
        fetch(apitrueuser)
            .then( resp => resp.json())
                .then( data => 
                    {   
                       
                        logkey="true";  // aik key jo logs ka content repeat hone se rokhe
                        //profile pic
                        let userpp=data["avatar_url"];
                        let userppelem=document.createElement("img");
                        userppelem.src=userpp;
                        imgholds.appendChild(userppelem);

                        //Username
                        let usern=data["login"];
                        let usernelem=document.createElement("h1");
                        let userntxt=document.createTextNode(usern);
                        usernelem.appendChild(userntxt);
                        details1.appendChild(usernelem);
                        usernelem.addEventListener("click", () => {
                            this.open(`https://github.com/${data["login"]}`,"_blank");
                        })

                        //Bio

                        let bio=data["bio"];
                        let bioelem=document.createElement("p");
                        console.log(bio.length);
                        if(bio.length>=100)
                        {      let vb="";
                            for(var i =0; i<100 ; i++)
                            {
                                vb+=bio.charAt(i);
                            }
                            bio=`${vb}...`;
                            
                            console.log(vb);
                        }
                        let biotxt=document.createTextNode(bio);
                        bioelem.appendChild(biotxt);
                        details1.appendChild(bioelem);   
    
                        //Followers

                        let followers=data["followers"];
                        let followerselem=document.createElement("p");
                        let followerstxt=document.createTextNode(`Followers : ${followers}`);
                        followerselem.appendChild(followerstxt);
                        details1.appendChild(followerselem);

                        //Following

                        let following=data["following"];
                        let followingelem=document.createElement("p");
                        let followingtxt=document.createTextNode(`Followings : ${following}`);
                        followingelem.appendChild(followingtxt);
                        details1.appendChild(followingelem);

                        //logs

                        let log="Logs";
                        let logelem=document.createElement("button");
                        logelem.classList.add("btn");
                        logelem.classList.add("btn-outline-success");
                        let logtxt=document.createTextNode(log);
                        logelem.appendChild(logtxt);
                        details1.appendChild(logelem);
                        logelem.addEventListener("click", ()=>{
                            
                            if(logkey==="true")
                            {
                            console.log(data);
                            let warner=document.createElement("p");
                             warnertxt=document.createTextNode("Done! pls check console window");
                             warner.appendChild(warnertxt);
                             warner.classList.add("unique");
                             details1.appendChild(warner);
                             logkey="false";
                            }
                        })
                        
                    })

                    searchbar.value="";
                    properoutput="false"; //reset the value
         }
    }
}

collapse = () => {
    this.location.reload();
    properoutput="true";
}


ok.addEventListener("click", finderclick);
searchbar.addEventListener("keypress", finderenter);
clear.addEventListener("click", collapse);




    /*fetch(apiusers)
    .then(resp => resp.json())
        .then(data => 
            
        {   
            if(searchbar.value==="1")
            {
            
            console.log(data);
            let p=data["avatar_url"];
           let pimg= document.createElement("img");
            pimg.src="https://avatars0.githubusercontent.com/u/54007139?v=4";
            imgholds.appendChild(pimg);
            
            let p1=document.createElement("h1");
            let ptxt=document.createTextNode(data["login"]);
            p1.appendChild(ptxt);
            details1.appendChild(p1);
            }
            else{
                console.log("no");
            }
        }
        
            )

})*/


