console.log("Exercise 1 - Word Highlighter");

let myParagraph= document.getElementById("myParagraph");
const arr1=myParagraph.innerText.split(' ')
const myObj1={}

arr1.forEach((a,idx)=>{
    if(  a.includes('.')){
        arr1[idx] =a.replace('.','')
    }
    if(  a.includes(',')){
        arr1[idx] =a.replace(',','')
    }
    if(  a.includes(';')){
        arr1[idx] =a.replace(';','')
    }
    if(  a.includes(':')){
        arr1[idx] =a.replace(':','')
    }
    if(  a.includes('"')){
        arr1[idx] =a.replace('"','')
    }
    if(  a.includes('!')){
        arr1[idx] =a.replace('!','')
    }

    if(myObj1.hasOwnProperty(arr1[idx].toLowerCase())){
        myObj1[arr1[idx].toLowerCase()]+=1
    }else{
        myObj1[arr1[idx].toLowerCase()]=1
    }
})

const arr2=[]
for(let i in myObj1){
    let myObj2={}
    myObj2[i]=myObj1[i]
    arr2.push(myObj2)
}

arr2.sort((a,b)=> Object.values(b)[0] - Object.values(a)[0])

let selectedWords=[]
for (let i=0; i<5; i++){
    selectedWords.push(Object.keys(arr2[i])[0])
}


const myFinalWords=myParagraph.innerHTML.split(' ')
let p1=myFinalWords.map(a=>{
    if(a.includes(selectedWords[0]) || a.includes(selectedWords[1]) || a.includes(selectedWords[2]) || a.includes(selectedWords[3]) || a.includes(selectedWords[4])){
        a=`<span style='color:red'>`+a+'</span>'
        // if(  a.includes('.')){
        //     a =a.replace('.','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a=`<span style='color:red'>`+a+'.</span>'
        //     }
        // }
        // else if(  a.includes(',')){
        //     a =a.replace(',','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a=`<span style='color:red'>`+a+',</span>'
        //     }
        // }
        // else if(  a.includes(';')){
        //     a =a.replace(';','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a='<span style="color:red">'+a+';</span>'
        //     }
        // }
        // else if(  a.includes(':')){
        //     a =a.replace(':','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a=`<span style='color:red'>`+a+':</span>'
        //     }
        // }
        // else if(  a.includes('"')){
        //     a =a.replace('"','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a=`<span style='color:red'>`+a+'"</span>'
        //     }
        // }
        // else if(  a.includes('!')){
        //     a =a.replace('!','')
        //     if(selectedWords.includes(a.toLowerCase().trim())){
        //         a=`<span style='color:red'>`+a+'!</span>'
        //     }
        // }
        
    }
    
    return a;

})

myParagraph.innerHTML=p1.join(' ')
