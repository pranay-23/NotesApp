const btn=$("#addBtn");
const main=$(".main");
btn.on("click",()=>{
    addNote();
});


const addNote=(text="")=>{
    const note=document.createElement("div");
    note.classList.add("note");
    note.innerHTML=`<div class='tool'>
    <i class='save fa-solid fa-floppy-disk'></i>
    <i class='del fa-solid fa-trash'></i>
</div>
<textarea>${text}</textarea>`;


$(note).on("click",".del",function(){
    note.remove();
    saveNote();
});


$(note).on("click",".save",function(){
    saveNote();
});

$(note).on("change","textarea",function(){
    saveNote();
});

main.append(note);
saveNote();
};


const saveNote=()=>{
    const notes=$(".note textArea")
    const data=[];

    notes.each((i)=>data.push(notes[i].value));

    if(data.length===0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));
    }
}

(
    function(){
        const lnotes=JSON.parse(localStorage.getItem("notes"));
        if(lnotes===null){
            addNote();
        }else{
            lnotes.forEach(
                (lsnote)=>{
                    addNote(lsnote);
                }
            )
        }
        
    }
)()