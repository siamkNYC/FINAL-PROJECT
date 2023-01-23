
initialize = () =>
{
    listBox = document.getElementById("listbox");
    document.getElementById("title").addEventListener("click", one);
    document.querySelector("h1").style.textDecorationColor = "teal";

    groceryList=[];
    display();
}


one = () =>
{
    alert(`Everyone needs to go grocery shopping. And when you go grocery shopping, you need a list. wouldn't it be great if there was an online option? Of course it would! So here is your dream come true!`);
}


addNewItem = () =>
{
    if (listsel.value === "")
    {
        return;
    }

    groceryList.push(listsel.value);
    display();
}


deleteItem = () =>
{
    let idx = parseInt(listform.value)-1;

    if (idx >= groceryList.length || idx < 0 || idx === "")
    {
        return;
    }  
    groceryList.splice(idx, 1);

    listform.value = "";
    display();
}


moveUp = () =>
{
    moveIdx = parseInt(listmove.value)-1;

    if (moveIdx > 0)
    {
        groceryList.splice((moveIdx - 1), 0, groceryList.splice(moveIdx, 1));
    }

    display();
}


moveDown = () =>
{
    moveIdx = parseInt(listmove.value)-1;

    if (groceryList.length > moveIdx)
    {
        groceryList.splice((moveIdx + 1), 0, groceryList.splice(moveIdx, 1));
    }
    
    display();
}


display = () => 
{
    let b = 0
    listBox.innerHTML = `#:  ITEM <br />` ;
    for (let i = 0; i < groceryList.length; i++)
    {
        b++;
        console.log("i=" + i);
        listBox.innerHTML += `<br />  ${b}:   ${groceryList[i]}`;
    }
        console.log(groceryList);
}