# CS374 DP4 Report - Lo-fi Prototyping

Team Hospitus

20130736 Andrew Kim

20130760 Junho Son

20150002 Dorjnyam

20160738 Van Hoang


## 1. POV & Tasks

### POV

A foreigner who suffers from sports injury [user] needs to find a good hospital with ample accommodation space quickly [needs] because without information, he or she may waste a lot of time jumping between hospitals [insights]. 

### Tasks

1. Find the hospital that suits you using ratings and equipment and treatment they provide.
2. Verify the hospital you chose has sufficient nearby conveniences you might need.
3. Provide information on the hospital that you’ve been to.

Our tasks are related to our target user because...

1. Foreigners unlike locals, don’t have a lot of friends or acquaintances in Korea to suggest hospitals to use. It is difficult for them to find the hospitals that suits them and having a validation system created by other fellow foreigners can help them find a hospital.
2. Since the foreigners are experiencing language barriers, they have a hard time contacting the hospitals ahead and asking them about the information of the hospital, or finding them online. Hospitus can provide that information fast and easy so that the foreigners know what they are getting into.
3. Users can express how they felt about the hospitals they have been to, and help other potential users


## 2. Prototype

### URL: https://invis.io/9SRES2CD6JM

### Prototype Tool

Our team used InVision for prototyping tool, provided by the class. InVision really allowed us to make our prototype look like an actual working app, but some functions were missing or limited so that we could not fully implement all aspects of the prototype. 

### Representative screenshots

#### 1. Selecting Injury

![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP4_Report/1.png)

**Instruction:** Clicking the logo at the top takes user to this page, just like many popular websites.
Simply, hovering over the highlighted injury text box will show the drop down menu. We implemented this way for high learnability. Then, the user can click the injury to get to search results.

![2](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP4_Report/2.png)

**Design Choice:** Originally, we wanted to implement a text input with autocomplete drop down menu, but Invision does not allow text input.

#### 2. Search Result

![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP4_Report/3.png)

**Design Choices:** Search results show hospitals in order according to different categories. Originally this was a drop down menu, but it was changed into radio buttons for learnability. User can simply choose the category that is most important to him/her for easier search.

Hospitals’ information and ratings are included in each box alongside the name and picture of the hospital. 

**Instruction:** Clicking anywhere on this box will take user to the review page of the respective hospital.

#### 3. Review Page

![4](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP4_Report/4.png)

**Instruction:** User can click nearby conveniences to view where the hospital is and how nearby conveniences are distributed. There is a back button to navigate the user back to the search results. User can give rating by clicking on the empty stars

**Design Choices:** The information of the hospital is given in same format as search results page so that it is user-friendly. Different ratings are given as well. Buttons that can be clicked are highlighted.

Originally, we made a make a review page, but could not make it functional as Invision does not allow any text input. Therefore, it was replaced by rating with stars. Also, Invision only allows one overlay at a time which restricted us to make only one rating for each review page.

#### 4. Nearby Conveniences Page

![5](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP4_Report/5.png)

**Instructions:** User can click on different radio buttons to display different conveniences around the hospital. There is a back button to go back to the search results page.

**Design Choices:** Nearby conveniences are pinpointed on the map for visibility. User can easily navigate through radio buttons.


## 3. Observations

### Task 1: Find the hospital that suits you using ratings and equipment and treatment they provide.
* [Critical: HIGH] Patient is unaware of treatment and equipment that is required for their selected injury. (P1, P2, P3) 
  * Solution: Tell the user in the search page that search results are displayed by the equipment that the patient needs (ex. User selects “Broken Bone” for the injury, search page tells the user that it searched for hospitals that has the “X-Ray” equipment). 
* [Critical: HIGH] The drop down view might not have the injury the patient has. (P1, P3)
  * Solution: Change the drop down menu into text input field, and include as many kinds of injuries as possible. 
* [Critical: Medium] Users wanted to search by distance (how close the hospital is). (P2)
  * 

* [Critical: Medium] There is no description of the equipments. Explanation is required. (P3)
  * 

* [Critical: Low] No contact information of the hospitals. (P2)
  * 

### Task 2: Verify the hospital you chose has sufficient nearby conveniences you might need.
* [Critical: Low] People may want to search for other types of nearby conveniences such as pharmacy; right now there are only three choices. (P3)
  * 

* [Critical: Low] Users want visualization of hospital address. (P3)
  * 

### Task 3: Provide information on the hospital that you’ve been to.
* [Critical: Medium] There is no feedback after putting in rating; they don’t know whether their review is submitted or not. (P1, P2)
  * Solution: 
* [Critical: Medium] Users want to enter more information to the review (such as comments) instead of simply rating the hospital. (P1, P2, P3)
  * Solution: 

### Miscellaneous
* [Critical: HIGH] Users might want to make a reservation at the hospital. (P3)
  * 

* [Critical: Low] The “Back Button” in the Nearby Conveniences Page takes you back to the Search Page instead of the Hospital Page, which may be unintuitive for some users. (P1)
  * 


## 4. Paper vs Digital 

1. Types of usability issues they helped identify:
* Facilitator could help during paper prototyping when unexpected situations occurred, but Lo-fi prototyping didn’t have a facilitator. Issue of learnability was more highlighted.

2. Participants’ Expectations and Reactions:
* Reaction speed was much higher. Users were much more satisfied
* Readability: Users could read digital text faster than poorly handwritten text.
* Users expected more freedom than the paper prototype, but Invision restriction turned down those expectations a little bit because it doesn’t allow users to give text inputs.

3. Changes made from paper prototype:
* Nearby conveniences page was added to help users figure out what they could find around the hospital.
* Drop down menu of injury was changed to describe just body parts, so that it was easier for users to choose.
* The sort buttons were drop down but was changed to radio for learnability and there were more search categories added.
* Users can rate the hospital.
* Go back buttons were added.
* Users can view what kind of rooms are offered by hospital


## 5. Studio Reflections

**Constructive Feedbacks:**
- The prototype looks clean and professional, and has good design. 
- The new tasks better represent users’ problems
- Feedback/solution table was easy to understand.
- The prototype is easy to follow: Good Learnability.

**Feedbacks to be addressed:**
- Injuries could include pictures for better interaction -> change drop down menu into a list of pictures.
- Login feature could be required -> Login feature could be added for making reviews later on in different prototype to prevent malicious anonymous reviews.
- Rating is repetitive for sorting option -> Reduce options into keywords for better visibility.
- Try considering foreigner-specific factors -> Include foreigner specific information in the review page of hospitals.
- Mobile version would have been better for our app’s purpose -> Focus later projects into making mobile version of the web. 
