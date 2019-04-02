# CS374 DP3 Report - Paper Prototyping

Team Hospitus

20130736 Andrew Kim

20130760 Junho Son

20150002 Dorjnyam

20160738 Van Hoang


## 0. Change from Last Report

Target User: Foreigners in Korea with sports injury who lack information in Korea. 


## 1. Photos of Prototype

| | |
|-|-|
|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/3.jpg)|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/4.jpg)|
- Selecting injury from drop down view will show search results.

| | |
|-|-|
|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/5.jpg)|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/6.jpg)|
- Selecting the hospital picture or the name will show the reviews page for the hospital.

| | |
|-|-|
|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/7.jpg)|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP3_Report/8.jpg)|
- Choosing different sort methods will change the search results

## 2. Participants

1. German. Male. Exchange student in KAIST. Likes to draw comics. 
 * Recruited by Andrew Kim, shares a club with him. 
 * He has difficulty finding hospitals other than Pappalado due to language barrier. 
 * His hospital choice is limited to Pappalado because he is not sure if other hospitals are good enough 
2. Mongolian. Male. Student in KAIST
 * Recruited by Dorjnyam
 * Plays basketball
 * Was injured before
 * Had a hard time getting hospitalized
3. Thai. Male. Freshman in KAIST. Like playing basketball.
 * Recruited by Van Hoang, taking a class with him
 * He has been in Korea for just one month, so he lacks information about hospital in Korea
 * Have difficulty finding a good hospital since he does not understand Korean.


## 3. Briefing

Hospitus helps foreigners find the hospital they need. With Hospitus you can select your injury. For example, you can select “cuts and puncture wounds”. Hospitus will come up with a list of hospitals you can get further information. On the search result page, you will be able to see summarized important information of each hospital. If you click the hospital name, you will be able to view reviews that other foreigners wrote about the hospital in English. 


## 4. Tasks

1. Find the hospital with the best rating on service
2. Find the hospital that has the equipments and treatments required
3. Find the hospital that has enough accommodation

Our tasks are related to our target user because...

- Foreigners unlike locals, don’t have a lot of friends or acquaintances in Korea to suggest hospitals to use. It is difficult for them to find the hospitals that suits them and having a validation system created by other fellow foreigners can help them find a hospital.
- Since the foreigners are experiencing language barriers, they have a hard time contacting the hospitals ahead and asking them about the information of the hospital, or finding them online. Hospitus can provide that information fast and easy so that the foreigners know what they are getting into.


## 5. Observations

### Task 1: Find the hospital with the best rating on service
* [Critical: HIGH] There is no option to sort by the service rating in the search results page (right now it only has sort option by overall rating). (P1, P2, P3)
  * Solution: Add the options to sort search results by Service, Food, Hygiene, and Location ratings. 
* [Critical: Medium] The patient has a hard time locating where the information of service rating is in the review page. (P2, P3)
  * Solution: Make ratings stand out more than other elements in the review page. 
* [Critical: Low] The patient does not see the actual numbers for service rating. (P1)
  * Solution: Display numbers for other ratings as well. 
* [Critical: Low] The patient does not understand that the biggest font rating is the overall rating. (P2)
  * Solution: Change the label to “Overall Rating” to clarify. 
### Task 2: Find the hospital that has the equipments and treatments required
* [Critical: HIGH] The patient does not know which equipment he actually needs to look for when he or she chooses a certain injury. (P1, P2, P3) 
  * Solution: Tell the user in the search page that search results are displayed by the equipment that the patient needs (ex. User selects “Broken Bone” for the injury, search page tells the user that it searched for hospitals that has the “X-Ray” equipment). 
* [Critical: Medium] The drop down view might not have the injury the patient has. (P1)
  * Solution: Change the drop down menu into text input field, and include as many kinds of injuries as possible. 
* [Critical: Low] With the drop down view system for the injury, it is difficult to locate and choose the injury the patient is looking for. (P1)
  * Solution: Change the drop down menu into text input field and make it into autocomplete. 
### Task 3: Find the hospital that has enough accommodation
* [Critical: Medium] The patient could not find out how to sort the search results by availability (hidden by the drop-down menu) (P3)
  * Solution: Instead of drop down menu for the Sort By, lay out sorting options into radio buttons. 
* [Critical: Low] The patient wants to know what type of rooms are available, such as single rooms and double rooms. (P2)
  * Solution: Provide such additional information in the review page. 
### Miscellaneous
* [Critical: HIGH] There is no go-back button in the review page. (P1, P2, P3)
  * Solution: Create go-back buttons for the review pages.


## 6. Individual Reflections

### 20130736 Andrew Kim (Role: Computer)

I played the role of a ‘computer’ throughout the testing process, doing the paper prototype for the participants. I processed the user’s inputs (clicking on the paper prototype) and layed out outputs (hospital search results, review page…) for the users. One difficulty I faced playing the role was remembering all possibility of actions the participants might take and processing it. Another difficulty I faced was rummaging through the paper finding the right review page for the user. Even though I practiced with the paper prototype beforehand, every new session made me nervous which did not let me focus in performing well as a computer role. As a ‘computer’ role, I learned how hard it is for humans to act as a computer, and learned to appreciate the computers doing the processing for us. 

### 20130760 Junho Son (Role: Facilitator)

I was the facilitator of the group and my job was to make the prototype test run smoothly. Although the briefing and the tasks handed to the user were sufficiently explanatory on the instructions to maneuver through the paper prototype, sometimes users could not find what to click to get to the place they wanted. Also, users did not know where the information they wanted was displayed. Overall, I did manage to run the tests pretty smooth but I realized that without the facilitator, the users might have a difficult time getting what they want from our service. It looks like there is much more to improve on learnability of our product.

### 20150002 Dorjnyam (Role: Observer)

I observed the users’ interaction. Not all functions were easily visible to the user. So they had trouble navigating (e.g. back button). 

### 20160738 Van Hoang (Role: Observer)

I was one of the observer during multiple sessions of testing process, and all I did was just making observations about users’ interaction. I noticed that sometimes users got confused and they had trouble finding the right way to perform some tasks due to the shortcoming of our prototype. Overall, the job was quite tedious, and one difficulty that I faced was sometimes I forgot to shut my mouth and give some small instructions to users. I tried to fix it by not repeating that mistakes again in later sessions.


## 7. Studio Reflections

**Constructive Feedbacks:**
- The tasks are well user focused, the scope of tasks is proper at user level
- Tablized information of observation induced problems and solutions

**Feedbacks to be addressed:**
- The information may be too descriptive for emergent patients -> Make information more visual and faster to access. e.g.) Add icons for equipments
- Add more search options -> Add search according to the area of injury, not the type of injury
- The briefing was difficult to read -> Highlight or underline the keywords
- Users might not be able to use hands -> Try to implement voice UI in prototype.
- The three tasks are all somewhat similar: finding the hospital that works for you -> Merge the original tasks into one and create two distinct tasks.

Based on the last feedback we will change tasks into:
1. Find the hospital that suits you using ratings and equipment and treatment they provide.
2. Verify the hospital you chose has sufficient nearby conveniences you might need.
3. Provide information on the hospital that you’ve been to.


**Feedbacks to be addressed:**
- 


