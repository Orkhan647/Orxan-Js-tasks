const url = "https://api.github.com/users/Ali-GreenHeart/followers"
const rootElem= document.getElementById('root')

fetch(url)
.then((response)=>{
    return response.json()
})
.then((data)=>{
    data.forEach((followerData)=>{
        const followeElem=document.createElement("div");
        const  nameElem=document.createElement('p');
        const avatarUrl=document.createElement('img');
        avatarUrl.src=followerData.avatar_url
        nameElem.innerHTML=`Name: ${followerData.login}`
        rootElem.appendChild(avatarUrl)
        rootElem.appendChild(nameElem)

    })
})