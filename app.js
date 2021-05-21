function result () {
    const students= {
        DAVID : {
            math: "95",
            physics: "80",
            english : "75",
            chemistry : "89",
            biology : "69",
            agriculture: "86",
            geography:"77"
        },

        ANGELA : {
            math: "90",
            physics: "60",
            english : "64",
            chemistry: "98",
            biology: "88",
            agriculture: "87",
            geography:"89"

        },
        
        GABRIEL : {
            math: "94",
            physics: "85",
            english : "70",
            chemistry : "78",
            biology: "76",
            agriculture: "74",
            geography:"98"
        
        }, 
    };

    let studentname=document.getElementById('studentname').value;
    let input=studentname.toUpperCase();
    let definition=students[input];
    let output=document.getElementById("output");

    if (definition==undefined) {
        output.innerHTML= `<hr> There is no information about this student. <hr>`;
    }else {
        output.innerHTML=`<hr> Math score is ${definition.math}.
         <hr> Physics score is ${definition.physics}. 
         <hr> English score is ${definition.english}. 
         <hr> Chemistry score is ${definition.chemistry}. 
         <hr> Biology score is ${definition.biology}.
         <hr> Agriculture score is ${definition.agriculture}.
         <hr> Geography score is ${definition.geography}<hr>`; 
    };

 
};