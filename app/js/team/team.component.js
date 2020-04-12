var config = {
    responseType: 'json'
}

angular.
    module('team').
    component('team', {
        templateUrl: 'js/team/team.template.html',
        controller: ['$http', function PhoneListController($http) {
          var self = this;
          $http.get('js/data/providers.json').then(function(response){
            console.log("respons", response.data);
            self.team = response.data.resolver;
          })
        }]

            // this.team = [
            //   {
            //     index: 0,
            //     name: 'Monica Perlman, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Those are the terms that define Monica Perlman, M.D. In fact, that is why she formed Perlman Clinic in 2005. Dr. Perlman wanted to have the time necessary to care for her patients and to advocate for them with other medical providers. She is also deeply committed to preventive care and healthy lifestyles. And, remarkably, she practices what she preaches. When you meet Dr. Perlman, you will immediately be impressed by her energy and caring demeanor.Dr. Perlman was born in Mexico City, Mexico and moved to the United States at the age of 16. She is fluent in Spanish and provides care for numerous patients who come from Mexico to visit her. Dr. Perlman attended Medical School at the University of California, Irvine. She completed her Internship at Scripps Clinic and Research Foundation and her Residency at the University of California, San Diego. Dr. Perlman has lifetime Board Certification in Preventive Medicine and Public Health. She also has a Masters Degree in Public Health with an emphasis in Occupational Medicine. During her career at Scripps Clinic, she also served as Director of Primary Care and as the head of Occupational Medicine and Employee Health. Dr. Perlman is a Voluntary Assistant Professor in the Department of Medicine at the University of California, San Diego.Years In Practice: 24 YearsSpecialties: Internal Medicine and Preventive MedicineShe cares for patients at the Perlman Clinic locations in Downtown La Jolla, Carlsbad, Downtown San Diego, Chula Vista, La Jolla, Clairemont, Kensington & Hillcrest.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/PC_provider9.jpg'
            //   },
            //   {
            //     index: 1,
            //     name: 'Stephen Caso PA-C',
            //     bio: '“PA, Friend, Advocate”Stephen Caso, PA-C joined Perlman Clinic in 2011. He studied Kinesiology at Temple University in Philadelphia and graduated with a Master of Medical Science – Physician Assistant Studies from Salus University in 2010. Stephen enjoys treating patients and will always be your “advocate”. Approachable and easy mannered, Stephen takes the time, and makes the effort, to hear his patients.Stephen primarily treats patients at the La Jolla clinic',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/PC_provider3.jpg'
            //   },
            //   {
            //     index: 2,
            //     name: 'Jamie Switzer DO',
            //     bio: '“Doctor, Friend, Advocate”Dr. Switzer joined Perlman Clinic in 2011. Caring and enthusiastic, she is every patient’s friend and advocate, and every health care provider’s teammate. That is why she has been a perfect fit at Perlman Clinic.Dr. Switzer is Board Certified in Family Practice. She studied biology as an undergraduate at the University of California, Santa Barbara and received her Doctor of Osteopathy from Kirksville College of Osteopathic Medicine in 1989.Dr. Switzer has a very active life outside of Perlman Clinic. She and her husband, George, have two daughters and they make sure they have time for their family. Dr. Switzer appreciates the flexible hours and longer patient visits afforded to her by Perlman Clinic. She provides excellent patient care, and, at the same time, she still has plenty of time and energy to enjoy her family and friends.Specialty: Family Practice',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Switzer500.jpg'
            //   },
            //   {
            //     index: 3,
            //     name: 'Emily Ence PA-C',
            //     bio: '“PA, Friend, Advocate”Emily Ence, PA-C trained at Baylor College of Medicine in Houston, Texas where she graduated at the top of her class in 2011. She worked in women’s health in Houston prior to moving to San Diego. She likes to focus on prevention and lifestyle changes. When not seeing patients she enjoys attempting to surf and taking her baby to the San Diego zoo. Emily shares her love for medicine and patient care with her husband, who is an emergency room physician. Emily is outgoing and welcoming and patients enjoy spending time with her. She is a highly valued member of the Perlman Clinic team.Emily treats patients at the Hillcrest clinic.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/PC_provider4.jpg'
            //   },
            //   {
            //     index: 4,
            //     name: 'Edward Brantz, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Edward Brantz, M.D. has been called “old fashioned” because he takes his time listening and treats the whole patient. Dr. Brantz is a practitioner with caring values and a sincere approach to helping the patient achieve optimal health. His specialty is Family Medicine. Patients benefit from his many years of experience, expertise and knowledge from assisting in surgeries. Knowing his patients helps Dr. Brantz be their health care “advocate”. When you meet Dr. Brantz, you’ll quickly learn why he is every patient’s friend.With a life long passion for medicine, Dr. Brantz enjoys keeping up with medical innovations and literature and regularly attends continuing medical education seminars, classes, conferences and forums. As a native San Diegan, Dr. Brantz spends his free time bicycling, reading and attending family gatherings.Dr. Brantz is a perfect fit with Perlman Clinic. As a valued new addition to our team, Edward Brantz, M.D. has a record of patient care that is the model for all Perlman Clinic health care providers.Medical School: Autonomous University of Guadalajara (Mexico)Internship: Hahnemann UniversityFamily Practice Residency: Hahnemann UniversityYears in Practice: Over 30 yearsDr. Brantz primarily treats patients at the Clairemont primary and urgent care clinic',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/PC_provider2.jpg'
            //   },
            //   {
            //     index: 5,
            //     name: 'Ilan Kuperman, M.D.',
            //     bio: 'Dr. Kuperman provides integrative medicine to the Perlman Clinic scope of services. Dr. Kuperman is committed to providing superior quality medical care. He listens closely, is compassionate, and tries to find the root causes and factors to patients’ problems. He looks forward to being an active partner with his patients in their quest for health and wellness. He has helped patients resolve a wide range of conditions by combining his knowledge of both conventional and complementary medicine.Dr. Kuperman graduated Magna Cum Laude from Rice University and earned his medical degree from Baylor College of Medicine. He completed his residency at the Memorial Family Practice Residency Program, where he received awards for outstanding teaching and patient care.Dr. Kuperman participates in numerous formal and informal integrative medicine activities pertaining to hormones, cardiovascular health and the nervous system – and incorporates personalized recommendations on diet, lifestyle, mindfulness and supplements with patients who are interested in this type of approach.One of Dr. Kuperman’s favorite activities is hiking outdoors, and he and his wife are often discovering San Diego’s beautiful nature spots.Languages: English, SpanishDr. Kuperman primarily treats patients at the La Jolla Clinic',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Ilan-Kuperman-Final-500-by-500.jpg'
            //   },
            //   {
            //     index: 6,
            //     name: 'Lauren Campagna PA-C',
            //     bio: '“PA, Friend, Advocate”Lauren Campagna, PA-C studied human biology as an undergraduate at University at Albany, which is where she developed her love of medicine as a volunteer on the campus ambulance. She received her master’s degree in physician assistant studies from Upstate Medical University in Syracuse, NY. As a practicing provider, she approaches each patient with an open ear and caring demeanor. Lauren strives to promote wellness among her patients through education, communication and empowerment.Outside of Perlman Clinic, Lauren is actively involved in multiple medical associations at the national, state and local level. She enjoys attending regular medical seminars and conferences. In her free time, Lauren enjoys horseback riding and hiking. She hopes to one day hike all 46 high peaks in the Adirondack State Park.Lauren primarily treats patients at the La Jolla and Downtown San Diego clinic.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/fp_milestone-create-1384638-1.jpg'
            //   },
            //   {
            //     index: 7,
            //     name: 'Christyanne Maxson, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Maxson is deeply committed to full service care. She specializes in adolescent care,women’s health and young families. She is very happy to join Perlman Clinic which affords her the time necessary to provide true quality care for the entire family – Preventative, Integrative Medicine, and healthy lifestyles. When you meet Dr. Maxson you will be impressed by her ease of conversation, caring, and ability to get to the root of the problem.Dr. Maxson hails from British Columbia Canada. She graduated with her Bachelor of Science and her Doctorate of Medicine Degrees from The University of British Columbia. She interned at a small hospital in Regina Saskatchewan where there were no residents and she had the primary responsibility for patients that one would normally get as a senior resident. She went on to practice across Canada as a Locum Tenens (even for a time as a Cruise Ship Doctor), then settled down in Vancouver in Private Practice and Public Health where she worked for 10 years. She loved delivering babies, caring for the entire family, and seeing them grow up and thrive.In her spare time, she loves Gardening, anything to do with horses, Skiing and Scuba Diving.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/ChristyanneMaxsonPhoto.jpg'
            //   },
            //   {
            //     index: 8,
            //     name: 'Jessica Sarder PA-C',
            //     bio: 'Bio Coming Soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/JessicaSarderPhoto.jpg'
            //   },
            //   {
            //     index: 9,
            //     name: 'William Buchner, M.D.',
            //     bio: 'Dr. William Buchner grew up in Northern Michigan on a large family run dairy farm. He was involved in leadership roles in multiple student organizations and graduated valedictorian of his high-school class.He attended Michigan Technological University and studied Biology and Chemistry with an emphasis on education. He was the president of MTU’s Film Board and tutor at the Chemistry Learning Center. While attending college, he volunteered at the community hospital and worked as a pharmacy technician.After graduating Summa Cum Lade, he taught high school science at Lakeview High School for 2 years. He gave presentations at in-service meetings about new philosophies in grading and evaluating students.Dr. Buchner then attended Wayne State University’s School of Medicine in Detroit, Michigan. WSU is America’s largest single campus medical school. While studying, he participated in an extracurricular program called HuMed which focused on alternative medical practices to heal and comfort patients in ways that are not typically taught in Western Medicine.Dr. Buchner was matched to his 1st choice Family Medicine Residency Program at UCSD in 2008. He did additional elective rotations in dermatology and HIV care. After completing residency and attaining Board Certification in Family Medicine, he worked at Sharp Rees-Stealy Medical Group for four years. During this time, he did continuing education in the fields of HIV management, dermatology and hormone replacement to help better serve the patient’s he cared for.Dr. Buchner is an active member in the American Academy of Anti-Aging medicine. He offers his patients a comprehensive approach to chronic conditions and preventative care utilizing a full spectrum of vitamins, bio-identical hormones, supplements, and appropriate pharmaceuticals treatments. He utilizes multiple cutting edge laboratory services to evaluate hormones and advanced bio-markers in order to identify sub-optimal levels which help guide his medical recommendations.Putting his past experiences together and desire to offer his patients a holistic, comprehensive and personalized approach to care, he teamed up with Perlman Clinic to a new standard in healthcare for patients seeking results and exceptional services.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Dr.-Buchner-Main.jpg'
            //   },
            //   {
            //     index: 10,
            //     name: 'Julie Hoffman PA-C',
            //     bio: '“PA, Friend, Advocate”Julie Hoffman, PA-C is a board certified Physician Assistant. She received a Bachelor of Science in Exercise Science with a minor in Psychology from Florida State University. She then completed her Physician Assistant Studies at the Medical University of South Carolina where she graduated with honors in 2015. Prior to joining Perlman Clinic she worked as a Pediatric Physician Assistant in South Carolina for two years. She has a passion for preventative medicine, lifestyle changes, and patient education. She is currently a member of the American Academy of Physician Assistants, the San Diego Society of Physician Assistants, and the American Telemedicine Association.Julie has participated in multiple medical mission trips and enjoys traveling as much as possible. She spends her free time hiking, exercising, and enjoys spending time outdoors.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/JulieHoffmanPhoto.jpg'
            //   },
            //   {
            //     index: 11,
            //     name: 'Seymour Myers, M.D.',
            //     bio: 'Dr. Seymour Myers, M.D.,completed medical school at The University of Toronto in Ontario, Canada in 1966. Since then in addition to serving as a primary care physician in his own practice for over 30 years, he has participated in multiple clinical studies and has been an active member of UC San Diego’s Academic Enrichment Health Professions Mentor Program since 1994. Dr. Myers specializes in family medicine and takes a special interest in end of life planning and hospice care. Patients and families come first to Dr. Myers. He believes it is his job to provide excellent care to his patients to make their lives more comfortable. With over 50 years experience, his easygoing manner puts patients’ and family members at ease. In his free time, Dr. Myers can be found enjoying everything that the North County has to offer with his wife and their dog. ',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/dr-3-perlman-clinic.jpg'
            //   },
            //   {
            //     index: 12,
            //     name: 'Sarah Pierce FNP-C',
            //     bio: '“FNP, Friend, Advocate”Sarah Pierce is a nationally certified Family Nurse Practitioner committed to providing high quality patient care grounded in evidence-based practice. She was awarded graduate with the highest GPA from her Masters of Science in Nursing from Azusa Pacific University. She also attended UC Davis to attain her undergraduate degree in Nutrition while being part of UC Davis women’s crew team. Sarah’s goal is to help others achieve active healthy lifestyles.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Sarah-Pierce.jpg'
            //   },
            //   {
            //     index: 13,
            //     name: 'Susan Taylor, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Taylor grew up in San Diego, and attended UCSD receiving a Bachelor’s degree in Chemistry. She was awarded her Doctor of Medicine degree from UC Irvine School of Medicine. She completed a 3-year residency program in Family Medicine at San Pedro Peninsula Hospital and is Board Certified in Family Medicine.She spent 7 years in Diamond Bar in private practice and had 2 sons. She then moved with her family to a small city in Tennessee, Oak Ridge. There she practiced in both a community clinic setting and in private practice for 23 years, providing care in an underserved area.Dr. Taylor is a diplomate of the American Academy of Family Medicine, and a member of the American Medical Women’s Association.She is very happy to have returned to her home town of San Diego to be closer to her family, including her now grown sons. Perlman Clinic is a perfect fit, allowing her to provide a medical home to patients who are looking for compassionate and comprehensive care. “Everyone needs a ‘medical home’ where they can discuss any health concerns, and have a partner in staying healthy and navigating the complex world of modern medicine.”Dr. Taylor enjoys music, nature, and raising her dachshund.Years in practice: 30',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Susan-Taylor-MD-Main-Jessica.jpg'
            //   },
            //   {
            //     index: 14,
            //     name: 'Nicholas Canelo, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Canelo is a dedicated Primary Care Physician with a comprehensive and holistic approach to care. He is known by his colleagues and patients for providing outpatient care at a high level of detail and complexity, as well as for his curiosity, positivity, and enthusiasm. He believes in the healing potential of lifestyle interventions and evidence-based alternative medicine.Dr. Canelo was born and raised in Montclair, New Jersey. He is a graduate of Brown University where he completed the Program in Liberal Medical Education (PLME), a highly competitive eight-year track that combines undergraduate education and medical school. During his time at Brown, he majored in Anthropology and began exploring the field of Integrative Medicine.He matched into his first choice residency program at the University of California, San Diego (UCSD) Family Medicine Residency Program. While at UCSD, he completed additional training in Integrative Medicine and received the prestigious Resident Teacher Award. Dr. Canelo earned his board certification in Family Medicine in 2018.Outside of practicing medicine, Dr. Canelo sings and plays acoustic and electric guitar, 12-string guitar, ukulele, and piano. He enjoys skiing, running, and travel. He loves plant-based cooking and trips to the beach with his partner Elena and French Bulldog Yoda.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Canelo500x500-1-1.jpg'
            //   },
            //   {
            //     index: 15,
            //     name: 'Anna Stern, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Stern is extremely compassionate and a strong advocate in ensuring patients receive the health care they need. She specializes in providing medical care and preventive services to adults 18 years and older. She recently returned to San Diego from Oregon, where she worked as Medical Director of a Health Insurance Plan, overseeing benefits provided to enrollees including making exceptions when merited as well as designing and implementing programs to improve the health of communities. Having experienced the challenges of medical care as a patient and family member of patients with rare and serious conditions, providing direct patient care for complicated patients, and as a Medical Director for a Health Plan, Dr. Stern has unique insight and skills as a patient advocate in the care she provides.Dr. Stern earned her Doctorate of Medicine at University of California, San Diego. She completed her Internship in Internal Medicine at Santa Barbara Cottage Hospital and her Residency in Preventive Medicine at University of California, San Diego. Dr. Stern is Board Certified in Public Health and Preventive Medicine. She also has a Master’s in Public Health from San Diego State University and a Master’s of Business Administration from the Wharton School.When not working, Dr. Stern together with her husband and young daughter, enjoy spending quality time with their extended family and enjoying all that San Diego has to offer – the beautiful beaches, arts, sports, and athletic activities.Dr. Stern primarily treats patients at the La Jolla location.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/annastern-jessica.jpg'
            //   },
            //   {
            //     index: 16,
            //     name: 'Stephanie Klein PA-C',
            //     bio: 'Stephanie Klein, PA-C studied communication as an undergraduate at UC Santa Barbara and discovered her passion for medicine and healthcare while working in a mental health practice. She earned a dual Masters in Physician Assistant Studies and Public Health at Touro University of California. Stephanie says she is excited to be a part of Perlman Clinic because she appreciates the focus on personalized care and spending time with patients that is integral to the Perlman Clinic culture. Stephanie is committed to providing the best care possible.Stephanie grew up in Wisconsin and visits her family there often. She loves living in California because of the gorgeous year-round weather. When away from work, Stephanie likes to spend time outdoors and enjoys exercising, hiking with her dogs or going to the beach.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/StephanieKleinPHOTO-1.jpg'
            //   },
            //   {
            //     index: 17,
            //     name: 'Yuliya Yartseva FNP-C',
            //     bio: '“FNP, Friend, Advocate”Yuliya Yartseva is a nationally certified Family Nurse Practitioner. She graduated Summa Cum Laude with a Master of Science in Nursing from George Washington University. Yuliya strives to build relationships with her patients through active listening and patient education. With a focus on preventive care and patient-centered medicine, she encourages patients to lead a healthy lifestyle. Yuliya is fluent in both Russian and English. She is a member of American Association of Nurse Practitioners, California Association of Nurse Practitioners and Sigma Theta Tau International Nursing Honor Society.Originally from Virginia, Yuliya enjoys exploring California with her two French Bulldogs, Lola and Morty.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Yuliya-PA-C-1.jpg'
            //   },
            //   {
            //     index: 18,
            //     name: 'Brenna Memole AGNP-C',
            //     bio: '“AGNP, Friend, Advocate”Brenna Memole has held a keen interest in health and medicine since early high school. She pursued a Bachelor’s degree in Nutritional Physiology and Metabolism at UC Berkeley and went on to work as a Nutritional Specialist on a college campus, as well as a Nutritional Instructor in a women’s rehabilitation home. Thereafter she studied at Columbia University and received a Master’s in Nursing – Adult Gerontology, graduating with honors. Brenna is personally dedicated to a very active and healthy lifestyle and enjoys engaging her patients in positive and beneficial changes to best suit their individual health needs. Her personal interests also include vegetarian cooking, running, hiking, and traveling. Brenna has visited over 20 countries and enjoys learning about other cultures and types of medicine.Brenna primarily treats patients out of the La Jolla Clinic.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/BrennaMemole.jpg'
            //   },
            //   {
            //     index: 19,
            //     name: 'Alonso Chan PA-C',
            //     bio: '“PA, Friend, Advocate”Alonso Chan is a Certified Physician Assistant with extensive experience in Family Medicine and Physical Therapy. He is a graduate of the Riverside County College Physician Assistant program. His background includes Emergency Medicine, Pediatrics, Internal Medicine, Women’s Health, Orthopedics, Mental Health, and Family Practice. He is a member of the California Academy of Physician Assistants (CAPA) and the American Academy of Physician Assistants (AAPA). Alonso sees patients of all ages.Alonso loves learning about world history, politics, and documentaries. He used to have his own band where he was the singer-songwriter for some 10 plus years, so he loves making music, playing the guitar, and attending art and music related events. He loves the outdoors, traveling, exploring, and riding around on his motorcycle.Languages: English, Spanish.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/AlonsoChan.jpg'
            //   },
            //   {
            //     index: 20,
            //     name: 'Kelly Snowden PA-C',
            //     bio: '“PA, Friend, Advocate”Kelly Snowden, PA-C studied Human Health Sciences as an undergraduate at the University at Kentucky. During her undergraduate years, she developed a passion for medicine while working as an Emergency Room technician in a Level One Trauma Center and participating in medical mission trips around the globe. She then completed her Physician Assistant Studies at Jefferson University in Philadelphia where she graduated with honors in 2018. Kelly has a passion for preventative medicine and she strives to promote wellness among her patients through education and open communication.Kelly has a very active lifestyle and enjoys traveling as much as possible. She spends her free time exercising, hiking, and spending time at the beach. Her future goals are to continue participating in medical missions as a board certified Physician Assistant.Kelly primarily treats patients at the Downtown La Jolla Clinic.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/KellySnowden.jpg'
            //   },
            //   {
            //     index: 21,
            //     name: 'Carly Babis PA-C',
            //     bio: '“PA, Friend, Advocate”Carly Babis, PA-C graduated from the University of Arizona with a Bachelor of Science in Psychology; She then went on to receive her Masters degree in Physician Assistant Studies at Arcadia University in Philadelphia, PA. Carly values trusting, long lasting relationships with her patients and playing an active role in their overall health and well being. Originally from Tucson, Arizona, Carly loves spending her free time by the ocean and exploring new parts of San Diego.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/CarlyBabisMain.jpg'
            //   },
            //   {
            //     index: 22,
            //     name: 'Emilia Parrott DO',
            //     bio: '“Doctor, Friend, Advocate”Dr. Emilia Parrott, D.O., received her Doctor of Osteopathic Medicine from the Western University of Health Sciences in Pomona, California. She went on to complete her residency in family medicine in Tacoma, Washington where she was honored as the Chief Resident. Dr. Parrott understands that communication and interpersonal skills are critical for promoting successful physician-patient relationships. Through active listening and promoting patient-centered communication she is able to strives to provide the best possible care for patients. She takes a special interest in urgent care, women’s health, obstetrics, pediatrics, dermatological conditions, outpatient procedures, transgender medicine, HIV primary care and community health medicine. ',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/DrParrott.jpg'
            //   },
            //   {
            //     index: 23,
            //     name: 'Mona Ezzat, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Ezzat is a board-certified family physician with board certification in Integrative and Holistic medicine. She completed medical school at Rush Medical College in Chicago, Illinois. After graduating medical school, she completed her internship and residency at the University of Michigan in Ann Arbor, Michigan. She has a history of working in a setting on an integrative team and with naturopathic physicians to provide holistic primary care and functional medicine.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/DrEzzat500by500.jpg'
            //   },
            //   {
            //     index: 24,
            //     name: 'Erinn Case FNP-C',
            //     bio: 'Bio Coming Soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/ErinnCase500x500.jpg'
            //   },
            //   {
            //     index: 25,
            //     name: 'Brooke Myrberg PA-C',
            //     bio: '“PA, Friend, Advocate”Brooke Myrberg PA-C is a California-licensed and nationally board certified Physician Assistant. Brooke was raised in Emmaus, Pennsylvania. She completed her Bachelors in Science with a major in biology and minor in chemistry at Florida Southern College, where she graduated summa cum laude. During her undergraduate career she volunteered at a Medical clinic for the uninsured and served as president of the Biological National Honor Society, along with maintaining and earning membership into multiple other medical and honor societies. After graduating she went on to further her medical experience by volunteering in Lehigh Valley Hospital’s PACU and at an assisted living facility, as well as working on a medical surgical unit. She then earned her Master of Medical Science graduate degree and completed the Physician Assistant program at Nova Southeastern University in Fort Lauderdale, Florida, during which time she also went on a medical mission trip to Peru. With the desire to experience the east coast lifestyle she moved to California, where she briefly worked in family medicine locum tenens positions while residing in LA, before re-locating to San Diego to join the Perlman Clinic team!With a drive for preventative medicine and patient education, she enjoys connecting with patients on a level that allows them to feel comfortable and motivated to take part in their own health and medical decisions.In her free time Brooke enjoys an active lifestyle including jogging, hot yoga, HIIT, and weight lifting. She also greatly enjoys being outdoors, hiking, hanging out at the beach, traveling, and exploring all that San Diego has to offer!Locations: Hillcrest and Kensington',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/BrookeMyrberg500x500.jpg'
            //   },
            //   {
            //     index: 26,
            //     name: 'Puneet Bhalrhu, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Bhalrhu grew up in Northridge, California.  She is board certified in Family Medicine.  She went to medical school in Poland where she attended the Medical University of Lublin.  While she was in medical school, she was fortunate to take a few days here and there traveling as much of Europe as she possibly could.  After graduating medical school, she did her residency in Family Medicine at Central Michigan University.  After completion of residency, she worked as a hospitalist in a teaching hospital in Michigan, Covenant Healthcare.  As attending physician, her responsibilities included teaching medical students and residents.  Returning to California had always been in her plan, specifically living in San Diego.  She enjoys working with primary care and urgent care patients in the Hillcrest and downtown locations.  In her spare time, she enjoys golfing, watching football, cooking and wine tasting. ',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/PuneetBhalrhu-1024x1024.jpg'
            //   },
            //   {
            //     index: 27,
            //     name: 'Philippa Rai PA-C',
            //     bio: '“PA, Friend, Advocate”Philippa “Pippa” Rai, PA-C, is a board certified Physician Assistant. She received a Bachelor of Arts in Human Development at the University of California, San Diego. She then attended Southern California University of Health Sciences’ Physician Assistant program, where she was the Public Relations Representative of her class. Pippa completed her Master’s degree in Physician Assistant Studies and graduated with honors in 2018. She has a passion for women’s health, preventative medicine, and mental health. Pippa also has a special interest in in-office based procedures.Pippa is currently a member of San Diego Society of Physician Assistants. In her free time she enjoys hiking, acrylic painting, and traveling as much as possible.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Pippa500by500-1024x1024.jpg'
            //   },
            //   {
            //     index: 28,
            //     name: 'Kelsey Brangoccio PA-C',
            //     bio: '“PA, Friend, Advocate”Kelsey Brangoccio graduated from Montana State University in 2015 with a Bachelor’s degree in Health and Human Performance with a focus in Exercise Science. During college she had a variety of experiences working in cardiopulmonary rehab, physical therapy, and working with elderly at an assisted living facility. She then attended Thomas Jefferson University in Philadelphia, PA where she received a Master’s degree in Physician Assistant Studies in 2017. During school she served as President of her PA program where she helped lead volunteer opportunities such as serving at a local soup kitchen.After school she worked at a family medicine clinic in Grants Pass, Oregon. During her time there she also volunteered at the homeless shelter on the weekend to provide medical care to underserved men, women, and children. She then moved to San Diego where she worked at an internal medicine clinic. Kelsey is happy to be a part of Perlman Clinic and can’t wait to meet you and help you reach your health goals.Kelsey focuses on preventive health and using a multimodal approach in reaching patients’ goals. She encourages patients to take control of their health and be involved in the decision making process. She emphasizes lifestyle modifications including a healthy diet, physical activity, smoking cessation, stress reduction, and emotional wellbeing.Kelsey enjoys an active life, spending time with family and friends, and traveling. She spends her free time playing soccer, training jiu-jitsu, going to the beach and playing with her dog Stanley.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Kelsey500x500-1024x1024.jpg'
            //   },
            //   {
            //     index: 29,
            //     name: 'Rhodaline Tootell, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Tootell joined the Perlman Clinic in 2019 after moving to California from northern Virginia. She graduated from the University of Virginia, then completed her Masters Degree in Physiology as well as her Medical Degree at the Medical College of Virginia (now the VCU School of Medicine) in 2004. She then completed her Family Medicine Residency at Christiana Care Hospital in Wilmington, Delaware. In 2007, she moved back to northern Virginia and joined a private practice in Loudoun County where she maintained a busy family practice for 11 years, often caring for entire extended families in the community. She enjoyed writing medical articles for the local newspaper during this time, and served as the Physician Practice Leader after her practice joined a large, multi-specialty group in 2014. By practicing for over 10 years in the community where she lived, she learned the value of forming strong relationships with her patients to best effect changes in their health. She has particular interests in preventive medicine, chronic medical care management, pediatrics and women’s health but enjoys all aspects of general medicine. As a new addition to the Perlman Clinic, she embraces the practice mission of spending time listening and understanding each patient’s concerns with the goal of achieving and advocating for their best health.Dr. Tootell, her husband and four children fell in love with San Diego on a spring break trip in March 2018 and a few months later, made the leap to move to here. They are enjoying getting to know their new community and surroundings – particularly the beaches, parks, coffee shops and restaurants! Dr. Tootell enjoys the outdoors, running, cycling, cooking and spending time with her family, especially at the beach and at their various sports activities.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/RhodalineTootell500x500MAIN.jpg'
            //   },
            //   {
            //     index: 30,
            //     name: 'Kenneth Ortiz, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr Kenneth Ortiz grew up on the island of Oahu, Hawaii. He is a board-certified family medicine and aesthetic medicine physician in San Diego, California. Prior to joining Perlman Clinic, Inc., Dr Ortiz worked with Northwest Permanente Group in Portland, Oregon, and at a Native American clinic in East San Diego.Dr Ortiz earned his BS in Food Science and Human Nutrition from the University of Hawaii at Manoa. Before becoming a physician, he worked as an instructor/program coordinator with the State of Hawaii Dept of Education, and a child nutritionist for the Office of Hawaii Child Nutrition Programs and the US Army in Hawaii. Following his graduation from the University of Hawaii John A. Burns School of Medicine, he completed his internship and residency with the University of Hawaii Family Medicine Residency Program, and then went on to complete his board certification in aesthetic medicine from the American Board of Aesthetic Medicine in San Diego.Dr. Ortiz specializes in primary and urgent care, annual physical exams, men’s and women’s health, PrEP, Nexplanon® and IUD placement and removal, and a variety of in-office joint injections. He also provides Botox®, derm fillers, chemical peels, and laser rejuvenation and resurfacing.Out of the office, Dr. Ortiz enjoys spending time with family and friends, exploring the unique communities of San Diego, attending community events, exercising, traveling, cooking, and baking.Specialties: Family and Preventative Medicine, Aesthetic MedicinePerlman Clinic: Hillcrest, DowntownLanguage: English',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/KennethOrtizMD.jpg'
            //   },
            //   {
            //     index: 31,
            //     name: 'Melissa Macy DO',
            //     bio: '“Doctor, Friend, Advocate”Melissa Macy graduated from the Nova Southeastern College of Osteopathic Medicine in 2011.Dr Macy honors the role of the physician as a teacher by getting to know her patients and collaborating to find a treatment plan that both works and fits into your unique lifestyle. She loves to guide, educate and offer practical solutions to help meet your health goals.As a doctor of osteopathic medicine, she focuses on you, the whole patient, not just your illness. In her approach you can see she values the mind, body and spirit.Dr Macy studied philosophy and journalism before medicine and still enjoys listening to NPR radio, taking long walks with her dog Diego and practicing meditation in her free time.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/06/Dr.Macy500x500.jpg'
            //   },
            //   {
            //     index: 32,
            //     name: 'Jennifer Phan FNP-C',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/09/JenniferP500x500.jpg'
            //   },
            //   {
            //     index: 33,
            //     name: 'Christopher Ceriale PA-C',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/09/Chris500x500.jpg'
            //   },
            //   {
            //     index: 34,
            //     name: 'Madalasa Bista, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr. Bista is a board-certified family medicine physician who provides comprehensive, evidence-based primary care. She takes the time to really listen and believes in empowering her patients and their families to make informed decisions about their healthcare. Her personality is warm and compassionate, while her practice style is thorough and detail-oriented. Dr. Bista’s special interests include preventive medicine, women’s health, chronic illness management and mental health. She also performs a number of in-office procedures including skin biopsies. Dr. Bista was born in Nepal, lived in South Africa for\n' +
            //       'several years in early childhood, and then mainly grew up in the suburbs of\n' +
            //       'Atlanta, GA. Her worldly experience inspired a commitment to community service\n' +
            //       'that is the root of her decision to pursue medicine. In medical school she completed\n' +
            //       'a family medicine honors program focused on expanding access to care in\n' +
            //       'underserved communities. During residency she provided care to refugees through\n' +
            //       'a partnership with the International Rescue Committee in Charlottesville, VA. After completing residency in 2016, Dr. Bista moved to\n' +
            //       'California with her husband whose childhood dream was to live in San Diego. Outside\n' +
            //       'work she enjoys her family, vegetarian cooking and beach days. EducationBrown University – Bachelor of Science, Human Biology, 2008Medical College of Virginia (Virginia Commonwealth\n' +
            //       'University) – Doctor of Medicine, 2013Medical TrainingUniversity of Virginia – Family Medicine Residency, 2016CertificationAmerican Board of Family Medicine, 2016 LanguagesEnglish, Nepalese',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/10/DrBista500x500.jpg'
            //   },
            //   {
            //     index: 35,
            //     name: 'Adam Shults PA-C',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/10/Adam500x500.jpg'
            //   },
            //   {
            //     index: 36,
            //     name: 'Natalia Kovaleski PA-C',
            //     bio: '“PA, Friend, Advocate”Natalie Kovaleski, PA-C, received a Bachelor of Science in Biology from Loyola Marymount University. She then completed a Master of Physician Assistant Practice (MPAP) degree from Keck School of Medicine of USC in 2013. Prior to joining Perlman Clinic, she worked in an Internal Medicine practice, with a focus in preventive medicine, in Los Angeles for six years. She is thrilled to be part of the Perlman Clinic team and strongly believes in the care and wellness it provides its patients. As a provider, she strives to encourage physical and emotional health through communication and education.Natalie is committed to staying current with medical knowledge by attending conferences and seminars, as well as, participating in medical workshops to further her procedural techniques.Natalie grew up in San Diego and is happy to be back in her hometown. When not at Perlman Clinic, she enjoys spending time with her husband and two children, traveling, and being outdoors.Natalie is fluent in Spanish.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/11/Natalia500x500.jpg'
            //   },
            //   {
            //     index: 37,
            //     name: 'Youstina Soliman, M.D.',
            //     bio: '“Doctor, Friend, Advocate”Dr Soliman values her role as a physician in a special way, first as a fellow human, a mom, a wife, an advocate for care, before naming the title Physician. She had earned BS in Mathematics, with minor in Pre-medicine. She ventured in the financial industry when she realized that she found her calling to help other further and connect with people on a more personalized level. She then pursued medicine in AUA- College of Medicine, in the Caribbean, with clinical studies and hospital rotations done in different hospitals in the Northeast of US. She returned locally to home state, with family in NJ for residency training at St. Joseph’s regional medical center. She trained with a great mixture of patient demographics and ages in family medicine specialty. Dr Soliman progressed to practice in different clinical settings, in primary care, urgent care, Telehealth, and also did Locums positions. She found that she enjoys to practice family medicine with its uniqueness and beauty of continuity of care with evidence based medicine. She believes in treating patients as a Whole, as human with emotions, culture ties, and personal values, and not by individual body system or specific problem. She teams up with patients to aid in understanding personal health, prevention of disease, and working towards achieving health conditions control in a step wise approach. When visiting CA years ago while traveling, it became a dream home, so finally felt was blessed to make the move to San Diego to enjoy the beautiful weather and outdoors with her small family. Outside of medicine, loves singing, playing her keyboard, dancing, running, spending time with family, and meditating in the outdoors of San Diego Beaches.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/11/DrSoliman500x500.jpg'
            //   },
            //   {
            //     index: 38,
            //     name: 'Nicholas Kahl FNP-C',
            //     bio: 'Bio Coming Soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/12/NicholasKahl500x500.jpg'
            //   },
            //   {
            //     index: 39,
            //     name: 'Alexandra Chatfield PA-C',
            //     bio: '“PA, Friend, Advocate”Alex Chatfield, PA-C is a board certified Physician Assistant. She received her Bachelor’s degree in Biology at Point Loma Nazarene University right here in San Diego. As an undergraduate, Alex stayed busy not only earning her degree but playing collegiate softball and basketball. After graduating, she would continue her academic and athletic career overseas at Durham University in England. Here, she would become a member of the women’s basketball team while earning a Master in Science in the field of medical anthropology. Alex would complete her medical education at the Lewis Katz School of Medicine at Temple University in Philadelphia. After some long cold winters in the U.K. and on the east coast, Alex is happy to be back in the sun to begin her career in healthcare. In addition to the Perlman Clinic, Alex works at an urgent care where she continues to grow her knowledge in the treatment of acute injuries and illness. When she isn’t in the clinic you can find her watching Dodger baseball, cooking something new in the kitchen, or traveling to new places with friends and family.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/12/AlexandraChatfield500x500.jpg'
            //   },
            //   {
            //     index: 40,
            //     name: 'Robert Brunst, M.D.',
            //     bio: 'Bio Coming Soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/12/RobertBrunst500x500.jpg'
            //   },
            //   {
            //     index: 41,
            //     name: 'Gourab Das PA-C',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2019/12/GourabDas500x500.jpg'
            //   },
            //   {
            //     index: 42,
            //     name: 'Paul Marquis, M.D.',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2020/01/Marquis500x500.jpeg'
            //   },
            //   {
            //     index: 43,
            //     name: 'Mirza Raheem, M.D.',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2020/01/Raheem500x500.jpeg'
            //   },
            //   {
            //     index: 44,
            //     name: 'Nicole Michael CNP',
            //     bio: 'Bio coming soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2020/02/NicoleMichael500x500.jpg'
            //   },
            //   {
            //     index: 45,
            //     name: 'Kristen Mott PA-C',
            //     bio: '“PA, Friend, Advocate”Kristen is a board-certified physician assistant. In 2014, she graduated from the University of Southern Indiana with a Bachelor of Science in Biology. She moved to San Diego in 2015 and worked for a local plastic surgeon for two and a half years. She then completed my Master’s Degree in Physician Assistant Studies at Western University of Health Sciences, graduating at the top of her class with honors. She views practicing medicine as a partnership between patient and provider, and she wants each of her patients to know she is on their team during their journey to wellness. She has a special interest in preventive medicine as well as office-based procedures and suturing.She loves spending time with her husband and family, including her rambunctious golden retriever, Florence. She enjoys reading, going to indoor cycling classes, and tending to her orchid & houseplant collection.',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2020/02/KristenMott500x500.jpeg'
            //   },
            //   {
            //     index: 46,
            //     name: 'Natalie Waters PA-C',
            //     bio: 'Bio Coming Soon',
            //     image: 'https://perlmanclinic.com/wp-content/uploads/2020/03/NatalieWaters-1024x1024.jpg'
            //   }
            // ]
});