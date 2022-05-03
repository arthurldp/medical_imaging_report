{
	"$schema": "",
	"title": "Endoscopic Ultrasound report for esophageal cancer",
	"type": "object",
	"required": ["patient_first_name", "patient_last_name", "patient_birth", "conclusion_validation"],
	"properties": {
		"Patient_identifier": {
			"type": "string",
			"description": "Patient unique identifier",
			"minLen": 13,
			"maxLen": 13,
			"pattern": "^[0-9aAbB]{13}$"
		},
		"Patient_first_name": {
			"type": "string",
			"description": "Patient's first name"
		},
		"Patient_last_name": {
			"type": "string",
			"description": "Patient's last name"
		},
		"patient_birth": {
			"type": "string",
			"description": "Date of birth, format yyyy-mm-dd",
			"format": "date"
		},
		"Patient_gender": {
			"type": "string",
			"description": "Patient's gender",
			"enum": ["male", "female", "NA"]
		},
		"Prion_disease_status": {
			"type": "string",
			"description": "Risk of transmissible spongiform encephalopathy",
			"enum": ["NA","No","suspected or affected"]
		},
		"Institution": {
			"type": "string",
			"description": "Institution where endoscopic ultrasound is performed"
		},
		"Physician": {
			"type": "string",
			"description": "Physician who peformed endoscopic ultrasound exam"
		},
		"Prescribing_physician": {
			"type": "string",
			"description": "Physician who prescribed endoscopic ultrasound exam"
		},
		"Anesthesiologist": {
			"type": "string",
			"description": "Anesthesiologist name"
        },
		"Exam_date_time": {
			"type": "string",
			"description": "Date and time of exam, format yyyy-mm-ddThh:mm:ss",
			"format": "date-time"
		},
		"Device_model": {
			"type": "string",
			"description": "Model of imaging device"
		},
		"Device_date": {
			"type": "string",
			"description": "Date of device validation, format yyyy-mm-dd",
			"format": "date"
		},
		"Probe_type" {
			"type": "string",
			"description": "Type of EUS probe used",
			"enum": ["radial","linear","miniprobe","NA"],
			"default": "NA"
		}, 
		"US_frequency" {
			"type": "number",
			"description": "Frequency of EUS probe in Mega Hertz",
			"minimum": 7.5 
		}, 	
		"Viewable_layers_number": {
			"type": "string",
			"description": "Number of viewable parietal esophageal layers",
			"enum" : ["5", "7", "9","NA"]
			"default": "NA"
		},
		"Patient_position": {
			"type": "string",
			"description": "Position of patient on examination table",
			"enum": ["NA","supine","left lateral recubent","right lateral recubent"]
		},
		"Sedation_protocol": {
			"type": "string",
			"description": "Protocol of anesthesiology before endoscopy"
		},
		"CO2_insufflation": {
			"type": "string",
			"description": "CO2 insufflation during endoscopy",
			"enum": ["Yes","No","NA"],
			"default": "NA"
		},
		"Clinical_history": {
			"type": "string",
			"description": "Short description of clinical history"
		},
		"Exam_indication": 
			"type": "string"
			"description": " Indication of the EUS"
			"enum": ["initial staging","lymph node aspiration","recurence","evaluation post treatment","NA"]
		},
		"previous_endoscopy_results": {
			"type": "string",
			"description": "Main results of previous endoscopy"
		},
		"esophageal_tumoral_stenosis": {
			"type": "string",
			"description": "Presence of esophageal tumoral stenosis",
			"enum": ["No","Yes","NA"],
			"default": "No"
		},
		"Esophageal_stenosis_location": { 
			"type":" string",
			"description": "Location of esophageal tumoral stenosis",
			"enum":["cervical","upper thoracic","middle thoracic","lower thoracic","gastro esophageal junction","unknown","NA"]  	
		},
		"Exam_conditions": {
			"type": "string",
			"description": "Conditions of the EUS process",
			"enum":["Optimal", "Suboptimal", "NA"]
		},
		"Aspecific_parietal_thickening": {     
			"type": "string",
			"description": "Location and layer of parietal aspecific thickening"
		},
		"Tumor_presence": {
			"type": "number",
			"description": "Number of esophageal tumor detected on the eus",
			"minimum": 0
		},
		"Lymph_node_presence": {
			"type": "number",
			"description": "Number of lymph node detected on the eus",
			"minimum": 0
		},	
		"Barett_esophagus": {
			"type": "string",
			"description": "Sign(s) of barett esophagus detected on the eus",
			"enum": ["No", "Yes", "NA"],
			"default": ["No"]
		},
		"Pleural_effusion": {
			"type": "string",
			"description": "Pleural effusion detected on the eus",
			"enum": ["Absence", "Presence","Unknown","NA"],
			"default": ["No"]
		},
		"Intra_peritoneal_effusion": {
			"type": "string",
			"description": "Intra peritoneal effusion detected on the eus",
			"enum": ["Absence", "Presence","Unknown" "NA"],
			"default": ["No"]
		},
		"Metastasis_indirect_signs": {
			"type": "string",
			"description": "Possible metastasis signs detected on the eus",
			"enum": ["No", "abdominal effusion", "pleural effusion","hepatic metastasis aspect","NA"],
			"default": ["No"]
		},
		"FNA_radial_EUS": { 
			"type": "string",
			"description": "Process of radial eus for lymph node FNA", 
			"enum": ["No","Yes","NA"],
			"default" : ["No"]
		},
		"FNA_Needle_model": {
			"type": "string",
			"description": "Model of FNA needle "
		},
		"FNA_Needle_size": {
			"type": "number",
			"description": "Size of FNA needle in Gauge" 
		},
		"Lymph_node_FNA_number": {
			"type": "number",
			"description": "Number of lymph node punctioned",
			"minimum" : 0
		},
		"Comment_on_esophageal"
			"type": "string",
			"description": "Free text to add information for esophageal EUS description"
		},	
		"Tumor_results": {
			"type": "object",
			"description": "Description of the tumor(s) results",
			"properties": {
				"Tumor_id" {
					"type": "string",
					"description": "Generated hash id for each successively described tumor"
				},
				"Tumor_location": {
					"type": "string",
					"description": "Location of the tumor in esophagus",
					"enum": ["cervical esophagus", "upper thoracic esophagus", "middle thoracic esophagus", "lower thoracic esophagus", "esophagogastric junction"]
				},
				"Tumoral_upper_point_incisors_distance": {
					"type": "number",
					"description": "Distance of upper point of tumor from the incisors in centimeter",
					"minimum": "15"
					"maximum": "42"
				},
				"Tumoral_lower_point_incisors_distance": {
					"type": "number",
					"description": "Distance of lower point of the tumor from the incisors in centimeter",
					"minimum": "15"
					"maximum": "42"
				},
				"Circumferential_location": {
					"type": "string",
					"description": "Direction of tumor in esophageal wall on a transversal section of esophagus",
					"enum": ["NA","Unknown", "circumferential", "right quadrant", "left quadrant", " anterior quadrant", "posterior quadrant"],
					"default": "NA"
				},
				"Tumor_depth": {
					"type": "number",
					"description": "Measurements of tumor depth (cm)",
					"minimum": 0
				},
				"Tumor_length": {
					"type": "string",
					"description": "Measurements of tumor length (cm)",
					"minimum": 0
				},
				"Tumor_width": {
					"type": "string",
					"description": "Measurements of tumor width (cm)",
					"minimum": 0
				},
				"Tumor_initial_layer": {
					"type": "string",
					"description": "Parietal layer where the tumor initially developped",
					"enum": ["NA","indeterminate","mucosae","epithelium","lamina propria","muscularis mucosae","sub mucosae","muscularis propria","adventice"],
					"default": "NA"
				},
				"Parietal_extension": {
					"type": "string",
					"description": "Degree of tumor invasion within the wall layers",
					"enum": ["NA","indeterminate","epithelium","lamina propria","muscularis mucosae","sub mucosae","muscularis propria","adventice"],
					"default": "NA"
				},
				"staging_japanese_classification": {
					"type": "string",
					"description": "Japanese classification for superficial esophageal cancer",
					"enum": ["NA","m1","m2","m3","sm1","sm2","sm3","unknown"]
					"default": "NA",
				},
				"staging_T_stage": {
					"type": "string",
					"description": "Us T stage of TNM staging classification",
					"enum": ["NA","usTX","usT0","usTis","usT1a","usT1b","usT2","usT3","usT4a","usT4b","unknown"],
					"default": "NA"
				},
				"Tumor_external_borders": {
					"type": "string",
					"description": "Aspect of tumor external borders",
					"enum": ["NA", "regular", "irregular"],
					"default": "NA"
				},
				"Tumor_external_anatomic_contact": {
					"type": "string",
					"description": "Aspect of external anatomic contact, description of invasion of mediastinal structures ",
				},	
				"Tumor_comment": {
					"type": "value",
					"description": "Free text for additional information about the tumor "
				}
			},
		},
		"Lymph_node_results": {
			"type": "object",
			"description": "Description of the Lymph node(s) results",
			"properties": {
				"Lymph_node_id" {
					"type": "string",
					"description": "Generated hash id for each successively described lymph node"
				},
				"Lymph_node_territory": {
					"type": "string",
					"description": "Lymph node territory location",
					"enum": ["NA","peritumoral","2R","2L","4R","4L","5L","7","8U","8M","8Lo","9R","9L","17","18","19","20"],
					"default": "NA"
				},
				"Comment_on_location": {
					"type": "string",
					"description": "Free text to add comment on lymph node location, like peritumoral location or other information",
				},
				"Lymph_node_incisors_distance": {
					"type": "number",
					"description": "Distance of lymph node from the incisors",
					"minimum": 15
				},
				"Node_metastatic_characteristics": {
					"type": "number",
					"description": "Number of metastatic charecteristics such as short axis size superior or égal to 10mm , rounded shape, regular contours and hypoechoic content",
					"minimum": 0,
					"maximum": 4
				},
				"Lymph_node_size": {
					"type": "number",
					"description": "Short axis diameter of the lymph node in millimeter"
					"exclusiveMinimum": 0,
					"maximum": 200
				},
				"Lymph_node_echogenicity": {
					"type": "string",
					"description": "Echongenicity of the lymph node",
					"enum": ["NA","hyperechoic","hypoechoic","anechoic"],
					"default": "NA"
				},
				"Lymph_node_contours": {
					"type": "string",
					"description": "Aspect of lymph node contours",
					"enum": ["NA", "regular", "irregular"],
					"default": "NA"
				},
				"Lymph_node_shape": {
					"type": "string",
					"description": "Aspect of lymph node shape",
					"enum": ["NA", "rounded", "lobulated","oval","spiculated"],
					"default": "NA"
				},
				"Lymph_node_comment": {
					"type": "string",
					"description": "free text to complete manuelly the lymph node description, like homogeneous or inhomogeneous content" 
				},	
				"Node_FNA_evaluation": {
					"type": "string",
					"description": "evaluation of lymph node by FNA",
					"enum": ["NA", "yes", "No"]  
				},
				"FNA_comment": {
					"type": "string",
					"description": "free text to complete manuelly the lymph node FNA information and possible difficulties" 
				}
			},
		},
		"Conclusion": {
			"type": "string",
			"description": "Free text to describe main abnormalities"
		},
		"Guidance": {
			"type": "string",
			"description": "free text to manuelly describe guidance of the exam"
		},
		"Conclusion_validation": {
			"type": "boolean",
			"description": "The physician must validate the automatically generated conclusion, after manual modification if required",
			"default": false
		}
	
}
