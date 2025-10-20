{
    "$schema": "https://json-schema.org/draft/2019-09/schema#",
    "title": "Endoscopic ultrasound, transoesophageal echocardiography report for endocarditis",
    "type": "object",
    "required": ["patient_first_name", "patient_first_name", "patient_birth", "conclusion_validation"],
    "properties": {
        "identifier": {
            "type": "string",
            "description": "Patient unique identifier",
            "minLen": 13,
            "maxLen": 13,
            "pattern": "^[0-9aAbB]{13}$"
        },
        "patient_first_name": {
            "type": "string",
            "description": "Patient's first name"
        },
        "patient_name": {
            "type": "string",
            "description": "Patient's name"
        },
        "patient_birth": {
            "type": "string",
            "description": "Date of birth, format yyyy-mm-dd",
            "format": "date"
        },
        "physician": {
            "type": "string",
            "description": "Physician responsible for the interpretation of the imaging results"
        },
        "exam_type": {
            "type": "categorical",
            "description": "Exam type",
            "enum": ["transoesophageal echocardiography"]
        },
        "exam_date_time": {
            "type": "string",
            "description": "Date and time of exam, format yyyy-mm-ddThh:mm:ss+00:00",
            "format": "date-time"
        },
        "device_model": {
            "type": "string",
            "description": "Model of imaging device"
        },
        "device_date": {
            "type": "string",
            "description": "manufacture date of imaging device, format yyyy"
            "format": "date"
        },
        "exam_indication": {
            "type": "categorical",
            "description": "Exam indication",
            "enum": ["Endocarditis First Examination", "Follow up", "Other", "NA"]
        },
        "exam_echogenicity": {
            "type": "categorical",
            "description": "patient echogenicity undergoing examination",
            "enum": ["high echogenicity", "moderate echogenicity", "low echogenicity", "NA"]
        },
        "exam_tolerance": {
            "type": "categorical",
            "description": "patient tolerance during exam",
            "enum": ["good tolerance", "moderate tolerance", "poor tolerance", "NA"]
        },
        "valve_n": {
            "type": "string",
            "description": "cardiac valve",
            "minimum": 0,
            "maximum": 4
        },
        "valve": {
            "type": "object",
            "properties": {
                "valve_location": {
                    "type": "categorical",
                    "description": "Cardiac valve location",
                    "enum":["Aortic", "Mitral", "Pulmonary", "Tricuspid"],
                    "default": "Aortic"
                },
                "valve_nature": {
                    "type": "categorical",
                    "description": "Valve nature",
                    "enum": ["Native", "Prosthetic"],
                    "default": "Native"
                },
                "abcess": {
                    "type": "categorical",
                    "description": "presence of abcess on the valve",
                    "enum": ["Yes", "No", "NA"],
                    "default": "No"
                },
                "valvular_dehiscence": {
                    "type": "categorical",
                    "description": "presence of valvular dehiscence",
                    "enum": ["Yes", "No", "NA"],
                    "default": "No"
                },
                "valvular_aneurysm": {
                    "type": "categorical",
                    "description": "presence of valvular aneurysm",
                    "enum": ["Yes", "No", "NA"],
                    "default": "No"
                },
                "valvular_perforation": {
                    "type": "categorical",
                    "description": "presence of valvular perforation",
                    "enum": ["Yes", "No", "NA"],
                    "default": "No"
                },
                "pseudoaneurysm": {
                    "type": "categorical",
                    "description": "presence of pseudoaneurysm near the valve",
                    "enum": ["Yes", "No", "NA"],
                    "default": "No"
                },
                "comment": {
                    "type": "string",
                    "description": "Free text for manually added to the valve description and acute complication"
                }
            }
        },
        "vegetation_n": {
            "type": "interger",
            "description": "Number of vegetation detected on the exam",
            "minimum": 0,
            "maximum": 10
        },
        "vegetation_results": {
            "type": "object",
            "properties": {
                "vegetation_id": {
                    "type": "string",
                    "description": "Generated hash id for each successively described vegetation",
                },
                "size_1": {
                    "type": "real",
                    "description": "vegetation maximal axis (mm)",
                    "exclusiveMinimum": 0,
                    "maximum": 50
                },
                "size_2": {
                    "type": "real",
                    "description": "vegetation maximal axis approximately perpendicular to first axis (mm)",
                    "exclusiveMinimum": 0,
                    "maximum": 50
                },
                "mobility": {
                    "type": "categorical",
                    "description": "vegetation mobility",
                    "enum": ["low", "medium", "high"],
                    "defaults": "Low"
                },
                "comment": {
                    "type": "string",
                    "description": "Free text for manually added to the vegetation description"
                }
            }
        }                   
        "findings": {
            "type": "categorical",
            "description": "exam concluding into endocarditis"
            "enum": ["endocarditis confirmed", "endocarditis not confirmed", "other diagnosis"],
        },
        "comment": {
            "type": "string",
            "description": "Free text for manually added results or comment"
        },
        "conclusion": {
            "type": "string",
            "description": "Text conclusion, automatically generated, and validated by the imaging physician"
        },
        "conclusion_validation": {
            "type": "boolean",
            "description": "The physician must validate the automatically generated conclusion, after manual modification if required",
            "enum": ["true", "false"],
            "default": "false"
        }
    }
}
