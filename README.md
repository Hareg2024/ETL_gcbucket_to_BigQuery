# ETL_gcbucket_to_BigQuery
Simple ways to load data from local file to gc bucket then to BigQuery for further analysis using Python and Looker within BigQuery 

This repository contains code and configuration files for Google Cloud automation of data transfer from local file, Google Cloud Storage to BigQuery and Trigger Dataflow Job using Cloud Function
This document deals with loading data from simple csv file from google cloud storage to BigQuery
# ETL Steps with Google cloud dataflow 
1. Create a storage bucket where the metafiles and source files to land
2. Create an empty table (target table) in bigQuery where the file need be loaded for futher analysis
3. Create the table schema in Jason and Javascript and upload it to storage bucket metafile.This file will be used to create the data flow
4. In google cloud console search for job. Use on of the option from the tab. Both 'create job from template' or 'Create job from builder' are easy way to get the final result.
   
![image](https://github.com/user-attachments/assets/bffab0ec-49f6-40d5-808e-6afc258e6bcf)

6. Verify the table loaded in bigQuery. Similary we can load data from different sources depending on the permission level.
![image](https://github.com/user-attachments/assets/654d8cdd-570a-4d9a-bba0-aafb82ebe859)


