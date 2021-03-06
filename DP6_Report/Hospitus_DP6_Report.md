# CS374 DP6 Report - Hi-fi Prototyping

Team Hospitus

20130736 Andrew Kim

20130760 Junho Son

20150002 Dorjnyam

20160738 Van Hoang


## 1. POV, Target Users, Tasks

### POV

A foreigner who suffers from sports injury [user] needs to find a good hospital with ample accommodation space quickly [needs] because without information, he or she may waste a lot of time jumping between hospitals [insights]. 

### Target Users

A foreigner seeking treatment and accommodation who doesn’t know Korean.

### Tasks

1. Find the most suitable hospital
2. Check if the hospital you chose provides all the conveniences you might need staying there
3. Provide information on the hospital you stayed for the next users

Our tasks are related to our target user because...

1. Foreigners unlike locals, don’t have a lot of friends or acquaintances in Korea to suggest hospitals to use. It is difficult for them to find the hospitals that suits them and having a validation system created by other fellow foreigners can help them find a hospital.
2. Since the foreigners are experiencing language barriers, they have a hard time contacting the hospitals ahead and asking them about the information of the hospital, or finding them online. Hospitus can provide that information fast and easy so that the foreigners know what they are getting into.
3. Foreigners often have hard time searching for conveniences. We provide all the information about that so that our users can have access to whatever they might need.
4. Users can express how they felt about the hospitals they have been to, and help other potential users


## 2. Implementation Notes
 
### Prototype URL: https://andrewpk95.github.io/CS374_Hospitus/
* Developed for viewing on mobile.

### GitHub URL: https://github.com/andrewpk95/CS374_Hospitus/tree/master/docs

### Libraries and Framework: 

Our team used JQuery UI, semantics UI, Firebase, and Google Maps for external library.

### Representative screenshots

#### 1. Home Page

| | |
|-|-|
|![1](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP6_Report/1.png)|Injured users must find a hospital urgently and also it is difficult to click. We tried to reduce the time to the minimum by adding pictures instead of text. Each image is related to a body part. The user can decide what to click easily among the six choices we give him. Since it is a picture it is easier to click as well. It would be difficult for an injured person to click accurately on a text. After clicking a certain image, that information will be sent to the next page, which is the search results page.|

#### 2. Search Results Page

| | |
|-|-|
|![2](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP6_Report/2.png)|The Search result page shows a list of hospitals that specializing in the specific injury that the user have searched for. On the top of the page are some sorting options. Users can click on the radio buttons and the app will shows the result list based on different categories. Each result will show the name, image, rating and a short description of the hospital.  Next to the Address line is a Show on map button, which users can click to see the location of the hospital on the map. If users click on the name or the image of the hospital, the app will show the review page with detailed information and review about that hospital.|

#### 3. Hospital Page / Review Page

| | |
|-|-|
|![3](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP6_Report/4.png)|Review page accepts the firebase key of the hospital user clicked from the search page. Based on the key, the page will load all the information needed for the hospital page. On the top, it will load the hospital image and the basic information shown in the search page to ensure that the user clicked on the right hospital. It additionally provides how many of which types of rooms hospital is providing. <br />Below that, the user can click on the book a room, and it will display a small form in front of the review page. That will be explained below in detail.<br />Then is the ratings. The ratings are fetched from the firebase and then shown in stars. Yellow stars represent the actual stars and black stars are empty. It is naturally easy to perceive.<br />Finally reviews are at the bottom. The user can view what others have written about the hospital. User can also give rating and add a review to add on to the evaluation. All the reviews are stored on the firebase as well and loaded accordingly. Whenever a new review is written, it will be added to the bottoms of the reviews.|

#### 4. Booking Page

| | |
|-|-|
|![4](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP6_Report/5.png)|Clicking the book a room button will display this small form. You can decide which room you would like to book and click on booking. Then it will disappear and show the review page again. The review page will now display accommodation with the change taken in account.|

#### 5. Nearby Conveniences Page

| | |
|-|-|
|![5](https://raw.githubusercontent.com/andrewpk95/CS374_Hospitus/master/DP6_Report/6.png)|Nearby conveniences page displays a map with 3 selectors (restaurant, transportation, and store). By pressing on each button, user can get a map containing nearby places filtered by that selector. Markers are placed using the Google Maps Javascript API.|


## 3. Individual Reflections

### 20130736 Andrew Kim

I was in charge of developing the Home Page, implementing functions and designing UI. I also created the database of hospitals, rooms and reviews for other pages to use. Finally, I created the framework of the Booking Page Popup using JQuery UI. 

One difficulty I faced was making the UI look pretty on mobile. Since I did not know I could test how it looks on mobile directly on PC using the “Inspect” option, I had to commit to GitHub page every time I wanted to test how it looks on my phone. Another difficulty I faced was designing the structure of the database. Since I was used to normalizing SQL database, using key-value based database like Firebase came unnatural to me. 

What I mostly learned through this experience was setting up and using Firebase, and helping others use the database that I designed. 

### 20130760 Junho Son

I designed the review page of the Hospitus webpage. The review page is the most crucial page of our system, since a lot of information is displayed, and also a lot can be done within the page. I used the css grid to divide the page, so that I can group the relevant information. Css grid was important in spacing out the page as well because the review page contained many functions. I put the hospital information at the top, since that is what the user is probably most interested in. Then I put the ratings of the hospitals and finally the reviews of the hospital. Buttons leading to nearby conveniences and booking is at the top component as well, since they are important. Rating was given in stars which is an universal sign, making it easy for the user to perceive. The user can also give his ratings and review about the hospital.

I linked the webpage to the firebase completely. Every single information including reviews, image and booking is stored in the firebase. When the user enters a certain hospital’s review page, the key for the hospital in the firebase is passed in the url and I used that url to extract information from the firebase to show on the webpage. Unfortunately, the speed is pretty slow, so the webpage first loads all the hard coded components of the html and then loads the information from the firebase, but I couldn’t figure out a way to fix this problem because the only solution is to hardcode the whole page and then replicate it for every other hospitals in the firebase. It will be a hard process as we increase the number of hospitals.

Most difficult part of designing the UI was the bias I had naturally. I cannot think in the user’s position and make everything convenient for the user. I had to change the positions of the components and make it natural as possible. Also, I have looked at other webpages to see how others design web UIs. That helped me to think like a user.

### 20150002 Dorjnyam

I was in charge of Nearby Conveniences page. The page displays 3 buttons and a map. Users can view nearby locations of restaurants, transportation, and stores by pressing the buttons. The page displays map for each hospital by getting their unique ID from the query string. It makes call to Firebase and receives each hospital’s latitude and longitude coordinates stored in the database.

Using Google Javascript API was bit difficult at first as it was quite different than when I used Embed API. However, after reading documentation and seeing examples, it became easier.

I made the page responsive by using CSS Grid template layouts. I would say CSS Grid is the most important thing I learned from this implementation task.

I opted to use Semantic UI for its clean design and intuitive semantics. It was better than using Bootstrap as we were using CSS Grid for page layouts. 


### 20160738 Van Hoang

In Project 6, I have implemented functions and design UI for Search Result Page. During the implementation, I have faced several problems and difficulties. One of them was designing the UI to be suitable for mobile version, since our app is intended to mainly run on mobile phone. Another problem was that I was not familiar with Firebase, so I had to spend quite a lot of time to learn how to use it. Overall, I have learned some useful skills such as creating and managing database by using Firebase, as well as using CSS Grid to design UI for mobile app. 


## 4. Studio Reflections

**Constructive Feedbacks:**
- First page is intuitive because of pictures
- Booking a room function
- Markers on Google map makes it easy to find specific locations

**Feedbacks to be addressed:**
- The color of the stars in the review page needs to be less saturated -> use colors that are more comfortable to the eye.
- The injury icons in the homepage needs description -> Add text caption at the bottom of each icon
- There needs to be another way to search for the hospitals -> Add another option to search for the hospital
- Overall design needs to be less packed -> Make the design spacious
- Alerts might be bothering -> Remove unnecessary alerts
- Style is inconsistent -> Unify the style
- Store selection is not displayed -> Highlight the options selected currently to let the user know where he/she is
