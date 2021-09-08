// Dynamic Renal Scintigraphy Report Goupile: go to https://goupile.fr/demo/app/introduction/

page.pushOptions({compact: true})

page.output(html`
    <H1><u>Dynamic Renal Scintigraphy Report</u>
`)

// Patient information

page.section("Patient", () => {
    page.text("*identifier", "Patient identifier")
    page.text("*patient_first_name", "First name")
    page.text("*patient_name", "Name")
    page.date("*patient_birth", "Date of birth")
})

// Exam information

page.section("Dynamic Renal Scintigraphy Report", () => {
    page.text("institution", "institution")
    page.date("exam_date_time", "Date and time of the exam")
    page.enum("exam_type", "examen type",
        ["scintigraphy", "NA"])
    page.text("physician", "Physician responsible for interpretation"), {value: "PUECH"}
    page.text("device_model", "Imaging device model",
        ["Dual detector gamma camera SYMBIA S Siemens"])
    page.date("device_date", "Date of imaging device validation"), {value: 2020-01-01}
    page.enumDrop("exam_indication", "Indication", 
        ["initial evaluation", "pre operative follow up", "post operative follow up", "Other", "NA"])
    page.enum("Tracer", "Tracer", 
        ["Tc-99m DTPA","Tc-99m MAG3", "other", "NA"], {value:"Tc-99m DTPA"})
    page.number("Activity", "Activiy, MBq", {min:0})
    page.enum("site_of_tracer_injection", "site of tracer injection",
        ["periphérique IV", "central IV", "NA"])
    page.enum("patient_position", "Patient position",
        ["lying","sitting", " NA"])
    page.enum("furosemid_injection", "Furosemid injection",
        ["No", "Yes", "NA"])
    page.number("acquisition_time", "acquisition time, min", {min:0})
    page.enum("renogram_curve", "comparison of both renogram curves",
        ["Normal", "Abnormal", "NA"])
    page.enum("Calculation_method", "calculation method used for renal function stimation",
        ["AUC", "Patlak", "NA"])        
    })

// Results

page.section("Results", () => { 
     page.enumDrop("duplication", "Duplication of urinary tract resulting in an 'additionnal' urinary tract to describe",["No", "Right", "Left", "Bilateral", "Unknown", "NA"], {value: "No"})
    page.enumDrop(
        "renal_transplant",
        "Presence of a renal transplant resulting in an 'additionnal' urinary tract to describe", 
        ["No", "Right", "Left", "Unknown", "NA"], {value: "No",})
    page.enum("diversion", 
                "Presence of a urinary diversion in the described urinary tract",
                ["No", "yes",  "NA"])  
    page.number("Bladder_onset_time", "bladder onset time, min")       
    page.enum("renal_function_symetrie","Renal function symmetry, according to the physician's evaluation",
    ["symetric", "asymetric", "NA"]) 
})


// Dynamic renal scintigraphy results

page.section("Dynamic renal scintigraphy results", () => {
    page.slider("n_urinary_upper_tract", "Number of urinary tract to describe", {min:0, max:8,value: 2,})
    for (let u = 1; u <= page.value("n_urinary_upper_tract"); u++) {
            page.section("Urinary upper tract #" + u, () => {
            page.number("urinary_upper_tract_id" + u, "ID of the urinary upper tract", {value:u})
            page.enumDrop("urinary_upper_tract" + u, 
                "Lateralisation of the urinary upper tract to be described", 
                ["Left", "Right", "Left upper pole", "Left lower pole", "Right upper pole", "Right lower pole", "Left renal transplant", "Right renal transplant"])
            page.enum("diversion" + u, 
                "Presence of a urinary diversion in the described urinary tract",
                ["No", "jj stent", "ureteral catheter", "pyelostomy", "NA"])
            page.number("Cortical_Transit_time" + u, "cortical transit time, min")
            page.enum("cortical_transit_time" + u, "Cortical transit time as evaluated by the physician",
                ["Normal", "Retarded", "NA" ])
            page.number("Pyelocalicieal_passage_time" + u,"Pyelocalicieal passage time",)     
            page.enum("stasis" + u, "stasis", 
                ["caliceal","pyelo caliceal","uretero pyelo caliceal","none", "NA"])    
            page.enum("late_images" + u, "late images",
                ["do not give in or increase","partly give in", "complet decrease"])
            page.enum("parenchymal_impregnation" + u, "parenchymal impregnation",
                ["lat and homogenous","early and heterogeneous ", "early and homogeneous", "late and heterogeneous", "NA"]) 
            page.enum("kidney_size" + u, "kidney size",
                ["normal","altered", "NA"])  
            page.enum("kidney_morphology" + u, "kidney morphology",
                ["normal","abnormal", "NA"]) 
            page.enum("ureteral_dilatation"+ u, "ureteral dilatation",
                ["yes", "no", "NA"])
            page.enum("vascular_slope" + u, "vascular slope",
                ["normal", "altered", "NA"])
            page.number("Tmax" + u,"Tmax", {min:0}, {max:20}) 
            page.enum("Curve" + u, "curve",
                ["Spontaneous emptying complete (or almost complete)", "no emptying", "spontaneous emptying incomplete"])
            page.number("Renal_function" + u, "Renal function, as evaluated by the prevously defined method, in percentage", {min:0}, {max:100})            
            page.enum("furosemide_test"+u, " furosemid test",
                ["Complete emptying", "Partial emptying", "No emptying", "NA"])
            page.textArea("comment_conclusion" +u , "Free text for manually added results, or comment")     
            page.enum("findings" + u, "Qualification of the findings"
                ["Normal", "Abnormal compatible with clinical description", "Abnormal not explanatory for clinical description", "Unknown", "NA"])
        
    })
    }
})

    
// Conclusion

page.section("Conclusion", () => {
    page.textArea("conclusion", "Conclusion")
    page.text("comment_conclusion", "Free text for manually added results, or comment")
    page.binary("*conclusion_validation", "Conclusion Validation", {help:"The physician must validate the automatically generated conclusion, after manual modification if required"})
})
