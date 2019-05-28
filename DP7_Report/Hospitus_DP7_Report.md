# CS374 DP7 Report - User Testing

Team Hospitus

20130736 Andrew Kim

20130760 Junho Son

20150002 Dorjnyam

20160738 Van Hoang


## 1. Written Protocol

### Setting up the testing environment: 

For the user testing of Hospitus, prepare a cell phone, notes and stationary. Ask a foreigner if he/she can participate in the usertesting. If they say yes, the facilitator should ask the participant to open up the page with the phone using google chrome: (URL: https://andrewpk95.github.io/CS374_Hospitus/). 

### Introduction and informed consent: 

For the experiment, we will be collecting feedback through notes and take a photo of the participant with the facilitator. Make sure that the participant understands what is required of him/her and acquire the participant’s consent.

First, the facilitator asks the patient about demographic information that relates to the user testing. Following are the questions:

1. What is your age?
2. What is your occupation?
3. How long have you been in Korea?
4. Have you previously visited hospitals in Korea, and if you did, how was it?
5. How was your first experience of visiting hospital in Korea?
6. How do you usually look for a hospital?
7. Do you play sports, and if you do, have you been injured from sports before?

The test will only continue if the participant is a suitable target user for Hospitus, judging from information gathered from above questions. The facilitator should pass the patient introduction of Hospitus. Further explanation will be given by facilitator if needed.

### Introduction:

> “Hello, and welcome to user testing of ‘Hospitus.’ <br /> Hospitus is a website that helps foreigners residing in Korea find suitable hospitals quickly, when they get abrupt sport injuries. Now imagine you have just been injured playing your favorite sports. Use Hospitus to guide you and perform the tasks that will be given to you.”

After the introduction is properly given to the participant, the facilitator will then show functionality of the website by going through an example search with another prepared cell phone. Then the participant is asked to read the tasks.

### Task list and instruction:

1. Find the most suitable hospital based on the information provided by Hospitus.
2. Check if the hospital you chose provides all the conveniences you might need staying there.
3. Provide information on the hospital you stayed for the next users.

The facilitator should help the participants when they are completely lost.

### Recording Strategy:

While the test is being performed, observers write down any inconveniences or confusions displayed by the participant. They will also write down information from the pre-interview and the post-interview. 

### Interview questions:

After the participants are done with the three tasks and all feedbacks and observations are written down, the facilitator must ask the following interview questions: 

1. How was your experience using our website?
2. Were there any confusions?
3. Were there any functionalities you would like to see in our website or any functionalities you did not understand?
4. Any comments on the UI?

### Debrief Prompt: 

After the test, read the following debrief prompt to the participant: 

> "Thank you for giving us your valuable time and participating in our user testing. We will make sure that your valuable feedbacks will be taken into account to improve our application and your experience in the future. We will make sure any foreigners can easily find suitable hospitals in Korea. Again, thank you for participating.”


## 2. Session Observations
 
### Participant #1: 

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP7_Report/1.jpg)

Age: 30

Occupation: Ph.D candidate

P1 has lots of experience of going to hospital for various reasons: sports injury, dental, and surgery. He did not understand the language and did not know locations of hospital. He found hospital to stay by doctor recommendation or by asking acquaintances. He emphasized importance of insurance coverage of hospitals.    

Summary: Participant 1 had the most experience in Korea and since he was a CS major, he provided very important usability feedbacks. 

### Participant #2: 

![2](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP7_Report/2.jpg)

Age: 19

Occupation: Sophomore

P2 has been in Korea for 1.5 years. He has been to hospital two times: one for incision injury and one for sports injury. His advisor went with him to hospitals and helped with communication with staff. 

He preferred to use Naver maps (it is more exhaustive). He wanted search by type of injury such as cut, fracture, and bone break besides location of injury.

Summary: Participant 2 had minimal experience on visiting hospitals, and provided what could have gone better with his experience.

### Participant #3: 

![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP7_Report/3.jpg)

Age: 19

Occupation: Freshman in KAIST

P3 has been in Korea for a few months, and he has never been to hospital before

He provided positive feedbacks about the design of the application. He expected that the app would have the functionality of searching for hospital by the distance, not only the injury)

Summary: Participant 3 was the most suitable target user because he doesn’t have any experience and therefore will go through trouble. He also enjoys sports judging from his physical stature which makes him a great target user for Hospitus.

### Participant #4: 

![4](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP7_Report/4.jpg)

Age: 20

Occupation: Exchange Student in KAIST

P4 has been in Korea for 3 months, and he had an experience in finding a hospital in Korea using 114 call center. The call center spoke English and found a suitable hospital for him, and he had an acceptable experience. 

Summary: Participant 4 showed no difficulty navigating through the website. He provided a lot of feedbacks for our website and suggestions for improvements. 


## 3. Usability Lessons

### Some functionalities were not clearly visible. Users missed out on some functions:
* [High] Users did not use nearby conveniences function (P2, P3)
  * Solution: Make a visual indicator to click the necessary buttons
* [Medium] Review format is not clear enough. Past reviews have been mistaken for options for writing review (P1)
  * Solution: Add Description for the past reviews
* [Medium] Users did not recognizing rating, they only saw submitting reviews(All)
  * Solution: Make the rating more visible and put a text description to make sure user knows what to do

### Feedbacks were missing when they were required:
* [High] Visual feedback when submitting a review (P1)
  * Solution: Provide visual feedback like animated modal 
* [Medium] There is no way for users to check the booked info once booking is complete, users should be able to log in to check their booking information (P4)
  * Solution: Add log in function to allow users to see their booking information.

### Some functionalities are restricting to users:
* [High] Injury selection is too limited on the Home page.(P2, P3, P4)
  * Solution: Make an option to show all hospitals instead of injury specific.
* [High] User wants to know the nearest hospital not injury specific (P3)
  * Solution: Make an option to show all hospitals instead of injury specific.
* [Medium] Book an appointment instead of just hospitalization (P1)
  * Solution: Add a functionality to make an appointment, too.
* [Low] Only the hospital name and image being clickable in search page (P1)
  * Solution: Consider making the whole <div> about a hospital clickable.
* [Low] User wants to see authors of the comments (P1)
  * Solution: Add user system for the review
* [Low] User wants to see the date of review comments (P4)
  * Solution: Add to each previous reviews what time it was written at. 
* [Low] Hospitals may have more than one specialty (P4)
  * Solution: Add more than one specialty to some of the hospitals. 
* [Low] Adding filtering option to cull out search results by distance may be helpful (P4)
  * Solution: Add filter option in the Search Page. 
* [Low] User may want to rate the hospital by “Price” (P4)
  * Solution: Add “Price” rating. 
* [Low] User may want to know the open time of the hospital and contact info of the hospital in the Hospital Page (P4)
  * Solution: Add open time and phone number to each hospitals. 
* [Low] User wants to see more pictures of the hospital (P4)
  * Solution: Add more pictures and make them viewable by slideshow. 

### Others:
[Medium] Search Page contains too much text / too much information (P4)
  * Solution: Remove unnecessary information such as equipments. 
[Low] Naver maps might be better than Google maps because Naver map is specialized for Korea. (P2)
  * Solution: Consider using Naver Map API instead of Google Map API. 

### Lessons from usability observations:
* What may be obvious for us developers might not be obvious for users
* Different users have different preferences
* Different Users see different problems
* User testing perfects the program


## 4. Plan for Iteration

We can improve the process in following ways:
* Provide incentive for participants and make them participate more active.
* Select participants outside of KAIST.
* Select more various tasks to give the participants.
* Ask for preference of participants on ambiguous problems. e.g. how much should be clickable in the UI
* Use Front-End frameworks like React or Svelte.


## 5. Studio Reflections

**Constructive Feedbacks:**
- Effort to find users that were from our target population
- Pre-Interview is good to find target user
- Detailed information of target users
- The usability observations were categorized into simple questions

**Feedbacks to be addressed:**
- Usability observations are not organized -> Organize usability observations so that they are categorized according to main themes of usability observations
- Post-interview questions are not various -> Add more specific and differentiating post-interview questions
- Information has not been gathered after interview, such as call center -> Do research based on the interview feedbacks
- Some interview questions are too vague and general -> Make future interview questions clear and specific
