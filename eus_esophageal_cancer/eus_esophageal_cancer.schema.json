{
	"$schema": "https://json-schema.org/draft/2019-09/schema#",
	"title": "endoscopic ultrasound report for esophageal cancer",
	"type": "object",
	"required": ["patient_first_name", "patient_last_name", "patient_birth", "conclusion_validation"],
	"properties": {
		"patient_identifier": {
			"type": "string",
			"description": "patient unique identifier",
			"minLen": 13,
			"maxLen": 13,
			"pattern": "^[0-9aAbB]{13}$"
		},
		"patient_first_name": {
			"type": "string",
			"description": "patient's first name"
		},
		"patient_last_name": {
			"type": "string",
			"description": "patient's last name"
		},
		"patient_birth": {
			"type": "string",
			"description": "date of birth, format yyyy-mm-dd",
			"format": "date"
		},
		"patient_gender": {
			"type": "string",
			"description": "patient's gender",
			"enum": ["male", "female", "NA"]
		},
		"institution": {
			"type": "string",
			"description": "institution where endoscopic ultrasound is performed",
			"default": "chu of lille"
		},
		"operator_physician": {
			"type": "string",
			"description": "name of physician who peformed endoscopic ultrasound exam"
		},
		"prescribing_physician": {
			"type": "string",
			"description": "name of physician who prescribed endoscopic ultrasound exam"
		},
		"anesthesiologist": {
			"type": "string",
			"description": "Name of Anesthesiologist"
        },
		"exam_date_time": {
			"type": "string",
			"description": "date and time of exam, format yyyy-mm-ddThh:mm:ss",
			"format": "date-time"
		},
		"device_model": {
			"type": "string",
			"description": "model of imaging device"
		},
		"probe_type" {
			"type": "string",
			"description": "type of EUS probe used",
			"enum": ["radial","linear","miniprobe","NA"],
			"default": "radial"
		},
		"patient_position": {
			"type": "string",
			"description": "position of patient on examination table",
			"enum": ["NA", "supine", "left lateral recubent", "unknown"],
			"default":"left lateral recubent"
		},
		"anesthesia_protocol": {
			"type": "string",
			"description": "type of anesthesiology during endoscopy and EUS",
			"enum": ["NA","IV sedation","general anesthesia","general anesthesia with tracheal intubation "],
			"default":"general anesthesia"
		},
		"co2_insufflation": {
			"type": "string",
			"description": "co2 insufflation during endoscopy",
			"enum": ["Yes","No","NA"],
			"default": "Yes"
		},
		"clinical_history": {
			"type": "string",
			"description": "short description of clinical history"
		},
		"exam_indication":  {
			"type": "string",
			"description": " indication of the EUS",
			"enum": ["initial staging","lymph node FNB","tumor recurrence","evaluation post treatment","NA"],
			"defualt": "initial staging"
		},
		"tumor_number": {
			"type": "number",
			"description": "number of esophageal tumor detected on the eus",
			"minimum": 0
		},
		"lymph_node_number": {
			"type": "number",
			"description": "number of lymph node detected on the eus",
			"minimum": 0
		},
		"nodal_n_stage": {
			"type": "string",
			"description": "n stage of TNM staging classification",
			"enum": ["NA", "NX", "usN0", "usN1", "usN2", "usN3"],
			"default": "usN0"
		},	
		"barett_esophagus": {
			"type": "string",
			"description": "sign of metaplasia of gastroesophageal junction detected on endoscopy",
			"enum": ["No", "Yes", "Suspicious","NA"],
			"default": ["No"]
		},
		"barett_esophagus_prague_classification_circumferential_extent_C": {
			"type": "string",
			"description": "circumferential metaplasia extent from GEJ in centimeter",
			"enum": ["NA", "0", "C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
			"default": ["NA"]
		},
		"barett_esophagus_prague_classification_maximal_extent_M": {
			"type": "string",
			"description": " maximal metaplasia extent from GEJ in centimeter",
			"enum": ["NA", "M0", "M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "M10"],
			"default": ["NA"]
		},
		"pleural_effusion": {
			"type": "string",
			"description": "pleural effusion detected on the eus",
			"enum": ["absence", "presence", "unknown", "NA"],
			"default": ["absence"]
		},
		"intraperitoneal_effusion": {
			"type": "string",
			"description": "intra peritoneal effusion detected on the eus",
			"enum": ["absence", "presence", "unknown", "NA"],
			"default": ["absence"]
		},
		"hepatic_metastases_signs": {
			"type": "string",
			"description": "hepatic metastasis signs detected on the eus",
			"enum": ["No","1", "2", "3", "> 3", "NA"],
			"default": ["No"]
		},
		"fnb_linear_eus": { 
			"type": "string",
			"description": "process of linear eus for lymph node FNB", 
			"enum": ["No", "Yes", "NA"],
			"default" : ["No"]
		},
		"fnb_needle_model": {
			"type": "string",
			"description": "model of FNB needle ",
			"default":"acquire"
		},
		"fnb_needle_size": {
			"type": "enum",
			"description": "size of FNB needle in Gauge (G)",
			"enum": ["NA", "19G", "22G", "25G"],
			"default": "22G" 
		},
		"lymph_node_fnb_number": {
			"type": "number",
			"description": "number of lymph node punctioned by FNB",
			"minimum" : 0
		},
		"comment_on_esophageal"
			"type": "string",
			"description": "free text to add other information for esophageal description"
		},	
		"tumor_results": {
			"type": "object",
			"description": "description of the tumor(s) results",
			"properties": {
				"tumor_id" {
					"type": "string",
					"description": "generated hash id for each successively described tumor"
				},
				"tumor_location": {
					"type": "string",
					"description": "location of the tumor in esophagus",
					"enum": ["NA","cervical esophagus", "upper thoracic esophagus", "middle thoracic esophagus", "lower thoracic esophagus", "esophagogastric junction"]
				},
				"tumor_upper_point_incisors_distance": {
					"type": "number",
					"description": "distance of upper point of tumor from the incisors in centimeter",
					"minimum": "15",
					"maximum": "45"
				},
				"tumor_lower_point_incisors_distance": {
					"type": "number",
					"description": "distance of lower point of the tumor from the incisors in centimeter",
					"minimum": "15",
					"maximum": "45"
				},
				"tumor_length": {
					"type": "string",
					"description": "measurements of tumor length in centimeter",
					"minimum": 0
				},
				"tumor_morphological_aspect": {
					"type": "string",
					"descripion": "morphological aspect of tumor in endoscopy",
					"enum": ["NA", "flat lesion", "ulcerative lesion", "granular lesion", "nodular", "protruded", "not describable"],
					"default": "NA"	
				},
				"circumferential_location": {
					"type": "string",
					"description": "circumference of tumor in esophageal wall on a transversal section of esophagus",
					"enum": ["NA","Unknown", "1/4 of circumference", "1/2 of circumference", "2/3 of circumference", "circumferential"],
					"default": "NA"
				},
				"cardinal_orientation": {
					"type": "string",
					"description": "quadrant of tumor in esophageal wall on a transversal section of esophagus",
					"enum": ["NA", "right quadrant", "left quadrant", " anterior quadrant", "posterior quadrant","curcumferential"],
					"default": "NA"
				},
				"esophageal_tumor_stenosis": {
					"type": "string",
					"description": "Presence of esophageal tumoral stenosis",
					"enum": ["No stenosis","incomplete stenosis","tumoral stenosis not crossable"],
					"default": "No"
				},
				"gej_siewert_classification": {
					"type": "string",
					"description": "description of siewert classification in case of adenocarcinoma of gastroesophageal junction, type 1 if between -5 and -1cm from cardia, type 2 if between -1 cm and +2cm from cardia, type 3 if between +2 to +5 cm from cardia",
					"enum": ["NA","siewert type 1","siewert type 2","siewert type 3", "unknown"],
					"default": "NA"
				},
				"tumoral_endoscopic_biopsy": {
					"type": "string",
					"description": "biopsy of tumor during endoscopy",
					"enum": ["NA", "no endoscopic biopsy ", "1 endoscopic biopsy", "2 endoscopic biopsies","3 endoscopic biopsies", "several endoscopic biopsies"],
					"default": "no biopsy"
				},
				"tumor_endoscopy_comment": {
					"type": "value",
					"description": "Free text for additional information about the endoscopy tumor results "
				},
				"parietal_tumor_extension": {
					"type": "string",
					"description": "Degree of tumor invasion within the wall layers, mucosae and submucosae are not differentiated",
					"enum": ["NA", "indeterminate", "mucosae and or sub mucosae", "muscularis propria", "adventice", "adjacent structures"],
					"default": "NA"
				},
				"tumor_t_stage": {
					"type": "string",
					"description": "Us T stage of TNM staging classification, T1b and T1a are grouped into T1 and T4a and T4b are grouped into T2 ",
					"enum": ["NA", "usTX", "usT0", "usTis", "usT1", "usT2", "usT3", "usT4", "unknown"],
					"default": "NA"
				},
				"tumor_external_anatomic_contact": {
					"type": "string",
					"description": "Aspect of external anatomic contact, description of invasion of mediastinal structures ",
					"enum": ["NA", "Unknown", "No external anatomic contact", "aorta", "vessels", "pleura", "tracheobronchial tube", "diaphragm", "pericardium"],
					"default": "NA"
				},	
				"tumor_eus_comment": {
					"type": "value",
					"description": "Free text for additional information about the eus tumor results "
				}
			}
		}
		"lymph_node_results": {
			"type": "object",
			"description": "Description of the Lymph node(s) results",
			"properties": {
				"Lymph_node_id" {
					"type": "string",
					"description": "Generated hash id for each successively described lymph node"
				},
				"lymph_node_territory": {
					"type": "string",
					"description": "Lymph node territory name and classification",
					"enum": ["NA", "Right upper paratracheal nodes (2R)", " Left upper paratracheal nodes (2L)", "Right lower paratracheal nodes (4R)", "Left lower paratracheal nodes (4L)", "subaortic nodes (5L)", "Subcarinal nodes (7)", " Upper thoracic paraesophageal lymph nodes (8U)", "middle thoracic paraesophageal lymph nodes (8M)", "Lower thoracic paraesophageal lymph nodes (8Lo)", "Right Pulmonary ligament nodes (9R)", " Left Pulmonary ligament nodes (9L)", " Left gastric nodes (17)", "Common hepatic nodes (18)", "Splenic nodes (19)", "Celiac nodes (20)"],
					"default": "NA"
				},
				"comment_on_lymph_node_location": {
					"type": "string",
					"description": "Free text to add comment on lymph node location, like peritumoral location or other information"
				},
				"lymph_node_size": {
					"type": "number",
					"description": "Short axis diameter of the lymph node in millimeter",
					"exclusiveMinimum": 0,
					"maximum": 200
				},
				"lymph_node_echogenicity": {
					"type": "string",
					"description": "Echongenicity of the lymph node",
					"enum": ["NA","hyperechoic","hypoechoic","anechoic"],
					"default": "NA"
				},
				"lymph_node_contours": {
					"type": "string",
					"description": "Aspect of lymph node contours",
					"enum": ["NA", "regular", "irregular"],
					"default": "NA"
				},
				"lymph_node_shape": {
					"type": "string",
					"description": "Aspect of lymph node shape",
					"enum": ["NA", "rounded", "lobulated", "oval", "spiculated"],
					"default": "NA"
				},
				"node_metastatic_aspect": {
					"type": "string",
					"description": "lymph node metastatic charecteristics such as short axis size superior or égal to 10mm , rounded shape or regular contours and hypoechoic content. m = mestastatic, i = inflammatory, u = undefined ",
					"enum": ["NA", "m", "i", "u"],
					"default":  "NA"
				},
				"lymph_node_comment": {
					"type": "string",
					"description": "free text to manually complete the description of the lymph node, such as homogeneous or inhomogeneous character and the presence of other identical lymph node(s) in the same territory." 
				},	
				"node_fnb_evaluation": {
					"type": "string",
					"description": "evaluation of lymph node by FNB"
					"enum": ["NA", "Yes", "No"]
					"default": "No"  
				},
				"fnb_comment": {
					"type": "string",
					"description": "free text to complete manuelly the lymph node FNA information and possible difficulties" 
				}
			}
		}
		"Conclusion": {
			"type": "string",
			"description": "Free text to describe main abnormalities"
		},
		"Guidance": {
			"type": "string",
			"description": "free text to manuelly describe physician guidance of the exam"
		},
		"Conclusion_validation": {
			"type": "boolean",
			"description": "The physician must validate the automatically generated conclusion, after manual modification if required",
			"default": false
		}
}	
