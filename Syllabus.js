class Syllabus{
    constructor(subjectDropbox){
    //greetings
    this.greeting = createElement('h4');
    this.greeting2 = createElement('h4');

    

    //this.sstSyllabus = createInput("SST Syllabus");
    }

    update(){
        var trialIndex = "Syllabus/Trial"
        database.ref(trialIndex).set({
          engSyllabus :this.engSyllabus,
        });
        console.log(engSyllabus);
    }

    readtrial(){
        var trialRef = database.ref('Trial');
        trialRef.on("value",(data)=>{
            Trial = data.val();
        })
        console.log(Trial);
    }

    getSubject(){
        var subjectRef = database.ref('Syllabus/Subjects/English/engSyllabus');
        subjectRef.on("value",(data)=>{
            engSyllabus = data.val();
        })
        console.log(engSyllabus);
    }

    hide(){
        this.greeting.hide();
        this.greeting2.hide();
        this.subjectDropbox.hide();
        this.termDropbox.hide();

        this.mathsSyllabus.hide();
        this.englishSyllabus.hide();
        this.sstSyllabus.hide();
        this.scienceSyllabus.hide();
        this.secLangSyllabus.hide();
        this.ictSyllabus.hide();
    }

    checkOptions(){
        chosenSubject = this.subjectDropbox.value();
        console.log(chosenSubject);

        chosenTerm = this.termDropbox.value();
        console.log(chosenTerm);
    }

    display(){
        //Subject Dropbox Options
        this.subjectDropbox = createSelect();
        this.subjectDropbox.option("Maths");
        this.subjectDropbox.option("Science")
        this.subjectDropbox.option("SST")
        this.subjectDropbox.option("ICT")
        this.subjectDropbox.option("English")
        this.subjectDropbox.option("II Language")

        //Term Dropbox Options
        this.termDropbox = createSelect();
        this.termDropbox.option("Term 1")
        this.termDropbox.option("Half-Yearly")
        this.termDropbox.option("Term 2")
        this.termDropbox.option("Final")

        //Subject DropBox
        this.greeting.html("Please choose the subject:");
        this.greeting.position(10, 80);
        this.subjectDropbox.position(190,100);

        //Term Dropbox
        this.greeting2.html("Please choose the term:");
        this.greeting2.position(10, 55);
        this.termDropbox.position(190, 75);

        console.log(chosenSubject);

        switch(chosenSubject){
            case "Maths":
                this.mathsSyllabus = createInput("Maths Syllabus");
                this.mathsSyllabus.position(10,140);
                break;
            case "Science":
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                break;


        }
        
        
        if(chosenTerm === "Term 1"){
            /*
            if(chosenSubject === "Maths"){
                this.mathsSyllabus = createInput("Science Syllabus");
                this.mathsSyllabus.position(10,140);
              
            }

            else if(chosenSubject === "Science"){
                this.scienceSyllabus = createInput("Science Syllabus");
                this.scienceSyllabus.position(10,140);
                this.mathsSyllabus.visible() = false;
                console.log("SCIENCEEEEEE")
                
            }
*/
            if(chosenSubject === "SST"){
                this.sstSyllabus = createInput("SST Syllabus");
                this.sstSyllabus.position(10,140);
            }

            else if(chosenSubject === "ICT"){
                this.ictSyllabus = createInput("ICT Syllabus");
                this.ictSyllabus.position(10,140);
            }

            else if(chosenSubject === "English"){
                this.englishSyllabus = createInput("English Syllabus");
                this.englishSyllabus.position(10,140);
            }

            else if(chosenSubject === "II Language"){
                this.secLangSyllabus = createInput("II Language Syllabus");
                this.secLangSyllabus.position(10,140);
            }
        }
    }

    
}