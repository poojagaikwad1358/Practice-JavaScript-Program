function getShortMessages(messages){

    const newFilter = messages.filter(x=> x.message.length<50);

    const newValues = newFilter.map(x=>x.message);
    console.log(newValues);
}

var message = [
{
    message:'abcdddddddddddddddddddddddddddddddddddddddd'
},

{
    message:'efghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
},

{
    message:'ijkllllllllllllllllllllllllllllllllllllllllllllllllllll'
}


]
getShortMessages(message);