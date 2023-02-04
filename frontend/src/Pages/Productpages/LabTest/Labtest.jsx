import React from 'react'
import "./Labtest.css"
import {Navbar} from "../../../Components/Navbar/Navbar"
import {Fotter} from "../../../Components/Fotter/Fotter"
import { LabCard } from '../../../Components/Labtest/LabCard'


export const Labtest = () => {
    const data=[
        {
          "name": "Cardiac Risk Markers",
          "price": 300,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Plane",
          "desc": "Cardiac Risk Markers Profile estimates the levels of cardiac risk markers in the body, which help in evaluating the functioning of the heart. The test also evaluates lipids in the body, abnormal levels of which can lead to heart attacks or other severe heart conditions. The Cardiac Risk Markers Profile is helpful to individuals who have a family history of cardiac disease or where there is an increase in the prevalence of cardiac disease at a young age. Early diagnosis of cardiac disorder can help in the overall prognosis.",
          "other": [
            "APO B/ APO A1 RATIO",
            "Apolipoprotein A-1",
            "Apolipoprotein B",
            "Lipoprotein (A)",
            "High Sensitivity C-Reactive Protein (hs-CRP)"
          ]
        },
        {
          "name": "C-Reactive Protein - Quantitative (CRP)",
          "price": 375,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Serum",
          "desc": "A C-reactive Protein Test measures the level of CRP (produced by the liver) in your blood. CRP test helps monitor health issues linked to the inflammatory process that may be associated with infections, autoimmune conditions (lupus, rheumatoid arthritis, etc.), and long-term effects of smoking. It can help your doctor understand the severity of the disease and monitor ongoing therapy's effectiveness. Individuals can take this test as recommended by the doctor."
        },
        {
          "name": "HbA1c (Glycosylated Hemoglobin)",
          "price": 399,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Edta",
          "other": ["Average Blood Glucose", "HbA1c (Glycosylated Hemoglobin)"],
          "desc": "The HbA1c Profile, also known as Glycosylated Hemoglobin, also called Glycated Hemoglobin or Hemoglobin A1c, helps with the screening, diagnosis and monitoring of diabetes or prediabetes in adults. It enables you to identify if you are on the edge of developing diabetes. If you already have diabetes mellitus, the HbA1C test results help monitor your blood sugar levels."
        },
        {
          "name": "Thyroid Profile (T3, T4, UTSH)",
          "price": 399,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Plain",
          "other": [
            "Triiodothyronine (T3)",
            "Thyroxine (T4)",
            "Thyroid Stimulating Hormone - Ultrasensitive (UTSH)"
          ],
          "desc": "The Thyroid Profile Test can help with the diagnosis of a thyroid disorder. It is also helpful in monitoring the effectiveness of treatment for people who are already diagnosed with thyroid-related diseases such as Hypothyroidism, Hyperthyroidism etc. The test measures three important parameters - Total T3, Total T4, and Serum TSH levels. T3 and T4 hormones regulate the body's metabolism and growth, whereas UTSH helps control the secretions of the thyroid gland. Problems like hair loss, dry skin, unexplained weight gain or loss, mood swings, muscle cramps, lassitude, depression or anxiety, constipation, menstrual irregularities and unexplained weakness are often associated with an underlying thyroid disorder."
        },
        {
          "name": "Rheumatoid Factor (RA) - Quantitative",
          "price": 499,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Plain",
          "desc":"The Rheumatoid Factor (RA) quantitative test helps to detect the levels of rheumatoid factor in the blood and to diagnose the presence of an autoimmune disease such as Rheumatoid Arthritis. A healthy immune system is vital to the functioning of the human body. The immune system protects the body against disease-causing microorganisms. However, immune deficiency diseases decrease the body’s ability to fight invaders, causing vulnerability to infections. In response to an unknown trigger, the immune system may begin producing antibodies that, instead of fighting infections, attack the body's tissues. One such autoimmune disease is Rheumatoid Arthritis. It is caused by the presence of the rheumatoid factor, which is an autoantibody produced by the immune system. Rheumatoid Arthritis is a systemic autoimmune disease that is chronic (for a long time). It causes inflammation, stiffness, pain and gradually causes permanent joint damage. Usually, it occurs after the age of 40 years. Women are more prone to be affected by it as compared to men. A doctor may recommend the Rheumatoid Factor (RA) quantitative test if a patient is showing symptoms of Rheumatoid Arthritis. RA quantitative test detects the level of rheumatoid factor in the blood, which aids in diagnosing autoimmune diseases such as Rheumatoid Arthritis. If the X-ray of the patient shows swelling in the joint capsules along with the loss of cartilage and bone, an RF test is advised. The results of a rheumatoid factor quantitative test are based on a blood sample"
        },
        {
          "name": "Anti Cyclic Citrullinated Peptide Antibody (Anti CCP)",
          "price": 999,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Serum",
          "desc":"Anti-CCP antibody is an immunological test. It detects the presence of antibodies against the cyclic citrullinated peptide (CCP) in the body. These antibodies are present in people who have rheumatoid arthritis. The Anti-CCP antibody test is a blood test that ascertains the presence of antibodies directed against the cyclic citrullinated peptide (CCP) in the body. The CCP antibodies are present in the blood of people with rheumatoid arthritis. The Anti-CCP antibody test is highly accurate and can diagnose rheumatoid arthritis at an early stage, sometimes even years before the development of any signs or symptoms."
        },
        {
          "name": "Free Thyroid Profile",
          "price": 400,
          "smaple type": "Blood",
          "Fasting require": "flase",
          "tube type ": "Plain",
          "other":["Free Triiodothyronine (FT3)","Free Thyroxine (FT4)","Thyroid Stimulating Hormone - Ultrasensitive (UTSH)"],
          "des":"The Free Thyroid Profile includes blood tests that evaluate the functioning of the thyroid gland. It can detect disorders of the thyroid gland. Free Thyroid Profile is a group of tests that measures thyroid hormone levels in their free form. It primarily measures the level of three hormones - Serum TSH levels, Free T3 and Free T4. The free thyroid profile results can give a clear indication of how efficiently the thyroid gland performs."
        },
        {
          "name": "Complete Blood Count / Hemogram (CBC)",
          "price": 300
        },
        {
          "name": "C Peptide",
          "price": 849
        },
        {
          "name": "Erythrocyte Sedimentation Rate (ESR)",
          "price": 249
        },
        {
          "name": "Progesterone",
          "price": 450
        },
        {
          "name": "Prolactin",
          "price": 475
        },
        {
          "name": "Lithium",
          "price": 375
        },
        {
          "name": "Potassium (K+)",
          "price": 200
        },
        {
          "name": "Protein creatinine ratio (Urine)",
          "price": 160
        },
        {
          "name": "Proteins",
          "price": 160
        },
        {
          "name": "Rubella - IgG",
          "price": 300
        },
        {
          "name": "Testosterone",
          "price": 300
        },
        {
          "name": "Thyroid Stimulating Hormone (TSH)",
          "price": 200
        },
        {
          "name": "Serum Sodium (Na)",
          "price": 199
        },
        {
          "name": "Vitamin B12",
          "price": 549
        },
        {
          "name": "High Sensitivity C-Reactive Protein (hs-CRP)",
          "price": 375
        },
        {
          "name": "Insulin Post Prandial (PP)",
          "price": 320
        },
        {
          "name": "Anti Thyroglobulin Antibody",
          "price": 849
        },
        {
          "name": "Homocysteine",
          "price": 799
        },
        {
          "name": "Tissue Tranglutaminase - IgA",
          "price": 600
        },
        {
          "name": "Alanine Transaminase (SGPT / ALT)",
          "price": 200
        },
        {
          "name": "Complement (C3)",
          "price": 450
        },
        {
            "name": "Complement (C4)",
          "price": 450
        },
        {
            "name": "HCV Antibody",
          "price": 575
        },
        {
            "name": "Malarial Antigen Test",
          "price": 360
        },
        {
            "name": "Varicella Zoster IgG",
          "price": 560
        },
        {
            "name": "Helicobacter Pylori - IgG",
          "price": 895
        },
        {
            "name": "Serum Zinc",
          "price": 999
        },
        {
            "name": "ASO - Qualitative",
          "price": 799
        },
        {
            "name": "Hepatitis B Virus (HBV) Qualitative PCR",
          "price": 2000
        },
        {
            "name": "Covid IgG Antibody Test",
          "price": 300
        },
        {
            "name": "Measles Antibody - IgG",
          "price": 480
        },
        {
            "name": "Mumps Antibody - IgG",
          "price": 480
        }
      ]
  return (
    <>
    <Navbar/>
     <h1 className='Labtestheading'>Lab Tests</h1>
     <div className='Selectlocbox'>
 Book your lab tests 
     </div>
     <h1 className='subhelat'>All Test</h1>
    <div className='alltests'>
    {data.map((el, index) => {
            return <LabCard key={index} elem={el} />;
          })}
      
    </div>
    <Fotter/>
    </>
    
  )
}
